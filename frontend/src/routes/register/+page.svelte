<script lang="ts">
	import { createForm, FelteSubmitError } from 'felte';
	import { ClientResponseError } from 'pocketbase';
	import { validator } from '@felte/validator-yup';
	import * as yup from 'yup';
	import { goto } from '$app/navigation';
	import { createUser } from '$lib/services/authentication';
	import Heading from '$lib/components/Heading.svelte';
	import TextInput from '$lib/components/form/TextInput.svelte';

	let isLoading = false;

	const schema = yup.object({
		username: yup.string().required().min(3),
		email: yup.string().email().required(),
		password: yup.string().required().min(8),
		passwordConfirm: yup.string().required().min(8)
	});

	const { form, errors, isValid, isSubmitting } = createForm({
		extend: validator({ schema }),
		onSubmit: async (values) => {
			isLoading = true;
			return createUser(values.username, values.email, values.password, values.passwordConfirm);
		},
		onSuccess: async (response) => {
			isLoading = false;
			await goto('/login?register=success');
		},
		onError: (error) => {
			isLoading = false;
			if (error instanceof ClientResponseError) {
				console.error('login errors ClientResponseError: ', error);
				return {
					apiError: error.data?.message
				};
			}
			if (error instanceof FelteSubmitError) {
				console.error('login errors FelteSubmitError: ', error);
				return {
					apiError: error.response?.message
				};
			}
			return {};
		}
	});
</script>

<svelte:head>
	<title>Photography School - Login</title>
	<meta name="description" content="Login screen" />
</svelte:head>

<section>
	<Heading className="text-center mb-10">Sign in</Heading>

	<div class="flex flex-col items-center">
		<div class="bg-primary-800/40 rounded-lg p-8 sm:mx-auto w-full sm:max-w-md">
			<form use:form>
				<TextInput
					name="username"
					label="Username"
					id="username"
					className="mb-6"
					error={$errors.username}
				/>
				<TextInput
					name="email"
					label="Email"
					id="email"
					type="email"
					placeholder="youremail@gmail.com"
					className="mb-6"
					error={$errors.email}
				/>
				<TextInput
					name="password"
					label="Password"
					id="password"
					type="password"
					className="mb-6"
					error={$errors.password}
				/>
				<TextInput
					name="passwordConfirm"
					label="Password Confirm"
					id="passwordConfirm"
					type="password"
					className="mb-6"
					error={$errors.passwordConfirm}
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
          w-full px-5 py-2.5
          disabled:disabled:text-gray-700 disabled:border-gray-700"
				>
					Submit
				</button>

				{#if isLoading}
					<p class="text-primary-100">Loading...</p>
				{/if}
			</form>

			<div class="text-center mt-6">
				<span class="text-primary-100 mr-2">Already have an account?</span>
				<a href="/login" class="text-secondary-500 font-semibold hover:underline">Login</a>
			</div>
		</div>
	</div>
</section>
