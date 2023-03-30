<script>
	import { page } from '$app/stores';
	import { PUBLIC_PB_BASE_URL } from '$env/static/public';
	import { getRecord } from '../../../services/records';
	import Heading from '$lib/components/Heading.svelte';

	let levelPromise = getRecord('levels', $page.params.id, {
		expand: 'members,level'
	});
</script>

<svelte:head>
	<title>Photography School - Classes</title>
	<meta name="description" content="The best photography school in Belgium" />
</svelte:head>

<section>
	{#await levelPromise}
		<p>...waiting</p>
	{:then level}
		<div
			class="relative isolate overflow-hidden bg-gray-900 pt-24 pb-8 px-6 sm:pt-48 sm:pb-16 lg:px-8 rounded-lg mb-16"
		>
			<img
				class="absolute inset-0 -z-10 h-full w-full object-cover"
				src={`${PUBLIC_PB_BASE_URL}/api/files/levels/${level.id}/${level.cover}`}
				title={level.title}
				alt={level.title}
			/>
			<div class="absolute inset-0 -z-10 h-full w-full bg-gradient-to-t from-primary-900" />
			<Heading className="flex items-center justify-center z-10">{level.title}</Heading>
		</div>

		<div class="prose prose-primary !prose-invert max-w-none">{@html level.description}</div>
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
</section>
