<script lang="ts">
    import SidebarButton from "./sidebarButton.svelte";
    import SidebarSpacer from "./sidebarSpacer.svelte";
    import FaFire from 'svelte-icons/fa/FaFire.svelte'
</script>

<nav>
    <div class="fixed px-2 top-0 left-0 h-screen flex flex-col bg-primary-darker text-secondary-medium shadow-lg">
        <SidebarButton><FaFire slot="icon" /></SidebarButton>
        <SidebarSpacer />
    </div>
</nav>