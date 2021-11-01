<script lang="ts">
    export let name: String
    import HashTag from 'svelte-icons/fa/FaHashtag.svelte'
</script>

<div class="flex cursor-pointer pl-7 m-1 p-1 hover:bg-primary-light transition-all rounded-lg">
    <div class="w-4 mt-1 mr-1">
        <HashTag />
    </div>
    <p>{name}</p>
</div>