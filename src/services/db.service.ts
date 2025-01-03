export class UserDataStorage {
	private db: IDBDatabase | null = null;

	async init() {
		return new Promise<void>((resolve, reject) => {
			const request = indexedDB.open("UserData", 1);

			request.onupgradeneeded = () => {
				this.db = request.result;
				if (!this.db.objectStoreNames.contains("userSessions")) {
					this.db.createObjectStore("userSessions");
				}
			};

			request.onsuccess = () => {
				this.db = request.result;
				resolve();
			};

			request.onerror = () => {
				console.error("Error opening IndexedDB:", request.error);
				reject(request.error);
			};
		});
	}

	async saveSession(userId: bigint, sessionData: ArrayBuffer) {
		if (!this.db) {
			throw new Error("Database is not initialized.");
		}

		const transaction = this.db.transaction("userSessions", "readwrite");
		const store = transaction.objectStore("userSessions");

		return new Promise<void>((resolve, reject) => {
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			const request = store.put(sessionData, userId.toString());

			transaction.oncomplete = () => {
				console.log(`Session saved for user: ${userId}`);
				resolve();
			};

			transaction.onerror = () => {
				console.error("Error saving session:", transaction.error);
				reject(transaction.error);
			};
		});
	}

	async getSession(userId: bigint): Promise<ArrayBuffer | null> {
		if (!this.db) {
			throw new Error("Database is not initialized.");
		}

		const transaction = this.db.transaction("userSessions", "readonly");
		const store = transaction.objectStore("userSessions");

		return new Promise((resolve, reject) => {
			const request = store.get(userId.toString());

			request.onsuccess = () => {
				resolve(request.result || null);
			};

			request.onerror = () => {
				console.error("Error loading session:", request.error);
				reject(request.error);
			};
		});
	}

	async deleteSession(userId: bigint): Promise<void> {
		if (!this.db) {
			throw new Error("Database is not initialized.");
		}

		const transaction = this.db.transaction("userSessions", "readwrite");
		const store = transaction.objectStore("userSessions");

		return new Promise((resolve, reject) => {
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			const request = store.delete(userId.toString());

			transaction.oncomplete = () => {
				console.log(`Session deleted for user: ${userId}`);
				resolve();
			};

			transaction.onerror = () => {
				console.error("Error deleting session:", transaction.error);
				reject(transaction.error);
			};
		});
	}

	async sessionExists(userId: bigint): Promise<boolean> {
		const session = await this.getSession(userId);
		return session !== null;
	}

	getDB(): IDBDatabase {
		if (!this.db) {
			throw new Error("Database is not initialized");
		}
		return this.db;
	}
}

export const userDataStorage = new UserDataStorage();