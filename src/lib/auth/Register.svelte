<script lang="ts">
    import { AreaType } from "../../stores";
    import { register } from '../../api/auth';
    import ErrorIcon from 'svelte-icons/io/IoMdInformationCircleOutline.svelte'

    let email = ""
    let username = ""
    let password = ""
    let passwordverify = ""

    let error = ""

    const submit = async () => {
        if (!email) error = "Email is empty";
        else if (!username) error = "Username is empty";
        else if (!password) error = "Password is empty";
        else if (!passwordverify) error = "Password Verification is Empty"
        else if (password != passwordverify) {
            error = "Passwords do not match"
        } else {
            error = ""
            try {
                const data = await register(email,username,password);
                if (data) {
                    AreaType.set("Login")
                }
            } catch (err) {
                if (err instanceof Error) {
                    error = err.message
                } else {
                    error = err.toString()
                }
            }
        }
        register(email, username, password)
    }
    function loginScreen() {
        AreaType.set("Login")
    }
</script>

<div class="bg-secondary-darker w-full h-screen flex justify-center items-center text-secondary-medium">
    <div class="bg-primary-medium rounded-xl p-4">
        <h1 class="text-2xl text-center">Dissonance Register</h1>
        {#if error}
            <div class="rounded-xl w-full p-2 bg-danger text-white flex items-center my-2">
                <div class="w-7 mx-2">
                    <ErrorIcon />
                </div>
                <p>{error}</p>
            </div>
        {/if}
        <form>
            <div class="">
                <input bind:value={email} type="text" class="border-b-2 border-secondary-light block bg-primary-medium text-text rounded-xl py-2 px-3 shadow-sm focus:outline-none focus:ring-0 transition-all duration-300 placeholder-opacity-50" placeholder="Email">
            </div>
            <div class="">
                <input bind:value={username} type="text" class="border-b-2 border-secondary-light block bg-primary-medium text-text rounded-xl py-2 px-3 shadow-sm focus:outline-none focus:ring-0 transition-all duration-300 placeholder-opacity-50" placeholder="Username">
            </div>
            <div class="">
                <input bind:value={password} type="password" class="border-b-2 border-secondary-light block bg-primary-medium text-text rounded-xl py-2 px-3 shadow-sm focus:outline-none focus:ring-0 transition-all duration-300 placeholder-opacity-50" placeholder="Password">
            </div>
            <div class="">
                <input bind:value={passwordverify} type="password" class="border-b-2 border-secondary-light block bg-primary-medium text-text rounded-xl py-2 px-3 shadow-sm focus:outline-none focus:ring-0 transition-all duration-300 placeholder-opacity-50" placeholder="Password for verification">
            </div>
            <div class="w-full flex justify-around">
                <button on:click={submit} type="submit" class="transition-all duration-300 bg-transparent border-secondary-light border hover:border-transparent hover:bg-secondary-darker mt-3 px-3 py-2 text-text rounded">Submit</button>
                <button on:click={loginScreen} type="submit" class="transition-all duration-300 bg-transparent border-secondary-light border hover:border-transparent hover:bg-secondary-darker mt-3 px-3 py-2 text-text rounded">Back to Login</button>
            </div>
        </form>
    </div>
</div>