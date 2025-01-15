import type { SessionManager as SessionManagerType } from 'the-viper-room-wasm';

export async function extract_session_data_from_db(
	sessionManager: SessionManagerType,
	userId: bigint
): Promise<{ success: boolean; data?: ArrayBuffer }> {
	try {
		const sessionExists = await sessionManager.session_exists(userId);
		if (!sessionExists) {
			console.log(`No session file found in IndexedDB for user: ${userId}`);
			return { success: false };
		}

		console.log(`Session file found in IndexedDB for user: ${userId}`);
		const sessionData = await sessionManager.get_session(userId);

		if (!sessionData) {
			console.log(`Failed to extract session data from IndexedDB for user: ${userId}`);
			return { success: false };
		}

		const uint8Array = new Uint8Array(sessionData);
		const arrayBuffer = uint8Array.buffer;

		return { success: true, data: arrayBuffer };
	} catch (error) {
		console.error(`Error extracting session data from IndexedDB: ${error}`);
		return { success: false };
	}
}