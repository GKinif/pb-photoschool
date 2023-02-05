<script lang="ts">
    import { page } from '$app/stores';
    import {userStore} from "../../stores/user";
    import {logoutUser} from "../../services/authentication";

    const user = userStore();
</script>

<header class="bg-slate-800 mb-8">
    <nav data-sveltekit-prefetch class="container mx-auto flex py-4 items-center">
        <div>
            <a href="/" class="pr-8 font-bold text-xl text-slate-100">Photo School</a>
        </div>
        <ul class="flex flex-1">
            <li class:active={$page.url.pathname === '/class'}>
                <a href="/class" class="text-slate-100 hover:underline mr-2">Classes</a>
            </li>
            <li class:active={$page.url.pathname === '/about'}>
                <a href="/about" class="text-slate-100 hover:underline mr-2">About</a>
            </li>

            {#if $user}
                <li>
                    <span class="text-slate-100">Hello {$user.username}</span>
                </li>
                <li class:active={$page.url.pathname === '/login'}>
                    <button class="text-slate-100 hover:underline mr-2" on:click={() => logoutUser()}>Logout</button>
                </li>
            {:else }
                <li class:active={$page.url.pathname === '/login'}>
                    <a href="/login" class="text-slate-100 hover:underline mr-2">Sign in</a>
                </li>
                <li class:active={$page.url.pathname === '/register'}>
                    <a href="/register" class="text-slate-100 hover:underline mr-2">Sign up</a>
                </li>
            {/if}
        </ul>
    </nav>
</header>
