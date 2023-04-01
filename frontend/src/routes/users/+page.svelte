<script>
	import { listUsers } from '$lib/services/users';

	let usersPromise = listUsers();
</script>

<svelte:head>
	<title>Photography School - Users</title>
	<meta name="description" content="The best photography school in Belgium" />
</svelte:head>

<section>
	<h1 class="hidden">Users</h1>

	<h2 class="text-3xl font-bold mb-8 text-center">Users</h2>

	{#await usersPromise}
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
	{/await}
</section>
