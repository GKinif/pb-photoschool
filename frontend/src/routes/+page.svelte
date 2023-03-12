<script>
	import { PUBLIC_PB_BASE_URL } from '$env/static/public';
	import { listLevels } from '../services/levels';

	let levelsPromise = listLevels();
</script>

<svelte:head>
	<title>Photography School</title>
	<meta name="description" content="The best photography school in Belgium" />
</svelte:head>

<section>
	<div
		class="relative isolate overflow-hidden bg-gray-900 py-24 px-6 sm:py-32 lg:px-8 rounded-lg mb-16"
	>
		<img
			src="https://placekitten.com/800/300"
			alt=""
			class="absolute inset-0 -z-10 h-full w-full object-cover"
		/>
		<div class="mx-auto max-w-2xl text-center">
			<h1 class="text-4xl font-bold tracking-tight text-primary-100 sm:text-6xl">
				Photography School
			</h1>
			<p class="mt-6 text-lg leading-8 text-primary-300">
				Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
				Elit sunt amet fugiat veniam occaecat fugiat aliqua.
			</p>
		</div>
	</div>

	<div class="mb-16">
		<h2 class="text-3xl font-bold mb-8 text-center text-primary-700">What We Teach</h2>
		<p class="text-center">
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
			been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
			galley of type and scrambled it to make a type specimen book. It has survived not only five
			centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It
			was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
			passages, and more recently with desktop publishing software like Aldus PageMaker including
			versions of Lorem Ipsum.
		</p>
	</div>

	<div class="container mx-auto flex flex-col bg-primary-900 py-16 sm:py-24 px-8 rounded-lg mb-16">
		<h2 class="text-3xl font-bold mb-8 text-center text-primary-100">
			World-Class Photography Courses for every Budget
		</h2>
		<div class="flex flex-col sm:flex-row justify-center sm:divide-x-2 sm:divide-primary-100">
			<div class="flex flex-col items-center flex-1 py-4 px-6">
				<h3
					class="rounded-full border-2 border-primary-100 h-12 w-12 flex items-center justify-center mb-4 text-lg font-semibold text-primary-100"
				>
					1
				</h3>
				<p class="text-center text-primary-100 text-lg">Learn with a world class teacher</p>
			</div>
			<div class="flex flex-col items-center flex-1 py-4 px-6">
				<h3
					class="rounded-full border-2 border-primary-100 h-12 w-12 flex items-center justify-center mb-4 text-lg font-semibold text-primary-100"
				>
					2
				</h3>
				<p class="text-center text-primary-100 text-lg">Evolve with our different programs</p>
			</div>
			<div class="flex flex-col items-center flex-1 py-4 px-6">
				<h3
					class="rounded-full border-2 border-primary-100 h-12 w-12 flex items-center justify-center mb-4 text-lg font-semibold text-primary-100"
				>
					3
				</h3>
				<p class="text-center text-primary-100 text-lg">
					Quality classes for a fraction of the cost of traditional schools
				</p>
			</div>
		</div>
	</div>

	<h2 class="text-3xl font-bold mb-8 text-center text-primary-700">Levels</h2>

	<ul class="divide-y divide-gray-200">
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
				<li class={`flex py-8 px-12 ${index % 2 == 0 ? '' : 'flex-row-reverse'}`}>
					<img
						class="max-h-96 rounded"
						src={`${PUBLIC_PB_BASE_URL}/api/files/levels/${level.id}/${level.cover}`}
						title={level.title}
						alt={level.title}
					/>
					<div class="py-4 px-8 flex-1">
						<h3 class="text-xl font-semibold leading-6 text-primary-700 mb-4">{level.title}</h3>
						<p class="prose">{@html level.description}</p>
					</div>
				</li>
			{/each}
		{:catch error}
			<p class="text-center font-semibold text-error-600 border border-error-600 rounded p-4">
				{error.message}
			</p>
		{/await}
	</ul>

	<div class="bg-primary-900 py-16 sm:py-24 rounded-lg">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-2xl lg:max-w-none">
				<div class="text-center">
					<h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
						Trusted by studends for more than 10 years
					</h2>
					<p class="mt-4 text-lg leading-8 text-primary-300">
						Lorem ipsum dolor sit amet consect adipisicing possimus.
					</p>
				</div>
				<dl
					class="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4"
				>
					<div class="flex flex-col bg-white/5 p-8">
						<dt class="text-sm font-semibold leading-6 text-primary-300">Students</dt>
						<dd class="order-first text-3xl font-semibold tracking-tight text-primary-100">200+</dd>
					</div>

					<div class="flex flex-col bg-white/5 p-8">
						<dt class="text-sm font-semibold leading-6 text-primary-300">School price</dt>
						<dd class="order-first text-3xl font-semibold tracking-tight text-primary-100">
							Starting at 400€
						</dd>
					</div>

					<div class="flex flex-col bg-white/5 p-8">
						<dt class="text-sm font-semibold leading-6 text-primary-300">Programs</dt>
						<dd class="order-first text-3xl font-semibold tracking-tight text-primary-100">4</dd>
					</div>

					<div class="flex flex-col bg-white/5 p-8">
						<dt class="text-sm font-semibold leading-6 text-primary-300">Exhibitions</dt>
						<dd class="order-first text-3xl font-semibold tracking-tight text-primary-100">
							2 / Years
						</dd>
					</div>
				</dl>
			</div>
		</div>
	</div>
</section>
