<script lang="ts">
  import Sidebar from './lib/sidebar.svelte';
  import TextChannelSideBar from './lib/textChannelSideBar.svelte';
  import './Tailwind.css'
</script>

<main class="flex">
  <Sidebar />
  <TextChannelSideBar />
</main>