<script lang="ts">
    import SidebarButton from "./SelectorButton.svelte";
    import SidebarSpacer from "./Spacer.svelte";
    import FaFire from 'svelte-icons/fa/FaFire.svelte';
    import { AreaType } from "../../stores";
    import { get_user_data } from "../../api/auth";

    function switchToPersonal() {
        AreaType.set("Personal")
        get_user_data();
    }
    function switchtoServer() {
        AreaType.set("Server")
    }
</script>

<nav>
    <div class="px-2 h-screen flex flex-col bg-primary-darker text-secondary-medium shadow-lg">
        <SidebarButton on:click={switchToPersonal}><FaFire slot="icon" /></SidebarButton>
        <SidebarSpacer />
        <SidebarButton on:click={switchtoServer}><FaFire slot="icon" /></SidebarButton>
    </div>
</nav>