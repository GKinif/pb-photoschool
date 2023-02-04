<script>
	import Header from '$lib/header/Header.svelte';
	import './styles.css';
</script>

<Header />

<main class="container mx-auto mb-10">
	<slot />
</main>

<footer class="container mx-auto">
	<p class="text-center">Test portfolio with PocketBase and SvelteKit</p>
</footer>
