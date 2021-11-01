<script lang="ts">
    export let name: String;
    import ArrowDown from 'svelte-icons/io/IoIosArrowDown.svelte'
    import AddIcon from 'svelte-icons/io/IoIosAdd.svelte'
</script>

<div class="h-auto grid grid-cols-3 text-left justify-start align-middle cursor-pointer hover:text-secondary-light main">
    <div class="w-6 m-1 flex justify-center align-middle">
        <ArrowDown />
    </div>
    <p class="my-2.5 mx-1 font-bold text-xs">
        {name.toUpperCase()}
    </p>
    <div class="w-6 m-1 flex right-0 justify-center align-middle">
        <AddIcon />
    </div>
</div>
<style>
    .main {
        grid-template-columns: 1.5rem calc(100% - 3.25rem) 1.5rem;
    }
</style>