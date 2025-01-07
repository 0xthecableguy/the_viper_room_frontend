<script lang="ts">
	import './shared-styles.svelte.css';
	import { sendMessageToServer } from "@services/api.js";
	import type { SessionManager } from 'wizard-pi-wasm';

	export let user: { id: number; username: string, first_name: string, last_name: string };
	export let avatarUrl: string | null;
	export let sessionManager: SessionManager;
	export let onAuthSuccess: (serverResponse: WizardPiServerResponse) => void;

	let messages: Array<{ type: "user" | "server"; text: string }> = [];
	let inputMessage: string = "";
	let buttons: string[] = [];
	let actionButtons: string[] = [];
	let canInput: boolean = false;

	const EMPTY_SESSION_DATA = new ArrayBuffer(0);

	let currentStage: AuthStage | undefined;

	import { onMount } from 'svelte';
	import { ActionStep, AuthStage, type WizardPiServerResponse } from '../../types';
	onMount(async () => {
		await startAuth();
	});

	async function startAuth() {
		try {
			const serverResponse = await sendMessageToServer({
				user_id: user.id,
				username: user.username,
				user_first_name: user.first_name,
				user_last_name: user.last_name,
				action_step: ActionStep.LOGIN_START,
				session_data: EMPTY_SESSION_DATA
			});

			await handleServerResponse(serverResponse);
		} catch (error) {
			console.error("Error starting authentication:", error);
			messages = [...messages, {
				type: "server",
				text: "Error occurred during login. Please restart the application and try again."
			}];
		}
	}

	async function handleInput() {
		if (!inputMessage.trim()) return;

		messages = [...messages, {
			type: "user",
			text: currentStage === AuthStage.TwoFAPassRequest ?
				'*'.repeat(inputMessage.length) :
				inputMessage
		}];

		const messageToSend = inputMessage;
		inputMessage = "";

		try {
			const serverResponse = await sendMessageToServer({
				user_id: user.id,
				username: user.username,
				user_first_name: user.first_name,
				user_last_name: user.last_name,
				action: messageToSend,
				session_data: EMPTY_SESSION_DATA
			});

			await handleServerResponse(serverResponse);
		} catch (error) {
			console.error("Error handling input:", error);
		}
	}

	async function handleButtonClick(buttonText: string) {
		try {
			const serverResponse = await sendMessageToServer({
				user_id: user.id,
				username: user.username,
				user_first_name: user.first_name,
				user_last_name: user.last_name,
				action: buttonText,
				session_data: EMPTY_SESSION_DATA
			});

			messages = [...messages, { type: "user", text: buttonText }];
			await handleServerResponse(serverResponse);
		} catch (error) {
			console.error("Error handling button click:", error);
		}
	}

	async function handleServerResponse(serverResponse: WizardPiServerResponse) {
		messages = [...messages, { type: "server", text: serverResponse.message }];
		buttons = serverResponse.buttons;
		actionButtons = serverResponse.action_buttons;
		canInput = serverResponse.can_input;
		currentStage = serverResponse.stage;

		if (serverResponse.stage === AuthStage.AuthSuccess && serverResponse.session_data) {
			try {
				await sessionManager.save_session(
					BigInt(user.id),
					new Uint8Array(serverResponse.session_data)
				);
				console.log("Session saved successfully in IndexedDB");
				onAuthSuccess(serverResponse);
			} catch (error) {
				console.error("Error saving session:", error);
			}
		}
		else if (serverResponse.stage === AuthStage.AuthError) {
			try {
				const exists = await sessionManager.session_exists(BigInt(user.id));
				if (exists) {
					await sessionManager.delete_session(BigInt(user.id));
					console.log("Old session deleted due to auth error");
				}
			} catch (error) {
				console.error("Error handling session deletion:", error);
			}
		}
	}
</script>

<div class="container">
	<div class="messages-container">
		{#each messages as message}
			<div class="message-row {message.type}">
				<div class="message {message.type}-message">
					<div class="message-text">{message.text}</div>
					{#if message.type === "user"}
						<img src={avatarUrl} alt="User" class="avatar"/>
					{/if}
				</div>
			</div>
		{/each}
	</div>

	{#if canInput}
		<div class="input-container">
			<input
				type={currentStage === AuthStage.TwoFAPassRequest ? 'password' : 'text'}
				bind:value={inputMessage}
				placeholder={currentStage === AuthStage.TwoFAPassRequest ?
          "Enter your 2FA password..." :
          "Enter your response..."}
				on:keydown={(e) => e.key === "Enter" && handleInput()}
			/>
			<button on:click={handleInput}>Send</button>
		</div>
	{/if}

	{#if buttons.length > 0}
		<div class="buttons-container">
			{#each buttons as button}
				<button
					class="response-button"
					on:click={() => handleButtonClick(button)}
				>
					{button}
				</button>
			{/each}
		</div>
	{/if}

	{#if actionButtons.length > 0}
		<div class="action-buttons-container">
			{#each actionButtons as button}
				<button
					class="action-button"
					on:click={() => handleButtonClick(button)}
				>
					{button}
				</button>
			{/each}
		</div>
	{/if}
</div>