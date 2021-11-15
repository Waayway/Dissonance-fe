<script lang="ts">
    export let sender;
    export let text;
    export let time;
</script>

<div class="w-full grid p-2 main">
    <div class="w-16 h-16 bg-primary-darker rounded-full">
        <slot /> <!-- Icon Input -->
    </div>
    <div class="ml-2 flex flex-col h-auto p-2">
        <p class="underline">{sender}</p>
        <p>{text}</p>
        <p class="text-xs">{time}</p>
    </div>
</div>

<style>
    .main {
        grid-template-columns: 4rem calc(100% - 4rem);
    }
</style>