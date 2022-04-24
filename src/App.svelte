<script lang="ts">
    import MainArea from "./lib/PersonalChatMainArea/MainArea.svelte";
    import ServerMainArea from "./lib/ServerMainArea/MainArea.svelte";
    import Sidebar from "./lib/Sidebar/sidebar.svelte";
    import TextChannelSideBar from "./lib/textChannelSideBar/textChannelSideBar.svelte";
    import PersonalChatSideBar from "./lib/PersonalChatSideBar/PersonalChatSideBar.svelte";
    import Login from "./lib/auth/Login.svelte";
    
    import "./Tailwind.css";
    import { AreaType } from "./stores";

    let Area: String = "Login";
    AreaType.subscribe((value) => {
        Area = value;
    });
</script>

{#if Area != "Login"}
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
        <Login />
    </main>
{/if}
