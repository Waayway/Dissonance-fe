<script lang="ts">
    let username = ""
    let password = ""

    import { AreaType } from "../../stores";

    import { login, register } from '../../api/auth';

    function submit() {
        console.log(username+" : "+password)
        console.log(login(username, password))
        if (username == "Waayway" && password == "admin") {
            AreaType.set("Personal")
        }
    }
    function registerScreen() {
        register("test@test.com",username,password)
        AreaType.set("register")
    }
</script>

<div class="bg-secondary-darker w-full h-screen flex justify-center items-center text-secondary-medium">
    <div class="bg-primary-medium rounded-xl p-4">
        <h1 class="text-2xl text-center">Dissonance Login</h1>
        <form>
            <div class="">
                <input bind:value={username} type="text" class="border-b-2 border-secondary-light block bg-primary-medium text-text rounded-xl py-2 px-3 shadow-sm focus:outline-none focus:ring-0 transition-all duration-300 placeholder-opacity-50" placeholder="Username">
            </div>
            <div class="">
                <input bind:value={password} type="password" class="border-b-2 border-secondary-light block bg-primary-medium text-text rounded-xl py-2 px-3 shadow-sm focus:outline-none focus:ring-0 transition-all duration-300 placeholder-opacity-50" placeholder="Password">
            </div>
            <div class="w-full flex justify-around">
                <button on:click={submit} type="submit" class="transition-all duration-300 bg-transparent border-secondary-light border hover:border-transparent hover:bg-secondary-darker mt-3 px-3 py-2 text-text rounded">Submit</button>
                <button on:click={registerScreen} type="submit" class="transition-all duration-300 bg-transparent border-secondary-light border hover:border-transparent hover:bg-secondary-darker mt-3 px-3 py-2 text-text rounded">Register</button>
            </div>
        </form>
    </div>
</div>