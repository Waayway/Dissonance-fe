<script lang="ts">
    import ArrowDown from 'svelte-icons/io/IoIosArrowDown.svelte'
    import CloseIcon from 'svelte-icons/io/IoMdClose.svelte'
    import Catagory from './Catagory.svelte'
    import TextChannel from './TextChannel.svelte'
    import DropDownServer from './DropDownServer.svelte'
    import { AreaType } from "../../stores";
  import DropDownPersonal from './DropDownPersonal.svelte';
  import ServerSideBarContent from './ServerSideBarContent.svelte';
  import PersonalSideBarContent from './PersonalSideBarContent.svelte';
    let MenuOpen = false

    let Area: String = "Login";
    AreaType.subscribe((value) => {
        Area = value;
    });
    
    function toggleMenu() {
        MenuOpen = !MenuOpen
    }
</script>

<div class="h-screen flex flex-col bg-primary-medium text-secondary-medium shadow-lg w-60">
    <div class="flex hover:bg-primary-light transition-all justify-between cursor-pointer" on:click={toggleMenu}>
        <p class="p-4 whitespace-nowrap">
            {#if Area == "Server"}
            Server Name
            {:else if Area == "Personal"}
            Personal
            {/if}
        </p>
        <div class="h-14 p-4">
            {#if MenuOpen}
                <CloseIcon />
            {:else}
                <ArrowDown />
            {/if}
        </div>
    </div>
    <hr class="border-primary-darker divider border">
    <div class="fixed w-56 m-2 top-14 bg-primary-light menu transition-all duration-200 rounded-xl" class:MenuOpen>
        {#if Area == "Server"}
            <DropDownServer />
        {:else if Area == "Personal"}
            <DropDownPersonal />
        {/if}
    </div>
    <div>
        <ul>
            {#if Area == "Server"}
                <ServerSideBarContent />
            {:else if Area == "Personal"}
                <PersonalSideBarContent />
            {/if}
        </ul>
    </div>
</div>

<style>
    .menu {
        transform: scale(0);
    }
    .MenuOpen {
        transform: scale(1);
    }
    .divider {
        border-width: 1.2px;
    }
</style>