<script lang="ts">
	import './chatbox.svelte.css';
	import { sendMessageToServer } from "@services/api.js";

	export let user: { id: number; username: string };
	export let avatarUrl: string | null;
	export let serverAvatarUrl: string | null;
	export let messages: Array<{ type: "user" | "server"; text: string }>;
	export let buttons: string[];
	export let actionButtons: string[];
	export let canInput: boolean;

	let inputMessage: string = "";

	async function handleSendMessage() {
		if (!inputMessage.trim()) return;

		messages = [...messages, { type: "user", text: inputMessage }];

		try {

			const serverResponse = await sendMessageToServer(user.id, inputMessage, user.username);

			messages = [...messages, { type: "server", text:serverResponse.message }];

			buttons = serverResponse.buttons;
			actionButtons = serverResponse.action_buttons;
			canInput = serverResponse.can_input;
			avatarUrl = avatarUrl;

			inputMessage = "";
		} catch (error) {
			console.error('Error sending message:', error);
			messages = [...messages, { type: "server", text: "Error sending message to server" }];
		}
	}

	async function handleButtonClick(buttonText: string) {
		try {
			const response = await sendMessageToServer(user.id, buttonText, user.username);

			messages = [...messages,
				{ type: "user", text: buttonText },
				{ type: "server", text: response.message }
			];

			buttons = response.buttons;
			actionButtons = response.action_buttons;
			canInput = response.can_input;
		} catch (error) {
			console.error('Error handling button click:', error);
		}
	}
</script>

<div class="chat-container">
	<div class="messages-container">
		{#each messages as message}
			<div class="message-row {message.type}">
				{#if message.type === "server"}
					<div class="message server-message">
						<img src={serverAvatarUrl} alt="Server" class="avatar"/>
						<div class="message-text">{message.text}</div>
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