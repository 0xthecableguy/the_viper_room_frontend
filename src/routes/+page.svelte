<script lang="ts">
	import { onMount } from 'svelte';
	import '../lib/wasm.bridge';
	import { userDataStorage } from '@services/db.service.js';
	import type { SessionManager as SessionManagerType } from 'wizard-pi-wasm';
	import init, { SessionManager } from 'wizard-pi-wasm';
	import { sendMessageToServer } from "@services/api.js";
	import ChatBox from '@components/chatbox.svelte';
	import Modal from '@components/Modal.svelte';

	let user: TelegramUser | null = null;
	let avatarUrl: string | null = null;
	let isChatVisible: boolean = false;
	let testUserAvatarUrl: string | null = "https://i.ibb.co/DzMYg1f/alien-head-v2.webp";
	let serverAvatarUrl: string | null = "https://i.ibb.co/j8p2tmq/Pngtree-grey-dinosaur-cartoon-illustration-4653255.png"
	let sessionManager: SessionManagerType;
	let showSecurityPolicyModal = false;

	type Message = {
		type: "user" | "server";
		text: string;
		avatarUrl?: string | null;
	};

	let messages: Message[] = [];
	let buttons: string[] = [];
	let actionButtons: string[] = [];
	let canInput: boolean = true;

	onMount(async () => {
		await initWasm();
		console.log("Wasm module initialized!");

		// // Upload session file to IndexedDB;
		// const user_id_of_uploading_session = 7543812650;
		// await dev_mode_session_upload(sessionManager, user_id_of_uploading_session);

		try {
			console.log('App mounted. Trying to initialize user...');
			await initializeUser();
		} catch (error) {
			console.error('Error initializing any user:', error);
		}
	});

	async function initWasm() {
		await init();
		sessionManager = new SessionManager();
		await sessionManager.initialize();
	}

	const initializeUser = async () => {
		try {
			if (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.initDataUnsafe) {
				const telegramUser = window.Telegram.WebApp.initDataUnsafe.user;
				if (telegramUser && telegramUser.id) {

					user = telegramUser;
					console.log("User initialized:", user);
					avatarUrl = await fetchAvatarUrl(user.id);

					const { success, data: sessionData } = await extract_session_data_from_db(BigInt(user.id));

					if (!success) {
						console.log("Failed to extract user's session from local db. User should log in first");
						return;
					}

					const serverResponse = await sendMessageToServer(user.id, "Mini-app initialized", user.username, sessionData);

					if (success && serverResponse.message === "Congrats! You're authorized! Check out your options below") {
						console.log("Client is authorized and ready for use");
						isChatVisible = true;

						messages = [{ type: "server", text: serverResponse.message }];
						buttons = serverResponse.buttons;
						actionButtons = serverResponse.action_buttons;
						canInput = serverResponse.can_input;
						avatarUrl = avatarUrl;
					} else {
						console.log("Client is NOT authorized");
						console.log("Server response:", serverResponse.message);
					}
				} else {
					console.error("No real user data found in Telegram WebApp | Initializing test user for dev mode");
					await initializeTestUser();
				}
			} else {
				console.error("App mounted outside of Telegram WebApp | Dev mode only");
				await initializeTestUser();
			}
		} catch (error) {
			console.error("Error in initializing user fn:", error);
		}
	};

	async function initializeTestUser() {
		let testUser: TelegramUser = {
			id: 7543812650,
			username: "test_user",
			first_name: "Test",
			last_name: "User",
		};

		user = testUser;
		console.log("Test user initialized:", user.id, user.username);
		avatarUrl = testUserAvatarUrl;

		const { success, data: sessionData } = await extract_session_data_from_db(BigInt(user.id));

		if (!success) {
			console.log("Failed to extract user's session from local db: user should log in first");
			return;
		}

		const serverResponse = await sendMessageToServer(user.id, "Mini-app initialized", user.username, sessionData);

		if (success && serverResponse.message === "Congrats! You're authorized! Check out your options below") {
			console.log("Client is authorized and ready for use");
			isChatVisible = true;

			messages = [{ type: "server", text: serverResponse.message }];
			buttons = serverResponse.buttons;
			actionButtons = serverResponse.action_buttons;
			canInput = serverResponse.can_input;
			avatarUrl = avatarUrl;
		} else {
			console.log("Client is NOT authorized");
			console.log("Server response:", serverResponse.message);
		}
	}

	async function fetchAvatarUrl(userId: number): Promise<string | null> {
		console.log("Fetching avatar url for user with id:", userId);
		return "https://i.ibb.co/j8p2tmq/Pngtree-grey-dinosaur-cartoon-illustration-4653255.png";
	}

	const handleLogin = async () => {
		if (user) {
			isChatVisible = true;

			try {
				const serverResponse = await sendMessageToServer(user.id, "Login attempt. Step 1", user.username);

				messages = [...messages, { type: "server", text: serverResponse.message }];

				if (serverResponse.message === "Please provide your phone number") {
					console.log("Server requesting phone number");
					buttons = serverResponse.buttons;
					actionButtons = serverResponse.action_buttons;
					canInput = serverResponse.can_input;

				}
				else if (serverResponse.message === "Please provide the code sent to your phone") {
					console.log("Server requesting verification code");
					buttons = serverResponse.buttons;
					actionButtons = serverResponse.action_buttons;
					canInput = serverResponse.can_input;

				}
				else if (serverResponse.message === "Please provide 2FA password") {
					console.log("Server requesting 2FA password");
					buttons = serverResponse.buttons;
					actionButtons = serverResponse.action_buttons;
					canInput = serverResponse.can_input;

				}
				else {
					console.log("Unexpected server response:", serverResponse.message);
					buttons = serverResponse.buttons;
					actionButtons = serverResponse.action_buttons;
					canInput = serverResponse.can_input;
				}
			} catch (error) {
				console.error("Error during login attempt:", error);
				messages = [...messages, {
					type: "server",
					text: "Error occurred during login. Please try again."
				}];
			}
		}
	};

	const handlePolicyView = () => {
		showSecurityPolicyModal = true;
	};

	const closeModal = () => {
		showSecurityPolicyModal = false;
	};

	async function extract_session_data_from_db(userId: bigint): Promise<{ success: boolean; data?: ArrayBuffer }> {
		try {
			const sessionExists = await userDataStorage.sessionExists(userId);
			if (!sessionExists) {
				console.log(`No session file found for user ${userId}`);
				return { success: false };
			}

			console.log(`Session file found for user ${userId}`);
			const sessionData = await userDataStorage.getSession(userId);

			if (!sessionData) {
				console.log(`Failed to extract session data for user ${userId}`);
				return { success: false };
			}

			return { success: true, data: sessionData };
		} catch (error) {
			console.error(`Error extracting session data: ${error}`);
			return { success: false };
		}
	}
