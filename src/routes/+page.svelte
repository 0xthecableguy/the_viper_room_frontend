<script lang="ts">
	import { onMount } from 'svelte';
	import '../lib/wasm.bridge';
	import type { SessionManager as SessionManagerType } from 'wizard-pi-wasm';
	import init, { SessionManager } from 'wizard-pi-wasm';
	import { sendMessageToServer } from '@services/api.js';
	import ChatBox from '@components/chatbox.svelte';
	import AuthBox from '@components/authbox.svelte';
	import Modal from '@components/Modal.svelte';
	import { ActionStep, type WizardPiServerResponse } from '../types';

	let user: TelegramUser | null = null;
	let avatarUrl: string | null = null;
	let isChatVisible: boolean = false;
	let isAuthVisible = false;
	let testUserAvatarUrl: string | null = "https://i.ibb.co/DzMYg1f/alien-head-v2.webp";
	let serverAvatarUrl: string | null = "https://i.ibb.co/j8p2tmq/Pngtree-grey-dinosaur-cartoon-illustration-4653255.png"
	let sessionManager: SessionManagerType;
	let showSecurityPolicyModal = false;
	let sessionData: ArrayBuffer | undefined;

	const EMPTY_SESSION_DATA = new ArrayBuffer(0);

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
		console.log("Session IndexedDB manager initialized!");
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

					const serverResponse = await sendMessageToServer({
						user_id: user.id,
						username: user.username,
						action_step: ActionStep.MINI_APP_INITIALIZED,
						session_data: sessionData || EMPTY_SESSION_DATA
					});

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

		const serverResponse = await sendMessageToServer({
			user_id: user.id,
			username: user.username,
			action_step: ActionStep.MINI_APP_INITIALIZED,
			session_data: sessionData || EMPTY_SESSION_DATA
		});

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

	const handleLogin = () => {
		isAuthVisible = true;
	};

	const handleAuthSuccess = (serverResponse: WizardPiServerResponse) => {
		isAuthVisible = false;
		isChatVisible = true;

		messages = [{ type: "server", text: serverResponse.message }];
		buttons = serverResponse.buttons;
		actionButtons = serverResponse.action_buttons;
		canInput = serverResponse.can_input;
	};

	const handlePolicyView = () => {
		showSecurityPolicyModal = true;
	};

	const closeModal = () => {
		showSecurityPolicyModal = false;
	};

	async function extract_session_data_from_db(userId: bigint): Promise<{ success: boolean; data?: ArrayBuffer }> {
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
</script>

<div class="main-container">
	{#if user}
		{#if isAuthVisible}
			<div class="header">
				<h1>Welcome to the wizard Pi mini-app</h1>
				<p>This is the authentication page</p>
			</div>

			<div class="auth-container">
				<AuthBox
					{user}
					{avatarUrl}
					{sessionManager}
					onAuthSuccess={handleAuthSuccess}
				/>
			</div>
		{:else if isChatVisible}
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
					{sessionData}
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
        background-position: top;
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

    .chat-container, .auth-container {
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
