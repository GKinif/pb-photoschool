<script>
	import Header from '$lib/components/header/Header.svelte';
	import './styles.css';
</script>

<Header />

<main class="container mx-auto mb-10 mt-8 px-6 lg:px-8">
	<slot />
</main>

<footer class="container mx-auto py-8 px-6 lg:px-8">
	<p class="text-center text-lg font-semibold text-primary-500">
		Test portfolio with PocketBase and SvelteKit
	</p>
</footer>
