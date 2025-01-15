<script lang="ts">
	import './modal.svelte.css';
	import { onMount } from 'svelte';
	export let show: boolean;
	export let onClose: () => void;
	import { base } from '$app/paths';

	let isClosing = false;
	let textContent = '';

	onMount(async () => {
		textContent = await fetch(`${base}/personal_data_security_policy.txt`).then(r => r.text());
	});

	function handleClose() {
		isClosing = true;
		setTimeout(() => {
			isClosing = false;
			onClose();
		}, 300);
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			handleClose();
		}
	}
</script>

{#if show}
	<div
		class="modal-backdrop"
		role="dialog"
		aria-modal="true"
	>
		<button
			class="backdrop-button"
			on:click={handleClose}
			on:keydown={handleKeydown}
			aria-label="Close modal overlay"
		></button>
		<div
			class="modal-content"
			class:closing={isClosing}
			role="document"
		>
			<div class="modal-header">
				<button
					class="close-button"
					on:click={handleClose}
					aria-label="Close modal"
				>
					×
				</button>
			</div>
			<div class="modal-body">
				<p>{textContent}</p>
			</div>
		</div>
	</div>
{/if}
