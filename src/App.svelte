<script lang="ts">
    import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query'
    import MainArea from "./lib/PersonalChatMainArea/MainArea.svelte";
    import ServerMainArea from "./lib/ServerMainArea/MainArea.svelte";
    import Sidebar from "./lib/Sidebar/sidebar.svelte";
    import TextChannelSideBar from "./lib/textChannelSideBar/textChannelSideBar.svelte";
    import PersonalChatSideBar from "./lib/PersonalChatSideBar/PersonalChatSideBar.svelte";
    import Login from "./lib/auth/Login.svelte";
    import Register from './lib/auth/Register.svelte';
    
    import "./Tailwind.css";
    import { AreaType } from "./stores";

    const queryClient = new QueryClient();

    let Area: String = "Login";
    AreaType.subscribe((value) => {
        Area = value;
    });
</script>
<QueryClientProvider client={queryClient}>
{#if Area != "Login" && Area != "Register"}
    <main class="grid main {Area == 'Personal' ? 'personal' : ''}">
        <Sidebar />
        {#if Area != "Personal"}
            <TextChannelSideBar />
        {:else}
            <PersonalChatSideBar />
        {/if}
        {#if Area == "Server"}
            <ServerMainArea />
        {/if}
        {#if Area == "Personal"}
            <MainArea />
        {/if}
    </main>

    <style>
        .main {
            grid-template-columns: 5rem 15rem calc(100vw - 20rem);
        }
    </style>
{:else}
    <main>
        {#if Area == "Login"}
            <Login />
        {:else if Area == "Register"}
            <Register />
        {/if}
    </main>
{/if}
</QueryClientProvider>
