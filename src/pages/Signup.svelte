<script lang="ts">
    import { useApp } from "../state";
    import { server } from "../request";

    let form = { username: "", password: "", email: "" };
    const handleSignUp = async () => {
        if (form.password.length < 8) {
            alert("password must be more than 8 characters long");
            return;
        }

        const closeLoading = useApp.startRequesting();
        const response = await server.signup(
            form.username,
            form.email,
            form.password
        );
        closeLoading();

        if (response.status == false) {
            switch (response.cause) {
                case "username-taken":
                    alert(
                        "Sorry, this username is already taken by another user!"
                    );
                    form.username = "";
                    break;
                case "email-in-use":
                    alert(
                        "Sorry, there is already an account with this email address!"
                    );
                    form.email = "";
                    break;
            }
            return;
        } else {
            await useApp.load(response.access_token);
            useApp.changePage("account");
        }
    };
</script>

<svelte:head>
    <title>Signup - Circular Economy Marketplace</title>
</svelte:head>
<section class="py-20 bg-gradient-to-r from-green-400 to-blue-500">
    <div class="container mx-auto text-center">
        <h2 class="text-5xl font-extrabold mb-8 text-white">Sign Up</h2>
        <form class="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
            <div class="mb-6">
                <label
                    for="username"
                    class="block text-gray-700 text-lg font-semibold mb-2"
                    >Username</label
                >
                <input
                    type="text"
                    id="username"
                    name="username"
                    bind:value={form.username}
                    class="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
            </div>
            <div class="mb-6">
                <label
                    for="email"
                    class="block text-gray-700 text-lg font-semibold mb-2"
                    >Email Address</label
                >
                <input
                    type="email"
                    id="email"
                    name="email"
                    bind:value={form.email}
                    class="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
            </div>
            <div class="mb-6">
                <label
                    for="password"
                    class="block text-gray-700 text-lg font-semibold mb-2"
                    >Password</label
                >
                <input
                    type="password"
                    id="password"
                    name="password"
                    bind:value={form.password}
                    class="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
            </div>
            <button
                on:click|preventDefault={handleSignUp}
                class="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full hover:from-green-600 hover:to-green-700 transition duration-300 ease-in-out"
                >Sign Up</button
            >
        </form>
    </div>
</section>

<style>
    .bg-gradient-to-r {
        background: linear-gradient(
            to right,
            rgba(34, 193, 195, 0.8),
            rgba(253, 187, 45, 0.8)
        );
    }
    .container {
        max-width: 900px;
    }
    input[type="text"],
    input[type="email"],
    input[type="password"] {
        transition: all 0.3s ease-in-out;
    }
    input[type="text"]:focus,
    input[type="email"]:focus,
    input[type="password"]:focus {
        border-color: #4dc0b5;
        box-shadow: 0 0 0 3px rgba(77, 192, 181, 0.2);
    }
    button {
        font-family: "Inter", sans-serif;
        cursor: pointer;
    }
</style>
