<script>
	import { listLevels } from '../../services/levels';

	let levelsPromise = listLevels();
</script>

<svelte:head>
	<title>Photography School - Levels</title>
	<meta name="description" content="The best photography school in Belgium" />
</svelte:head>

<section>
	<h1 class="hidden">Levels</h1>

	<h2 class="text-3xl font-bold mb-8 text-center">Levels</h2>

	{#await levelsPromise}
		<p>...waiting</p>
	{:then levels}
		<ul class="divide-y divide-gray-200">
			{#each levels as level (level.id)}
				<li class="text-sm font-medium text-gray-900 py-3 px-6">
					{level.title}
				</li>
			{/each}
		</ul>
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
</section>
