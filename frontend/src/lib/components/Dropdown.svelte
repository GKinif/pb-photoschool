<script lang="ts">
	import { fly } from 'svelte/transition';
	let open = false;
	export let className = '';

	const toggleMenu = () => {
		open = !open;
	};
</script>

<div class="relative flex items-center">
	<button
		type="button"
		class={`inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-primary-100 ${className}`}
		aria-expanded="false"
		on:click={toggleMenu}
	>
		<slot name="ctaContent" />
		<svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
			<path
				fill-rule="evenodd"
				d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
				clip-rule="evenodd"
			/>
		</svg>
	</button>

	{#if open}
		<div
			class="absolute left-1/2 z-10 flex w-screen max-w-min -translate-x-1/2 px-4 top-8"
			transition:fly={{ y: 50, duration: 250 }}
		>
			<div
				class="w-56 shrink rounded-xl bg-white p-4 text-sm font-semibold leading-6 text-primary-900 shadow-lg ring-1 ring-gray-900/5"
			>
				<slot name="items" {toggleMenu} />
			</div>
		</div>
	{/if}
</div>
