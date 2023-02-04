<script lang="ts">
    import { page } from '$app/stores';
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
        </ul>
    </nav>
</header>
