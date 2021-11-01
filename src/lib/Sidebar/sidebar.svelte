<script lang="ts">
    import SidebarButton from "./sidebarButton.svelte";
    import SidebarSpacer from "./sidebarSpacer.svelte";
    import FaFire from 'svelte-icons/fa/FaFire.svelte'
</script>

<nav>
    <div class="px-2 h-screen flex flex-col bg-primary-darker text-secondary-medium shadow-lg">
        <SidebarButton><FaFire slot="icon" /></SidebarButton>
        <SidebarSpacer />
    </div>
</nav>