<script lang="ts">
  import Header from "./lib/Header.svelte";
  import Home from "./pages/Home.svelte";
  import Account from "./pages/Account.svelte";
  import Signup from "./pages/Signup.svelte";
  import Login from "./pages/Login.svelte";
  import Footer from "./lib/Footer.svelte";

  import { onMount } from "svelte";

  import { appState } from "./state.ts";
  import { useApp } from "./state";

  const pageToComponent = {
    home: Home,
    signup: Signup,
    login: Login,
    account: Account,
  };

  onMount(async () => {
    await useApp.start();
  });
</script>

<main>
  <Header />
  {#if $appState.page != undefined}
    <svelte:component this={pageToComponent[$appState.page]} />
  {/if}
  <!-- <Home /> -->
  <Footer />
  {#if $appState.requesting}
    <div
      class="w-screen h-[100vh] backdrop-blur-[2px] fixed top-0 flex flex-col items-center justify-center text-center"
    >
      <p class="text-3xl font-bold animate-pulse">fetching information</p>
    </div>
  {/if}
</main>
