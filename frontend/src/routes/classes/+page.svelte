<script lang="ts">
	import { PUBLIC_PB_BASE_URL } from '$env/static/public';
	import { listRecords } from '$lib/services/records';
	import type  { Clas } from '$lib/services/records';
	import Heading from '$lib/components/Heading.svelte';

	let dateOptions: Intl.DateTimeFormatOptions = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	};

	const currentDate = new Date();

	let classesPromise = listRecords<Clas>('classes', 1, 100, {
		expand: 'members,level',
		filter: `startDate <= "${currentDate.toISOString()}" && endDate >= "${currentDate.toISOString()}"`
	});
</script>

<svelte:head>
	<title>Photography School - Classes</title>
	<meta name="description" content="The best photography school in Belgium" />
</svelte:head>

<section>
	<Heading className="text-center mb-8">Classes</Heading>

	{#await classesPromise}
		<p>...waiting</p>
	{:then classes}
		<div class="overflow-hidden bg-white/5 sm:rounded-md">
			<ul class="divide-y divide-secondary-700">
				{#each classes.items as clas (clas.id)}
					<li>
						<div>
							<a href={`/classes/${clas.id}`} class="block hover:bg-primary-800">
								<div class="flex items-center px-4 py-4 sm:px-6">
									<div class="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
										<div class="truncate">
											<div class="flex text-sm flex-wrap md:flex-nowrap">
												<Heading tag="h2" variant="h3" className="truncate mr-2"
													>{clas.title}</Heading
												>
												<p
													class="ml-1 flex-shrink-0 flex items-center justify-center font-small text-secondary-500 border border-secondary-500 px-2 rounded"
												>
													{clas.expand?.level?.title}
												</p>
											</div>
											<div class="mt-2 flex">
												<div class="flex items-center text-sm text-primary-100">
													<svg
														class="mr-1.5 h-5 w-5 flex-shrink-0 text-primary-300"
														viewBox="0 0 20 20"
														fill="currentColor"
														aria-hidden="true"
													>
														<path
															fill-rule="evenodd"
															d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
															clip-rule="evenodd"
														/>
													</svg>
													<p>
														From
														<time datetime={clas.startDate}
															>{new Intl.DateTimeFormat('default', dateOptions).format(
																new Date(clas.startDate)
															)}</time
														>
														To
														<time datetime={clas.endDate}
															>{new Intl.DateTimeFormat('default', dateOptions).format(
																new Date(clas.endDate)
															)}</time
														>
													</p>
												</div>
											</div>
										</div>
										<div class="mt-4 flex-shrink-0 sm:mt-0 sm:ml-5">
											<div class="flex -space-x-1 overflow-hidden p-1">
												{#each clas.expand?.members ?? [] as member (member.id)}
													{#if member.avatar.length > 0}
														<img
															class="inline-block h-8 w-8 rounded-full ring-2 ring-secondary-500"
															src={`${PUBLIC_PB_BASE_URL}/api/files/users/${member.id}/${member.avatar}?thumb=100x100`}
															title={member.name}
															alt={member.name}
														/>
													{:else}
														<div
															class="inline-block h-8 w-8 rounded-full ring-2 ring-secondary-500 bg-primary-900 flex items-center justify-center text-primary-100 text-xs font-semibold"
															title={member.name}
														>
															{member.name.slice(0, 2)}
														</div>
													{/if}
												{/each}
											</div>
										</div>
									</div>
									<div class="ml-5 flex-shrink-0">
										<svg
											class="h-5 w-5 text-gray-400"
											viewBox="0 0 20 20"
											fill="currentColor"
											aria-hidden="true"
										>
											<path
												fill-rule="evenodd"
												d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
												clip-rule="evenodd"
											/>
										</svg>
									</div>
								</div>
							</a>
						</div>
						<div class="px-4 py-4 sm:px-6 flex gap-1">
							<img src="https://placekitten.com/800/300" class="h-16 w-16 rounded object-cover" />
							<img src="https://placekitten.com/800/300" class="h-16 w-16 rounded object-cover" />
							<img src="https://placekitten.com/800/300" class="h-16 w-16 rounded object-cover" />
						</div>
					</li>
				{/each}
			</ul>
		</div>
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
</section>
