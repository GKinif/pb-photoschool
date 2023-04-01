<script lang="ts">
	export let name: string;
	export let label: string;
	export let id: string;
	export let placeholder = ' ';
	export let type = 'text';
	export let error: string;
</script>

<!--"
absolute
peer-focus:font-medium text-sm text-secondary-500 dark:text-secondary-400
duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
peer-focus:left-0 peer-focus:text-secondary-400 peer-focus:dark:text-secondary-500
peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"-->

<div class="relative z-0 mb-6 w-full group">
	<input
		{type}
		{name}
		{id}
		{placeholder}
		class="
        block py-2.5 px-0 w-full
        text-sm text-primary-100
        bg-transparent
        border-0 border-b-2 border-primary-300 appearance-none
        focus:outline-none focus:ring-0 focus:border-primary-600 peer"
	/>
	<label
		for={id}
		class={`
			absolute
			text-sm text-primary-300
			peer-focus:font-medium
			duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
			${placeholder.length > 0 && placeholder !== ' '
			? 'left-0 text-secondary-500 scale-75 -translate-y-6'
			: 'peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0'}
			peer-focus:left-0 peer-focus:text-secondary-500 peer-focus:scale-75 peer-focus:-translate-y-6
		`}
	>
		{label}
	</label>
	{#if error}
		<span class="text-error-500">{error}</span>
	{/if}
</div>
