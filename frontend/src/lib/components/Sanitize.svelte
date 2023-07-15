<script lang="ts">
	import { browser } from '$app/environment';
	import { sanitizeHtml } from '$lib/utils/sanitize';
	export let className = '';
	export let tag = 'div';
	let data: HTMLElement;
	let sanitized: string;

	$: {
		if (browser) {
			sanitized = sanitizeHtml(data?.innerText ?? '');
		}
	}
</script>

<svelte:element this={tag} bind:this={data} class={className}>
	{@html sanitized}
</svelte:element>
