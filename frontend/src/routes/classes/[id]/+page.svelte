<script>
	import { page } from '$app/stores';
	import { PUBLIC_PB_BASE_URL } from '$env/static/public';
	import { getRecord } from '../../../services/records';

	let dateOptions = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	};

	let classPromise = getRecord('classes', $page.params.id, {
		expand: 'members,level'
	});
</script>

<svelte:head>
	<title>Photography School - Classes</title>
	<meta name="description" content="The best photography school in Belgium" />
</svelte:head>

<section>
	{#await classPromise}
		<p>...waiting</p>
	{:then clas}
		<h1 class="text-center text-xl font-semibold tracking-tight text-primary-100 sm:text-3xl mb-8">
			{clas.title}
		</h1>

		<p class="text-center text-lg sm:text-xl font-semibold text-primary-300">
			From
			<time datetime={clas.startDate}
				>{new Intl.DateTimeFormat('default', dateOptions).format(new Date(clas.startDate))}</time
			>
			to
			<time datetime={clas.endDate}
				>{new Intl.DateTimeFormat('default', dateOptions).format(new Date(clas.endDate))}</time
			>
		</p>

		<ul
			class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
		>
			{#each clas.expand?.members ?? [] as member (member.id)}
				<li class="rounded-2xl bg-white/5 py-6 px-4 flex flex-col items-center">
					<div
						class="h-40 w-40 rounded-full md:h-48 md:w-48 overflow-hidden flex items-center justify-center"
					>
						{#if member.avatar.length > 0}
							<img
								class="w-full max-w-full"
								src={`${PUBLIC_PB_BASE_URL}/api/files/users/${member.id}/${member.avatar}`}
								alt={member.name}
							/>
						{:else}
							<span
								class="w-full h-full bg-primary-900 flex items-center justify-center text-primary-100 text-4xl font-bold"
								>{member.name.slice(0, 2)}</span
							>
						{/if}
					</div>
					<h3
						class="mt-6 text-base font-semibold leading-7 tracking-tight text-primary-100 text-center"
					>
						{member.name}
					</h3>
					<ul class="mt-6 flex justify-center gap-x-6">
						<li>
							<a href="#" class="text-secondary-500 hover:text-secondary-300">
								<span class="sr-only">Twitter</span>
								<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
									<path
										d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
									/>
								</svg>
							</a>
						</li>
						<li>
							<a href="#" class="text-secondary-500 hover:text-secondary-300">
								<span class="sr-only">LinkedIn</span>
								<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
									<path
										fill-rule="evenodd"
										d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
										clip-rule="evenodd"
									/>
								</svg>
							</a>
						</li>
					</ul>
				</li>
			{/each}
		</ul>
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
</section>
