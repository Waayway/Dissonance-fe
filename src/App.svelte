<script lang="ts">
  import MainArea from './lib/MainArea/MainArea.svelte';
import Sidebar from './lib/Sidebar/sidebar.svelte';
  import TextChannelSideBar from './lib/textChannelSideBar/textChannelSideBar.svelte';
  import './Tailwind.css'
</script>

<main class="grid main">
  <Sidebar />
  <TextChannelSideBar />
  <MainArea />
</main>

<style>
  .main {
    grid-template-columns: 5rem 15rem calc(100vw - 20rem);
  }
</style>