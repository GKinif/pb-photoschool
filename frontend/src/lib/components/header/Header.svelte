<script lang="ts">
	import { page } from '$app/stores';
	import { userStore } from '../../../stores/user';
	import { logoutUser } from '../../services/authentication';
	import ProfileIcon from '../icons/ProfileIcon.svelte';
	import Dropdown from '$lib/components/Dropdown.svelte';

	const user = userStore();
	let isMenuOpen = false;

	function handleClick() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<header>
	<nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
		<div class="flex lg:flex-1">
			<a href="/" class="-m-1.5 p-1.5">
				<span class="sr-only">Photo School</span>
				<img class="h-8 w-8 fill-slate-300" src="/images/ps_logo.svg" alt="" />
			</a>
		</div>
		<div class="flex lg:hidden">
			<button
				type="button"
				on:click={handleClick}
				class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-primary-100"
			>
				<span class="sr-only">Open main menu</span>
				<svg
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			</button>
		</div>
		<div class="hidden lg:flex lg:gap-x-12">
			<a
				href="/classes"
				class="text-sm font-semibold leading-6 text-primary-100 hover:text-secondary-500 hover:underline"
				class:active={$page.url.pathname.startsWith('/classes')}
			>
				Classes
			</a>
			<a
				href="/programs"
				class="text-sm font-semibold leading-6 text-primary-100 hover:text-secondary-500 hover:underline"
				class:active={$page.url.pathname.startsWith('/programs')}
			>
				Programs
			</a>
			<a
				href="/about"
				class="text-sm font-semibold leading-6 text-primary-100 hover:text-secondary-500 hover:underline"
				class:active={$page.url.pathname.startsWith('/about')}>About</a
			>
		</div>
		<div class="hidden lg:flex lg:flex-1 lg:justify-end">
			{#if $user}
				<div>
					<Dropdown className="mr-4">
						<svelte:fragment slot="ctaContent">
							<span class="inline-block h-6 w-6 overflow-hidden rounded-full bg-gray-100">
								<ProfileIcon />
							</span>
							<span class="text-sm font-semibold leading-6 text-primary-100 mr-1">
								{$user.username}
							</span>
						</svelte:fragment>
						<svelte:fragment slot="items" let:toggleMenu>
							<a href="/profile" class="block p-2 hover:text-secondary-500" on:click={toggleMenu}
								>Profile</a
							>
						</svelte:fragment>
					</Dropdown>
				</div>

				<button
					class="text-sm font-semibold leading-6 text-primary-100 hover:text-secondary-500 hover:underline"
					on:click={() => logoutUser()}
				>
					Log out
				</button>
			{:else}
				<a
					href="/login"
					class:active={$page.url.pathname.startsWith('/login')}
					class="text-sm font-semibold leading-6 text-primary-100 hover:text-secondary-500 hover:underline mr-4"
					>Log in</a
				>
				<a
					href="/register"
					class:active={$page.url.pathname.startsWith('/register')}
					class="text-sm font-semibold leading-6 text-primary-100 hover:text-secondary-500 hover:underline"
					>Register</a
				>
			{/if}
		</div>
	</nav>

	<!-- Mobile menu, show/hide based on menu open state. -->
	<div class="lg:hidden {isMenuOpen ? '' : 'hidden'}" role="dialog" aria-modal="true">
		<!-- Background backdrop, show/hide based on slide-over state. -->
		<div class="fixed inset-0 z-10" />
		<div
			focus="true"
			class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-primary-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
		>
			<div class="flex items-center justify-between">
				<a href="/" class="-m-1.5 p-1.5">
					<span class="sr-only">Photo School</span>
					<img
						class="h-8 w-auto"
						src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
						alt=""
					/>
				</a>
				<button
					type="button"
					class="-m-2.5 rounded-md p-2.5 text-primary-100"
					on:click={handleClick}
				>
					<span class="sr-only">Close menu</span>
					<svg
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
			<div class="mt-6 flow-root">
				<div class="-my-6 divide-y divide-gray-500/10">
					<div class="space-y-2 py-6">
						<a
							href="/classes"
							class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-primary-100 hover:bg-gray-700"
							class:active={$page.url.pathname.startsWith('/classes')}>Classes</a
						>
						<a
							href="/programs"
							class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-primary-100 hover:bg-gray-700"
							class:active={$page.url.pathname.startsWith('/programs')}>Programs</a
						>
						<a
							href="/about"
							class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-primary-100 hover:bg-gray-700"
							class:active={$page.url.pathname.startsWith('/about')}>About</a
						>
					</div>

					<div class="py-6">
						{#if $user}
							<button
								href="#"
								class="text-sm font-semibold leading-6 text-primary-100 hover:text-secondary-500 hover:underline"
								on:click={() => logoutUser()}
								>Log out
							</button>
						{:else}
							<a
								href="/login"
								class:active={$page.url.pathname.startsWith('/login')}
								class="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-primary-100 hover:bg-gray-700"
								>Log in</a
							>
							<a
								href="/register"
								class:active={$page.url.pathname.startsWith('/register')}
								class="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-primary-100 hover:bg-gray-700"
								>Register</a
							>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</div>
</header>
