<script lang="ts">
    import SidebarButton from "./sidebarButton.svelte";
    import SidebarSpacer from "./sidebarSpacer.svelte";
    import FaFire from 'svelte-icons/fa/FaFire.svelte'
</script>

<nav>
    <div class="fixed px-2 top-0 left-0 h-screen w-22 flex flex-col bg-primary text-secondary shadow-lg">
        <SidebarButton><FaFire slot="icon" /></SidebarButton>
        <SidebarSpacer />
    </div>
</nav>