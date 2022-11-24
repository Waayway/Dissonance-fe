<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function click() {
        dispatch("click")
    }
</script>

<div on:click={click} class="bg-gray-600 h-18 m-2 p-2 mx-auto relative flex items-center justify-center hover:bg-secondary-light rounded-3xl transition-all duration-200 ease-linear cursor-pointer shadow-lg">
    <div class="w-12 h-12 text-primary-medium">
        <slot name="icon"/>
    </div>
</div>