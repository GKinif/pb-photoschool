<script lang="ts">
	export let href: string;
	export let className = 'text-secondary-500 border-secondary-500';
</script>

<a
	{href}
	class={`text-center text-sm font-semibold text-secondary-500 border border-secondary-500 rounded px-4 py-2 transition duration-300 ease-in-out hover:scale-125 ${className}`}
	><slot /></a
>
