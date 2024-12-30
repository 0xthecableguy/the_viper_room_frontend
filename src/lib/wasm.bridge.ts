import { userDataStorage } from '@services/db.service';

declare global {
	interface Window {
		initDB: () => Promise<void>;
		saveUserSession: (userId: bigint, data: Uint8Array) => Promise<void>;
		getUserSession: (userId: bigint) => Promise<ArrayBuffer | null>;
	}
}

if (typeof window !== 'undefined') {
	window.initDB = () => userDataStorage.init();

	window.saveUserSession = (userId: bigint, data: Uint8Array) => {
		const arrayBuffer = data.buffer as ArrayBuffer;
		return userDataStorage.saveSession(userId, arrayBuffer);
	};

	window.getUserSession = (userId: bigint) =>
		userDataStorage.getSession(userId);
}