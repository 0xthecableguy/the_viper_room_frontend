import type { SessionManager as SessionManagerType } from 'wizard-pi-wasm';

export async function dev_mode_session_upload(sessionManager: SessionManagerType, user_id_of_uploading_session: number) {
	try {
		const response = await fetch(`/${user_id_of_uploading_session}.session`);
		const arrayBuffer = await response.arrayBuffer();
		const uint8Array = new Uint8Array(arrayBuffer);

		const userId = BigInt(user_id_of_uploading_session);

		await sessionManager.save_session(userId, uint8Array);
		console.log('Session ', user_id_of_uploading_session, '.session saved successfully');

		const savedSession = await sessionManager.get_session(userId);
		if (savedSession) {
			console.log('Session retrieved successfully', savedSession);
		}
	} catch (error) {
		console.error('Error in test:', error);
	}
}