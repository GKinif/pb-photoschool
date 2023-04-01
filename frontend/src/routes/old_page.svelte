<script>
	import { listUsers } from '../lib/services/users';
	import { collectionStore } from '../stores/collection';

	let userList = [];

	const fetchUsers = async () => {
		userList = await listUsers();
	};

	// let usersPromise = listUsers();
	$: usersrt = collectionStore('users', 100, userList);

	$: console.log('usersrt: ', $usersrt);

	const promise = fetchUsers();
</script>

<svelte:head>
	<title>Photography School</title>
	<meta name="description" content="The best photography school in Belgium" />
</svelte:head>

<section>
	<h1 class="hidden">Photography School</h1>

	<h2 class="text-3xl font-bold mb-8 text-center">Classes</h2>

	<!--{#await usersPromise}
		<p>...waiting</p>
	{:then users}
		{#each users as user (user.id)}
			<div class="mb-10">
				<h2 class="text-2xl font-bold mb-4 text-center">{user.username}</h2>
				<pre>{JSON.stringify(user)}</pre>
			</div>
		{/each}
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}-->

	<h2 class="text-3xl font-bold mb-8 text-center">Realtime</h2>

	{#await promise}
		<p>...waiting</p>
	{:then users}
		<pre>
			{#each $usersrt as user (user.id)}
				<div class="mb-10">
					<h2 class="text-2xl font-bold mb-4 text-center">{user.username}</h2>
				</div>
			{/each}
		</pre>
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
</section>
