<script lang="ts">
import ChatDate from "./ChatDate.svelte";
import ChatMessage from "./ChatMessage.svelte";
import SveltePng from '../../../assets/svelte.png'

    
</script>

<div class="h-full bg-primary-lighter">
    <ChatDate date="November 19 2021" />
    <ChatMessage text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." time="09:16" sender="Waayway"><img src={SveltePng} alt=""></ChatMessage>
</div>