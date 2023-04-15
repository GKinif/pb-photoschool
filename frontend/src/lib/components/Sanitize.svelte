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

<svelte:element
	bind:this={data}
	this={tag}
	class={className}>
	{@html sanitized}
</svelte:element>
