<script>
  import { onMount } from "svelte";
  import { appState, useApp } from "../state";
  import { server } from "../request";

  let account;
  onMount(async () => {
    const username = $appState.accessToken.split("@")[0];

    const closeLoading = useApp.startRequesting();
    account = await server.user(username);
    closeLoading();
    console.log(account);
  });
</script>

<div
  class="bg-white shadow-lg rounded-lg overflow-hidden w-full h-[100vh] flex flex-row items-center justify-center"
>
  {#if account}
    <div class="p-6 flex">
      <div class="w-1/3 text-center flex flex-col items-center justify-center">
        <img
          src={account.picture_url}
          alt={`${account.username}'s profile picture'`}
          class="rounded-full ring-2 ring-gray-500 max-w-[20vw] max-h-[20vh] mb-5"
        />
        <p class="font-bold text-gray-800">About Me</p>
        <p class="text-gray-600">
          {account.description.length > 0
            ? account.description
            : "no description provided"}
        </p>
      </div>
      <div class="w-2/3 pl-6">
        <div class="flex items-center mb-4">
          <span
            class="bg-green-400 text-white py-1 px-4 rounded-full uppercase text-sm"
          >
            {account.rating}/5 ({account.rating_count})</span
          >
          <h2 class="ml-4 text-3xl font-bold text-gray-800">
            I'm @{account.username}!
          </h2>
        </div>
        <p class="text-gray-600 mb-6">Upcycling Enthusiast</p>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <p class="text-gray-800 font-bold">Age</p>
            <p class="text-gray-600">
              {account.age > 0 ? account.age : "age not provided"}
            </p>
          </div>
          <div>
            <p class="text-gray-800 font-bold">Location</p>
            <p class="text-gray-600">
              {account.location.length > 0
                ? account.location
                : "no location provided"}
            </p>
          </div>
          <div>
            <p class="text-gray-800 font-bold">E-mail</p>
            <p class="text-gray-600">{account.email}</p>
          </div>
          <div>
            <p class="text-gray-800 font-bold">Phone</p>
            <p class="text-gray-600">+123 456 7890</p>
          </div>
        </div>
      </div>
    </div>
  {/if}
</div>
