<script>
  import { appState, useApp } from "../state";
</script>

<header class="bg-white shadow">
  <div class="container mx-auto flex justify-between items-center p-6">
    <div class="text-3xl font-extrabold text-green-500">
      Circular Economy Marketplace
    </div>
    <nav class="space-x-4">
      <a
        class="text-gray-600 hover:text-green-500 text-lg"
        on:click={() => useApp.changePage("home")}>Home</a
      >
      {#if $appState.guest}
        <a
          on:click={() => useApp.changePage("login")}
          class="text-gray-600 hover:text-green-500 text-lg">Login</a
        >
      {:else}
        <a
          on:click={() => useApp.changePage("account")}
          class="text-gray-600 hover:text-green-500 text-lg">Account</a
        >
      {/if}

      <a href="#" class="text-gray-600 hover:text-green-500 text-lg">Contact</a>
    </nav>
  </div>
</header>
