<script lang="ts">
    import TopBar from "./topBar.svelte";
    import TextArea from "./TextArea.svelte";
    import People from "./People.svelte";

    var people = false
    
    function togglePeople() {
        people = !people
    }
</script>

<main class="h-screen bg-primary-lighter text-secondary-medium">
    <TopBar on:people={togglePeople} />
    <div class="w-full main" class:people>
        <TextArea />
        {#if people}
            <People />
        {/if}
    </div>
</main>

<style>
    .main {
        height: calc(100vh - 57.6px);
    }
    .people {
        display: grid;
        grid-template-columns: 80% 20%;
    }
</style>