<script lang="ts">
	import { onMount } from 'svelte';
	import '../lib/wasm.bridge';
	import type { SessionManager as SessionManagerType } from 'wizard-pi-wasm';
	import init, { SessionManager } from 'wizard-pi-wasm';
	import { sendMessageToServer } from '@services/api.js';
	import ChatBox from '@components/chatbox.svelte';
	import AuthBox from '@components/authbox.svelte';
	import Modal from '@components/modal.svelte';
	import type { TelegramUser } from '../types';
	import { ActionStep, AuthStage, type Message, type WizardPiServerResponse } from '../types';
	import { extract_session_data_from_db } from '@services/db.utils';
	import { IMAGES } from '../constants';
	import { fetchAvatarUrl } from '@services/api.js';

	let user: TelegramUser | null = null;
	let avatarUrl: string | null = null;
	let isChatVisible: boolean = false;
	let isAuthVisible = false;
	let testUserAvatarUrl: string | null = IMAGES.AVATARS.TEST_USER;
	// let serverAvatarUrl: string | null = IMAGES.AVATARS.SERVER;
	let sessionManager: SessionManagerType;
	let showSecurityPolicyModal = false;
	let sessionData: ArrayBuffer | undefined;

	let messages: Message[] = [];
	let buttons: string[] = [];
	let actionButtons: string[] = [];
	let canInput: boolean = true;

	const EMPTY_SESSION_DATA = new ArrayBuffer(0);

	onMount(async () => {
		await initWasm();
		console.log("Wasm module initialized");

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
		console.log("IndexedDB session manager initialized");
	}

	const initializeUser = async () => {
		try {

			let currentUser: TelegramUser;
			let userAvatarUrl: string | null;

			if (window.Telegram?.WebApp?.initDataUnsafe?.user?.id) {
				currentUser = window.Telegram.WebApp.initDataUnsafe.user;
				userAvatarUrl = await fetchAvatarUrl(currentUser.id);
				console.log("Telegram user initialized:", currentUser);
			} else {
				currentUser = {
					id: 7543812650,
					username: "test_user",
					first_name: "Test",
					last_name: "User",
				};
				userAvatarUrl = testUserAvatarUrl;
				console.log("Test user initialized:", currentUser);
			}

			user = currentUser;
			avatarUrl = userAvatarUrl;

			const { success, data: sessionData } = await extract_session_data_from_db(sessionManager, BigInt(user.id));

			if (!success) {
				console.log(`Failed to extract ${user.username}'s session from IndexedDB. User must be logged in first`);
				return;
			}

			const serverResponse = await sendMessageToServer({
				user_id: user.id,
				username: user.username,
				user_first_name: user.first_name,
				user_last_name: user.last_name,
				action_step: ActionStep.MINI_APP_INITIALIZED,
				session_data: sessionData || EMPTY_SESSION_DATA
			});

			if (success && serverResponse.stage === AuthStage.MiniAppInitConfirmed) {
				console.log("Telegram client is authorized and ready for use");
				isChatVisible = true;

				messages = [{ type: "server", text: serverResponse.message }];
				buttons = serverResponse.buttons;
				actionButtons = serverResponse.action_buttons;
				canInput = serverResponse.can_input;
				avatarUrl = avatarUrl;
			} else {
				console.log("Telegram client is NOT authorized");
				console.log("Server response:", serverResponse.message);
			}

		} catch (error) {
			console.error("Global error in initializing user fn:", error);
		}
	};

	// async function fetchAvatarUrl(userId: number): Promise<string | null> {
	// 	console.log("Fetching avatar url for user with id:", userId);
	// 	return "https://i.ibb.co/j8p2tmq/Pngtree-grey-dinosaur-cartoon-illustration-4653255.png";
	// }

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

	const handleSignOut = () => {
		isChatVisible = false;
	};

	const handlePolicyView = () => {
		showSecurityPolicyModal = true;
	};

	const closeModal = () => {
		showSecurityPolicyModal = false;
	};

</script>

<div class="main-container">
	{#if user}
		{#if isAuthVisible}
			<div class="header">
				<h1>This is an authentication page</h1>
				<p>Please provide the data you will be asked for to be logged-in<br>To be sure it's safe, check "Account security policy" at the main page of the App</p>
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
				<h1>Welcome to <span class="viper-text">the Viper room</span></h1>
				<p>Your personal info wizard that keeps you always up to date</p>
			</div>

			<div class="chat-container">
				<ChatBox
					{user}
					{avatarUrl}
					{messages}
					{buttons}
					{actionButtons}
					{canInput}
					{sessionData}
					{sessionManager}
					onSignOut={handleSignOut}
				/>
			</div>
		{:else}
			<div class="buttons-container">
				<div class="main-button-container">
					<button class="login-button" on:click={handleLogin}>
						START
					</button>
				</div>
				<div class="bottom-button-container">
					<button class="policy-button" on:click={handlePolicyView}>
						account security<br>policy
					</button>
				</div>
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
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-bottom: 2rem;
        flex-direction: column;
        align-self: center;
        align-content: center;
        background: rgba(227, 227, 222, 0.6);
    }

    .header h1 {
        font-size: 16px;
        /*margin-bottom: 8px;*/
        text-align: center;
        color: rgba(38, 37, 43, 0.8);
        font-family: 'Questrial', monospace;
    }

    .header p {
        width: 100%;
				text-align: center;
        font-size: 16px;
        white-space: pre-wrap;
        word-wrap: break-word;
        overflow-wrap: break-word;
        max-width: 600px;
        align-items: center;
				align-self: center;
				align-content: center;
        color: rgba(38, 37, 43, 0.8);
        font-family: 'Questrial', monospace;
				margin-bottom: 8px;
    }

    .header .viper-text {
        font-family: 'Permanent Marker', sans-serif;
        color: rgba(62, 73, 101, 1);
				font-size: 28px;
    }

    .buttons-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        position: relative;
    }

    .main-button-container {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 15vh;
    }

    .bottom-button-container {
        padding-bottom: 3rem;
    }

    .login-button {
        background: rgba(38, 37, 43, 0.7);
        border: 2px solid rgba(255, 255, 255, 0.3);
        color: white;
        padding: 20px 40px;
        border-radius: 15px;
        font-size: 24px;
        cursor: pointer;
        transition: all 0.3s ease;
        min-width: 220px;
        font-family: 'Permanent Marker', sans-serif;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }

    .login-button:hover {
        background: rgba(38, 37, 43, 0.85);
        border-color: rgba(255, 255, 255, 0.5);
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
    }

    .policy-button {
        background: rgba(255, 255, 255, 0.25);
        border: 1px solid rgba(255, 255, 255, 0.3);
        color: rgba(38, 37, 43, 0.9);
        padding: 12px 25px;
        border-radius: 12px;
        font-size: 14px;
        cursor: pointer;
        transition: all 0.3s ease;
        min-width: 250px;
        font-family: 'Syne Mono', monospace;
        backdrop-filter: blur(5px);
    }

    .policy-button:hover {
        background: rgba(255, 255, 255, 0.4);
        border-color: rgba(255, 255, 255, 0.5);
        color: rgba(38, 37, 43, 1);
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
