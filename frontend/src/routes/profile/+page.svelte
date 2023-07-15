<script lang="ts">
	import Heading from '$lib/components/Heading.svelte';
	import { userStore } from '../../stores/user';

	const user = userStore();
</script>

<section>
	{#if $user}
		<Heading className="text-center mb-8">Welcome {$user.username}</Heading>
	{:else}
		<Heading className="text-center text-error-500 mb-8">Invalid Session</Heading>
		<div class="text-primary-200 text-center">
			You somehow landed on this page with an invalid session, navigate to the <a
				href="/login"
				class="text-secondary-500 hover:underline">login</a
			> screen and try to reconnect.
		</div>
	{/if}
</section>
