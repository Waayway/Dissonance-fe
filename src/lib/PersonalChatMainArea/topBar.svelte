<script lang="ts">
    import PeopleIcon from 'svelte-icons/md/MdPeople.svelte'
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function people() {
        dispatch("people")
    }
</script>
    
<div class="w-full border-b-2 border-primary-medium flex justify-between items-center" style="height: 57.6px">
    <p class="pl-4 flex justify-center items-center ml-2">Person</p>
    <div on:click={people} class='w-12 h-12 p-2 mr-2 hover:bg-secondary-darker hover:text-white rounded-full text-secondary-light transition-all duration-300'><PeopleIcon /></div>
</div>