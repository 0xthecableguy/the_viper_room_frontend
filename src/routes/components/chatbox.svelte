<script lang="ts">
	import './shared-styles.svelte.css';
	import { sendMessageToServer } from "@services/api.js";
	import { ActionStep, AuthStage } from '../../types';
	import type { SessionManager } from 'wizard-pi-wasm';
	import { onDestroy } from 'svelte';
	import WaveSurfer from 'wavesurfer.js';

	export let user: { id: number; username: string, first_name: string, last_name: string };
	export let avatarUrl: string | null;
	import type { Message } from '../../types';
	export let buttons: string[];
	export let actionButtons: string[];
	export let canInput: boolean;
	export let sessionData: ArrayBuffer | undefined;
	export let sessionManager: SessionManager;
	export let onSignOut: () => void;
	export let messages: Message[];

	let wavesurfers: WaveSurfer[] = [];
	let audioUrls: string[] = [];
	let inputMessage: string = "";

	const EMPTY_SESSION_DATA = new ArrayBuffer(0);

	function initAudioPlayer(container: HTMLDivElement, audioUrl: string) {
		const wavesurfer = WaveSurfer.create({
			container: container,
			height: 48,
			waveColor: 'rgba(62, 73, 101, 0.4)',
			progressColor: 'rgba(62, 73, 101, 0.8)',
			cursorColor: 'rgba(62, 73, 101, 0.8)',
			barWidth: 2,
			barGap: 2,
			barRadius: 3,
			normalize: true,
			fillParent: true,
			autoplay: false,
			interact: true,
			dragToSeek: true,
			mediaControls: true
		});

		wavesurfer.load(audioUrl);
		wavesurfers.push(wavesurfer);

		return wavesurfer;
	}

	async function handleMessage(userMessage: string, isLoadingNeeded: boolean = false) {

		messages = [...messages, { type: "user", text: userMessage }];

		if (isLoadingNeeded) {
			messages = [...messages,
				{
					type: "server",
					text: "Записываю для тебя подкаст... \nДай мне 2-3 минуты, не закрывай приложение, но можешь его свернуть, смахнув вниз",
					isServiceMessage: true
				},
				{
					type: "server",
					text: "...",
					isLoading: true,
					isServiceMessage: true
				}
			];
		}

		try {
			const payload = {
				user_id: user.id,
				username: user.username,
				user_first_name: user.first_name,
				user_last_name: user.last_name,
				action: userMessage,
				session_data: sessionData || EMPTY_SESSION_DATA,
				...(userMessage === "Sign out" && { action_step: ActionStep.SIGN_OUT })
			};

			const response = await sendMessageToServer(payload);

			if (isLoadingNeeded) {
				messages = messages.filter(msg => msg.isServiceMessage !== true);
			}

			messages = [...messages, {
				type: "server",
				text: response.message,
				audioData: response.audio_data
			}];

			buttons = response.buttons;
			actionButtons = response.action_buttons;
			canInput = response.can_input;

			if (response.stage === AuthStage.SignedOut) {
				try {
					const exists = await sessionManager.session_exists(BigInt(user.id));
					if (exists) {
						await sessionManager.delete_session(BigInt(user.id));
						console.log("Session successfully deleted after sign-out command from user");
						onSignOut();
					}
				} catch (error) {
					console.error("Error handling session deletion after sign-out command from user:", error);
				}
			}

		} catch (error) {
			console.error('Error handling message:', error);
			messages = [...messages, { type: "server", text: "Error processing your request" }];
		}
	}

	async function handleSendMessage() {
		if (!inputMessage.trim()) return;
		await handleMessage(inputMessage);
		inputMessage = "";
	}

	async function handleButtonClick(buttonText: string) {
		const isNewsRequest = buttonText === "Get news!";
		await handleMessage(buttonText, isNewsRequest);
	}

	function createAudioUrl(audioData: number[]): string {
		try {
			const uint8Array = new Uint8Array(audioData);
			const blob = new Blob([uint8Array.buffer], { type: 'audio/mpeg' });
			const url = URL.createObjectURL(blob);
			audioUrls.push(url);
			console.log('Audio URL created:', url);
			console.log('Audio data size:', uint8Array.length);
			return url;
		} catch (error) {
			console.error('Error creating audio URL:', error);
			return '';
		}
	}

	onDestroy(() => {
		wavesurfers.forEach(ws => ws.destroy());
		audioUrls.forEach(url => URL.revokeObjectURL(url));
	});

</script>

<div class="container">
	<div class="messages-container">
		{#each messages as message}
			<div class="message-row {message.type}">
				{#if message.type === "server"}
					<div class="message server-message">
						{#if message.audioData}
							<div class="audio-message">
								<div class="wavesurfer-container" use:initAudioPlayer={createAudioUrl(message.audioData)}>
									<div class="wave"></div>
								</div>
								<div class="message-text">{message.text}</div>
							</div>
						{:else}
							<div class="message-text">
								{#if message.isLoading}
									<span class="loading-dots">🎙️  ... recording ...   </span>
								{:else}
									{message.text}
								{/if}
							</div>
						{/if}
					</div>
				{:else}
					<div class="message user-message">
						<div class="message-text">{message.text}</div>
						<img src={avatarUrl} alt="User" class="avatar"/>
					</div>
				{/if}
			</div>
		{/each}
	</div>

	{#if canInput}
		<div class="input-container">
			<input
				type="text"
				bind:value={inputMessage}
				placeholder="Type your message..."
				on:keydown={(e) => e.key === "Enter" && handleSendMessage()}
			/>
			<button on:click={handleSendMessage}>SEND</button>
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