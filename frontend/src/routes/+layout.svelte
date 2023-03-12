<script>
	import Header from '$lib/header/Header.svelte';
	import './styles.css';
</script>

<Header />

<main class="container mx-auto mb-10">
	<slot />
</main>

<footer class="container mx-auto py-8">
	<p class="text-center text-lg font-semibold text-primary-700">
		Test portfolio with PocketBase and SvelteKit
	</p>
</footer>