</script>

<div class="main-container">
	{#if user}
		{#if isChatVisible}
			<div class="header">
				<h1>Welcome to the wizard Pi mini-app</h1>
				<p>This is the main page of the App</p>
			</div>

			<div class="chat-container">
				<ChatBox
					{user}
					{avatarUrl}
					{serverAvatarUrl}
					{messages}
					{buttons}
					{actionButtons}
					{canInput}
				/>
			</div>
		{:else}
			<div class="buttons-container">
				<button class="action-button" on:click={handleLogin}>
					login
				</button>
				<button class="action-button" on:click={handlePolicyView}>
					account security
				</button>
			</div>
		{/if}
	{:else}
		<p class="loading">Loading...</p>
	{/if}
</div>

<Modal
	show={showSecurityPolicyModal}
	onClose={closeModal}
/>

<style>
    :global(body) {
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
        overflow-x: hidden;
        overflow-y: hidden;
        font-family: 'Questrial', sans-serif;
    }

		.main-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100vw;
        box-sizing: border-box;
        background-image: url("/background.jpeg");
        background-size: cover;
        background-position: center;
    }

    .header {
        text-align: center;
        color: white;
        margin-bottom: 2rem;
    }

    .header h1 {
        font-size: 24px;
        margin-bottom: 8px;
    }

    .header p {
        font-size: 16px;
        opacity: 0.8;
    }

    .buttons-container {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .action-button {
        background: rgba(255, 255, 255, 0.1);
        border: 2px solid rgba(255, 255, 255, 0.2);
        color: white;
        padding: 15px 30px;
        border-radius: 10px;
        font-size: 16px;
        cursor: pointer;
        transition: all 0.3s ease;
        min-width: 200px;
    }

    .action-button:hover {
        background: rgba(255, 255, 255, 0.2);
        border-color: rgba(255, 255, 255, 0.3);
    }

    .chat-container {
				width: 85vw;
        height: 75vh;
				max-width: 600px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 15px;
    }

    .loading {
        color: white;
        font-size: 18px;
    }
</style>
