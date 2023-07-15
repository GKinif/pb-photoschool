<script>
	import { PUBLIC_PB_BASE_URL } from '$env/static/public';
	import { listLevels } from '$lib/services/levels';
	import Heading from '$lib/components/Heading.svelte';
	import { sanitizeHtml } from '$lib/utils/sanitize';

	let levelsPromise = listLevels();
</script>

<svelte:head>
	<title>Photography School - Levels</title>
	<meta name="description" content="The best photography school in Belgium" />
</svelte:head>

<section>
	<Heading className="text-center mb-8">Programs</Heading>

	<ul class="divide-y divide-secondary-700">
		{#await levelsPromise}
			<li class="flex py-8 px-12 animate-pulse">
				<div class="w-96 h-60 bg-slate-200 rounded" />
				<div class="py-4 px-8 flex-1 space-y-6">
					<div class="h-4 bg-slate-200 rounded" />
					<div class="space-y-3">
						<div class="grid grid-cols-3 gap-4">
							<div class="h-4 bg-slate-200 rounded col-span-2" />
							<div class="h-4 bg-slate-200 rounded col-span-1" />
						</div>
						<div class="h-4 bg-slate-200 rounded" />
						<div class="grid grid-cols-3 gap-4">
							<div class="h-4 bg-slate-200 rounded col-span-2" />
							<div class="h-4 bg-slate-200 rounded col-span-1" />
						</div>
						<div class="h-4 bg-slate-200 rounded" />
					</div>
				</div>
			</li>
		{:then levels}
			{#each levels as level, index (level.id)}
				<li
					class={`flex py-8 px-4 md:px-12 flex-col ${
						index % 2 == 0 ? 'md:flex-row' : 'md:flex-row-reverse'
					}`}
				>
					<div class="flex-1">
						<img
							class="rounded max-h-96"
							src={`${PUBLIC_PB_BASE_URL}/api/files/levels/${level.id}/${level.cover}`}
							title={level.title}
							alt={level.title}
						/>
					</div>
					<div class="py-4 md:px-8 flex-1">
						<Heading variant="h3" tag="h2" className="mb-4">{level.title}</Heading>
						<div class="prose prose-primary !prose-invert">
							{@html sanitizeHtml(level.shortdescription)}
						</div>
						<div class="flex justify-center mt-6">
							<a
								href={`/programs/${level.id}`}
								class="text-center text-sm font-semibold text-secondary-500 border border-secondary-500 rounded px-4 py-2 transition duration-300 ease-in-out hover:scale-125"
								>Explore</a
							>
						</div>
					</div>
				</li>
			{/each}
		{:catch error}
			<p class="text-center font-semibold text-error-600 border border-error-600 rounded p-4">
				{error.message}
			</p>
		{/await}
	</ul>
</section>
