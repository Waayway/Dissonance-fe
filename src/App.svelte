<script lang="ts">
  import MainArea from './lib/PersonalChatMainArea/MainArea.svelte';
import ServerMainArea from './lib/ServerMainArea/MainArea.svelte';
  import Sidebar from './lib/Sidebar/sidebar.svelte';
  import TextChannelSideBar from './lib/textChannelSideBar/textChannelSideBar.svelte';
  import './Tailwind.css'
  import {AreaType} from './stores';

  let Area: String = "Server";
  AreaType.subscribe(value => {
    Area = value;
  })
</script>

<main class="grid main">
  <Sidebar />
  <TextChannelSideBar />
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