<script lang="ts">
    import People from "./People.svelte";
    import TextArea from "./TextArea.svelte";
    import TopBar from "./topBar.svelte";
</script>

<main class="h-screen bg-primary-lighter text-secondary-medium">
    <TopBar />
    <div class="w-full grid main">
        <TextArea />
        <People />
    </div>
</main>

<style>
    .main {
        grid-template-columns: 80% 20%;
        height: calc(100vh - 57.6px);
    }
</style>