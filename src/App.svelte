<script lang="ts">
  import { QueryClient, QueryClientProvider } from "@sveltestack/svelte-query";
  import MainArea from "./lib/PersonalChatMainArea/MainArea.svelte";
  import ServerMainArea from "./lib/ServerMainArea/MainArea.svelte";
  import ServerSelector from "./lib/ServerSelector/ServerSelector.svelte";
  import SideBar from "./lib/SideBar/SideBar.svelte";
  import Login from "./lib/auth/Login.svelte";
  import Register from "./lib/auth/Register.svelte";

  import "./Tailwind.css";
  import { AreaType } from "./stores";

  const queryClient = new QueryClient();

  let Area: String = "Login";
  AreaType.subscribe((value) => {
    Area = value;
  });
</script>

{#if Area != "Login" && Area != "Register"}
  <main class="grid main {Area == 'Personal' ? 'personal' : ''}">
    <ServerSelector />
    <SideBar />

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
