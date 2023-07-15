<script lang="ts">
	import { page } from '$app/stores';
	const user = userStore();
	import { createForm, FelteSubmitError } from 'felte';
	import { ClientResponseError } from 'pocketbase';
	import { validator } from '@felte/validator-yup';
	import * as yup from 'yup';
	import { goto } from '$app/navigation';
	import { authenticateUserByEmail } from '$lib/services/authentication';
	import Heading from '$lib/components/Heading.svelte';
	import TextInput from '$lib/components/form/TextInput.svelte';
	import { userStore } from '../../stores/user';

	let isRegisterSuccess = $page.url.searchParams.get('register') === 'success';

	$: {
		if ($user) {
			goto('/', { replaceState: true });
		}
	}

	let isLoading = false;

	const schema = yup.object({
		email: yup.string().email().required(),
		password: yup.string().required().min(8)
	});

	const { form, errors, isValid, isSubmitting } = createForm({
		extend: validator({ schema }),
		onSubmit: async (values) => {
			isLoading = true;
			return authenticateUserByEmail(values.email, values.password);
		},
		onSuccess: async (response) => {
			isLoading = false;
			await goto('/profile');
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

	{#if isRegisterSuccess}
		<p
			class="p-4 mb-6 rounded bg-success-700 text-center text-primary-100 font-semibold max-w-md mx-auto"
		>
			Successfully register, you can now login with your account
		</p>
	{/if}

	<div class="flex flex-col items-center">
		<div class="bg-primary-800/40 rounded-lg p-8 sm:mx-auto w-full sm:max-w-md">
			<form use:form>
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

				{#if $errors.apiError}
					<div class="text-center text-error-500 mb-6">{$errors.apiError}</div>
				{/if}

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
				<span class="text-primary-100 mr-2">You don't have an account yet?</span>
				<a href="/register" class="text-secondary-500 font-semibold hover:underline">Register</a>
			</div>
		</div>
	</div>
</section>
