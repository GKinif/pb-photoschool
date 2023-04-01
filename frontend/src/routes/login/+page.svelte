<script lang="ts">
	import { createForm } from 'felte';
	import { validator } from '@felte/validator-yup';
	import * as yup from 'yup';
	import { goto } from '$app/navigation';
	import { authenticateUserByEmail } from '$lib/services/authentication';
	import Heading from '../../lib/components/Heading.svelte';
	import TextInput from '../../lib/components/form/TextInput.svelte';

	let isLoading = false;

	const schema = yup.object({
		email: yup.string().email().required(),
		password: yup.string().required().min(8)
	});

	const { form, errors, isValid, isSubmitting } = createForm({
		extend: validator({ schema }),
		onSubmit: async (values) => {
			isLoading = true;
			console.log('values: ', values);
			schema
				.validate(values)
				.then((yupResults) => {
					console.log('yupResults: ', yupResults);
				})
				.catch((yupErrors) => {
					console.log('yupErrors: ', yupErrors);
				});
			try {
				const userResponse = await authenticateUserByEmail(values.email, values.password);
				console.log('userResponse: ', userResponse);
				await goto('/');
			} catch (e) {
				console.log('Unable to authenticate');
				isLoading = false;
				// @TODO: show error message in UI
			}
			isLoading = false;
		}
	});
</script>

<svelte:head>
	<title>Photography School - Login</title>
	<meta name="description" content="Login screen" />
</svelte:head>

<section>
	<Heading className="text-center mb-10">Sign in</Heading>

	<form use:form>
		<TextInput
			name="email"
			label="Email"
			id="email"
			type="email"
			error={$errors.email}
		/>
		<TextInput
			name="password"
			label="Password"
			id="password"
			placeholder="test"
			type="password"
			error={$errors.password}
		/>

		<button
			type="submit"
			disabled={!$isValid || $isSubmitting}
			class="
          text-secondary-500 font-medium text-sm text-center
          border border-secondary-500
          hover:text-secondary-300 hover:border-secondary-300
          focus:ring-4 focus:outline-none focus:ring-secondary-300
          rounded-lg
          w-full sm:w-auto px-5 py-2.5
          disabled:disabled:text-gray-700 disabled:border-gray-700"
		>
			Submit
		</button>

		{#if isLoading}
			<p class="text-primary-100">Loading...</p>
		{/if}
	</form>
</section>
