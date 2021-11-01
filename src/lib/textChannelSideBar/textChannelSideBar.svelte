<script lang="ts">
 import ArrowDown from 'svelte-icons/io/IoIosArrowDown.svelte'
 import CloseIcon from 'svelte-icons/io/IoMdClose.svelte'
import Catagory from './Catagory.svelte'
import TextChannel from './TextChannel.svelte'
 let MenuOpen = false
 
 function toggleMenu() {
    MenuOpen = !MenuOpen
 }
</script>

<div class="h-screen flex flex-col bg-primary-medium text-secondary-medium shadow-lg w-60">
    <div class="flex hover:bg-primary-light transition-all justify-between cursor-pointer" on:click={toggleMenu}>
        <p class="p-4 whitespace-nowrap">Server name</p>
        <div class="h-14 p-4">
            {#if MenuOpen}
                <CloseIcon />
            {:else}
                <ArrowDown />
            {/if}
        </div>
    </div>
    <hr class="border-primary-darker divider border">
    <div class="fixed w-56 m-2 top-14 bg-primary-light menu transition-all duration-200 rounded-xl menuopen" class:MenuOpen>
        <p class="p-2">hello</p>
    </div>
    <div>
        <ul>
            <Catagory name="hello"/>
            <li><TextChannel name="List Item"/></li>
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