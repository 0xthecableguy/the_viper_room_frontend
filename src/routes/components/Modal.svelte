<script lang="ts">
	export let show: boolean;
	export let onClose: () => void;

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			onClose();
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
			on:click={onClose}
			on:keydown={handleKeydown}
			aria-label="Close modal overlay"
		></button>
		<div
			class="modal-content"
			role="document"
		>
			<div class="modal-header">
				<button
					class="close-button"
					on:click={onClose}
					aria-label="Close modal"
				>
					×
				</button>
			</div>
			<div class="modal-body">
				<p>Ваши данные в безопасности</p>
			</div>
		</div>
	</div>
{/if}

<style>
    .modal-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.5);
    }

    .backdrop-button {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: pointer;
        border: none;
    }

    .modal-content {
        position: relative;
        background: white;
        padding: 20px;
        border-radius: 8px;
        width: 300px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .modal-header {
        display: flex;
        justify-content: flex-end;
    }

    .close-button {
        border: none;
        background: none;
        font-size: 24px;
        cursor: pointer;
        padding: 5px;
        margin: -5px;
        color: #666;
    }

    .close-button:hover {
        color: #000;
    }

    .modal-body {
        text-align: center;
        padding: 20px 0;
    }

    p {
        margin: 0;
        font-size: 16px;
    }
</style>