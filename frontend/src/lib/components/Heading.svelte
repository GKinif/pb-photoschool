<script lang="ts">
	export let className = '';
	type Variant = 'h1' | 'h2' | 'h3' | 'h4';
	export let variant: Variant = 'h1';
	export let tag: Variant | null = null;
	let innerClass = '';
	let innerTag = tag ? tag : variant;

	$: switch (variant) {
		case 'h1':
			innerClass = 'text-3xl sm:text-4xl font-bold tracking-tight text-primary-100';
			break;
		case 'h2':
			innerClass = 'text-2xl sm:text-3xl font-semibold tracking-tight text-primary-100';
			break;
		case 'h3':
			innerClass = 'text-xl sm:text-2xl font-semibold leading-6 text-primary-100';
			break;
		case 'h4':
			innerClass = 'text-lg sm:text-xl font-semibold leading-6 text-primary-100';
			break;
	}
</script>

<svelte:element
	this={innerTag}
	class={`${innerClass}${className.length > 0 ? ' ' + className : ''}`}><slot /></svelte:element
>
