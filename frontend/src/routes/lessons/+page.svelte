<script>
	import { listRecords } from '../../services/records';

	let subjectsPromise = listRecords('subjects');
</script>

<svelte:head>
	<title>Photography School - Lessons</title>
	<meta name="description" content="The best photography school in Belgium" />
</svelte:head>

<section>
	<h1 class="text-3xl font-bold mb-8 text-center text-primary-700">Subjects</h1>

	{#await subjectsPromise}
		<p>...waiting</p>
	{:then subjects}
		<ul class="divide-y divide-gray-200">
			{#each subjects as subject, index (subject.id)}
				<li class={`flex py-8 px-12 ${index % 2 == 0 ? '' : 'flex-row-reverse'}`}>
					<img src="https://via.placeholder.com/400x300" />
					<div class="py-4 px-8 flex-1">
						<h3 class="text-xl font-semibold leading-6 text-primary-700 mb-4">{subject.title}</h3>
						<p class="prose">{@html subject.description}</p>
					</div>
				</li>
			{/each}
		</ul>
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
</section>
