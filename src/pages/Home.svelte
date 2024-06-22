<script>
    import { appState, useApp } from "../state";

    let searchInput;
    const search = {
        value: "",
        category: undefined,
    };
    let availableCategories = [
        {
            name: "Upcycled Furniture",
            keyword: "furniture",
            desc: "Beautifully crafted furniture made from recycled materials",
            img: "https://i.ibb.co/tXVzqRx/furniture.jpg",
        },
        {
            name: "Upcycled Clothing",
            keyword: "cloth",
            desc: "Fashionable clothing items created from repurposed fabrics",
            img: "https://i.ibb.co/v1nVCgD/clothing.webp",
        },
        {
            name: "Upcycled Decor",
            keyword: "decor",
            desc: "Unique home decor items crafted from reclaimed materials",
            img: "https://i.ibb.co/LCLdQ73/decor.png",
        },
        {
            name: "Upcycled Toys",
            keyword: "toy",
            desc: "Fun and safe toys made from recycled materials",
            img: "https://i.ibb.co/k9KVqKZ/toys.jpg",
        },
        {
            name: "Upcycled Art",
            keyword: "art",
            desc: "Creative artworks made from repurposed materials",
            img: "https://i.ibb.co/7RBvqhb/art.jpg",
        },
        {
            name: "Upcycled Jewelry",
            keyword: "jewelry",
            desc: "Handcrafted jewelry pieces made from recycled materials",
            img: "https://i.ibb.co/wg4rq3b/jewelry.webp",
        },
    ];

    const handleSelectCategory = (category) => {
        search.category = category;
        search.value = "";
        searchInput.focus();
    };

    const filterItems = () => {
        let filter = search.value.toLowerCase();
        let itemsGrid = document.getElementById("itemsGrid");
        let items = itemsGrid.getElementsByClassName("item");

        for (let i = 0; i < items.length; i++) {
            let item = items[i];
            let text = item.textContent || item.innerText;
            if (text.toLowerCase().includes(filter)) {
                item.style.display = "";
            } else {
                item.style.display = "none";
            }
        }
    };
</script>

<!-- Hero Section -->
<section class="hero-bg h-96 flex items-center justify-center text-white">
    <div class="text-center">
        <h1 class="text-6xl font-extrabold mb-6 drop-shadow-lg">
            Find Upcycled Treasures
        </h1>
        <p class="text-2xl mb-8 drop-shadow-lg">
            Reduce waste, support sustainability, and receive unique donated
            items.
        </p>
        <a
            href="#items"
            class="bg-white text-green-500 px-8 py-4 rounded-full text-lg shadow-lg hover:bg-gray-200 transition mr-5"
            >Browse Items</a
        >
        {#if $appState.guest}
            <a
                on:click={() => useApp.changePage("signup")}
                class="bg-white text-green-500 px-8 py-4 rounded-full text-lg shadow-lg hover:bg-gray-200 transition"
                >Sign up</a
            >
        {/if}
    </div>
</section>

<!-- Search Bar -->
<section class="py-6 bg-gray-200">
    <div class="container mx-auto text-center">
        <input
            type="text"
            id="searchInput"
            class="w-2/3 p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Search here..."
            on:keyup={filterItems}
            bind:value={search.value}
            bind:this={searchInput}
        />
        {#if search.category}
            <button
                on:click={() => (search.category = undefined)}
                class="block flex flex-row items-center justify-center space-x-2 mx-auto mt-2"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    class="size-5 fill-red-800"
                >
                    <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z"
                        clip-rule="evenodd"
                    />
                </svg>
                <p>
                    <bold class="font-bold">{search.category}</bold> category selected
                </p>
            </button>
        {/if}
    </div>
</section>

<!-- Items Section -->
<section id="items" class="py-20">
    <div class="container mx-auto text-center">
        <h2 class="text-4xl font-bold mb-12">
            Available {search.category == undefined ? "Categories" : "Items"}
        </h2>
        <div
            id="itemsGrid"
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
            {#if search.category == undefined}
                {#each availableCategories as category}
                    <div
                        class="bg-white p-8 rounded-lg shadow-md item transition transform hover:-translate-y-1 hover:shadow-lg"
                    >
                        <img
                            src={category.img}
                            alt={category.name}
                            class="w-full h-48 object-cover rounded-t-lg"
                        />
                        <h3 class="item-title font-bold my-4">
                            {category.name}
                        </h3>
                        <p class="text-gray-700">
                            {category.desc}
                        </p>
                        <button
                            class="mt-4 bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition"
                            on:click={() =>
                                handleSelectCategory(category.keyword)}
                            >Browse</button
                        >
                    </div>
                {/each}
            {:else if search.category == "furniture"}
                <!-- Upcycled Furniture Items -->
                <div
                    class="bg-white p-8 rounded-lg shadow-md item transition transform hover:-translate-y-1 hover:shadow-lg"
                >
                    <img
                        src="https://source.unsplash.com/600x400/?upcycled,furniture"
                        alt="Furniture Example"
                        class="w-full h-48 object-cover rounded-t-lg"
                    />
                    <h3 class="item-title font-bold my-4">
                        Reclaimed Wood Coffee Table
                    </h3>
                    <p class="text-gray-700">
                        A stunning coffee table made from reclaimed wood,
                        perfect for your living room.
                    </p>
                </div>
                <div
                    class="bg-white p-8 rounded-lg shadow-md item transition transform hover:-translate-y-1 hover:shadow-lg"
                >
                    <img
                        src="https://source.unsplash.com/600x400/?upcycled,furniture2"
                        alt="Furniture Example"
                        class="w-full h-48 object-cover rounded-t-lg"
                    />
                    <h3 class="item-title font-bold my-4">
                        Vintage Chair Revamp
                    </h3>
                    <p class="text-gray-700">
                        A beautiful vintage chair, restored and upcycled to add
                        character to any room.
                    </p>
                </div>
                <div
                    class="bg-white p-8 rounded-lg shadow-md item transition transform hover:-translate-y-1 hover:shadow-lg"
                >
                    <img
                        src="https://source.unsplash.com/600x400/?upcycled,furniture3"
                        alt="Furniture Example"
                        class="w-full h-48 object-cover rounded-t-lg"
                    />
                    <h3 class="item-title font-bold my-4">Pallet Bookshelf</h3>
                    <p class="text-gray-700">
                        A functional bookshelf made from recycled pallets,
                        perfect for any home office.
                    </p>
                </div>
            {:else if search.category == "cloth"}
                <!-- Upcycled Clothing Items -->
                <div
                    class="bg-white p-8 rounded-lg shadow-md item transition transform hover:-translate-y-1 hover:shadow-lg"
                >
                    <img
                        src="https://source.unsplash.com/600x400/?upcycled,clothing"
                        alt="Clothing Example"
                        class="w-full h-48 object-cover rounded-t-lg"
                    />
                    <h3 class="item-title font-bold my-4">
                        Patchwork Denim Jacket
                    </h3>
                    <p class="text-gray-700">
                        A trendy jacket made from repurposed denim, perfect for
                        any wardrobe.
                    </p>
                </div>
                <div
                    class="bg-white p-8 rounded-lg shadow-md item transition transform hover:-translate-y-1 hover:shadow-lg"
                >
                    <img
                        src="https://source.unsplash.com/600x400/?upcycled,clothing2"
                        alt="Clothing Example"
                        class="w-full h-48 object-cover rounded-t-lg"
                    />
                    <h3 class="item-title font-bold my-4">
                        Recycled T-Shirt Dress
                    </h3>
                    <p class="text-gray-700">
                        A comfortable and stylish dress made from recycled
                        t-shirts.
                    </p>
                </div>
                <div
                    class="bg-white p-8 rounded-lg shadow-md item transition transform hover:-translate-y-1 hover:shadow-lg"
                >
                    <img
                        src="https://source.unsplash.com/600x400/?upcycled,clothing3"
                        alt="Clothing Example"
                        class="w-full h-48 object-cover rounded-t-lg"
                    />
                    <h3 class="item-title font-bold my-4">
                        Upcycled Sweater Scarf
                    </h3>
                    <p class="text-gray-700">
                        A cozy scarf made from repurposed sweaters, perfect for
                        cold weather.
                    </p>
                </div>
            {:else if search.category == "decor"}
                <!-- Upcycled Decor Items -->
                <div
                    class="bg-white p-8 rounded-lg shadow-md item transition transform hover:-translate-y-1 hover:shadow-lg"
                >
                    <img
                        src="https://source.unsplash.com/600x400/?upcycled,decor"
                        alt="Decor Example"
                        class="w-full h-48 object-cover rounded-t-lg"
                    />
                    <h3 class="item-title font-bold my-4">
                        Recycled Glass Vase
                    </h3>
                    <p class="text-gray-700">
                        A beautiful vase made from recycled glass, perfect for
                        fresh flowers.
                    </p>
                </div>
                <div
                    class="bg-white p-8 rounded-lg shadow-md item transition transform hover:-translate-y-1 hover:shadow-lg"
                >
                    <img
                        src="https://source.unsplash.com/600x400/?upcycled,decor2"
                        alt="Decor Example"
                        class="w-full h-48 object-cover rounded-t-lg"
                    />
                    <h3 class="item-title font-bold my-4">
                        Bottle Cap Mosaic Frame
                    </h3>
                    <p class="text-gray-700">
                        A unique photo frame decorated with a mosaic of bottle
                        caps.
                    </p>
                </div>
                <div
                    class="bg-white p-8 rounded-lg shadow-md item transition transform hover:-translate-y-1 hover:shadow-lg"
                >
                    <img
                        src="https://source.unsplash.com/600x400/?upcycled,decor3"
                        alt="Decor Example"
                        class="w-full h-48 object-cover rounded-t-lg"
                    />
                    <h3 class="item-title font-bold my-4">
                        Wine Cork Bulletin Board
                    </h3>
                    <p class="text-gray-700">
                        A functional bulletin board made from recycled wine
                        corks.
                    </p>
                </div>
            {:else if search.category == "toy"}
                <!-- Upcycled Toy Items -->
                <div
                    class="bg-white p-8 rounded-lg shadow-md item transition transform hover:-translate-y-1 hover:shadow-lg"
                >
                    <img
                        src="https://source.unsplash.com/600x400/?upcycled,toy"
                        alt="Toy Example"
                        class="w-full h-48 object-cover rounded-t-lg"
                    />
                    <h3 class="item-title font-bold my-4">
                        Recycled Robot Toy
                    </h3>
                    <p class="text-gray-700">
                        A fun robot toy made from recycled materials, perfect
                        for kids.
                    </p>
                </div>
                <div
                    class="bg-white p-8 rounded-lg shadow-md item transition transform hover:-translate-y-1 hover:shadow-lg"
                >
                    <img
                        src="https://source.unsplash.com/600x400/?upcycled,toy2"
                        alt="Toy Example"
                        class="w-full h-48 object-cover rounded-t-lg"
                    />
                    <h3 class="item-title font-bold my-4">DIY Puzzle Blocks</h3>
                    <p class="text-gray-700">
                        Puzzle blocks made from recycled wood, great for child
                        development.
                    </p>
                </div>
                <div
                    class="bg-white p-8 rounded-lg shadow-md item transition transform hover:-translate-y-1 hover:shadow-lg"
                >
                    <img
                        src="https://source.unsplash.com/600x400/?upcycled,toy3"
                        alt="Toy Example"
                        class="w-full h-48 object-cover rounded-t-lg"
                    />
                    <h3 class="item-title font-bold my-4">
                        Upcycled Fabric Stuffed Animals
                    </h3>
                    <p class="text-gray-700">
                        Soft stuffed animals made from repurposed fabrics,
                        perfect for cuddling.
                    </p>
                </div>
            {:else if search.category == "art"}
                <!-- Upcycled Art Items -->
                <div
                    class="bg-white p-8 rounded-lg shadow-md item transition transform hover:-translate-y-1 hover:shadow-lg"
                >
                    <img
                        src="https://source.unsplash.com/600x400/?upcycled,art"
                        alt="Art Example"
                        class="w-full h-48 object-cover rounded-t-lg"
                    />
                    <h3 class="item-title font-bold my-4">
                        Bottle Cap Wall Art
                    </h3>
                    <p class="text-gray-700">
                        A colorful wall art piece made entirely from recycled
                        bottle caps.
                    </p>
                </div>
                <div
                    class="bg-white p-8 rounded-lg shadow-md item transition transform hover:-translate-y-1 hover:shadow-lg"
                >
                    <img
                        src="https://source.unsplash.com/600x400/?upcycled,art2"
                        alt="Art Example"
                        class="w-full h-48 object-cover rounded-t-lg"
                    />
                    <h3 class="item-title font-bold my-4">
                        Recycled Paper Sculptures
                    </h3>
                    <p class="text-gray-700">
                        Intricate sculptures made from recycled paper, a true
                        work of art.
                    </p>
                </div>
                <div
                    class="bg-white p-8 rounded-lg shadow-md item transition transform hover:-translate-y-1 hover:shadow-lg"
                >
                    <img
                        src="https://source.unsplash.com/600x400/?upcycled,art3"
                        alt="Art Example"
                        class="w-full h-48 object-cover rounded-t-lg"
                    />
                    <h3 class="item-title font-bold my-4">
                        Plastic Bottle Flowers
                    </h3>
                    <p class="text-gray-700">
                        Beautiful flowers crafted from recycled plastic bottles,
                        adding a touch of nature to your home.
                    </p>
                </div>
            {:else if search.category == "jewelry"}
                <!-- Upcycled Jewelry Items -->
                <div
                    class="bg-white p-8 rounded-lg shadow-md item transition transform hover:-translate-y-1 hover:shadow-lg"
                >
                    <img
                        src="https://source.unsplash.com/600x400/?upcycled,jewelry"
                        alt="Jewelry Example"
                        class="w-full h-48 object-cover rounded-t-lg"
                    />
                    <h3 class="item-title font-bold my-4">
                        Recycled Glass Bead Necklace
                    </h3>
                    <p class="text-gray-700">
                        A stunning necklace made from recycled glass beads,
                        perfect for any outfit.
                    </p>
                </div>
                <div
                    class="bg-white p-8 rounded-lg shadow-md item transition transform hover:-translate-y-1 hover:shadow-lg"
                >
                    <img
                        src="https://source.unsplash.com/600x400/?upcycled,jewelry2"
                        alt="Jewelry Example"
                        class="w-full h-48 object-cover rounded-t-lg"
                    />
                    <h3 class="item-title font-bold my-4">
                        Bottle Cap Earrings
                    </h3>
                    <p class="text-gray-700">
                        Unique earrings made from recycled bottle caps, adding a
                        touch of fun to your look.
                    </p>
                </div>
                <div
                    class="bg-white p-8 rounded-lg shadow-md item transition transform hover:-translate-y-1 hover:shadow-lg"
                >
                    <img
                        src="https://source.unsplash.com/600x400/?upcycled,jewelry3"
                        alt="Jewelry Example"
                        class="w-full h-48 object-cover rounded-t-lg"
                    />
                    <h3 class="item-title font-bold my-4">
                        Reclaimed Wood Bracelet
                    </h3>
                    <p class="text-gray-700">
                        A stylish bracelet made from reclaimed wood, perfect for
                        eco-conscious fashionistas.
                    </p>
                </div>
            {/if}
        </div>
    </div>
</section>

<style>
    .hero-bg {
        background: linear-gradient(
                to right,
                rgba(34, 193, 195, 0.6),
                rgba(253, 187, 45, 0.6)
            ),
            url("https://source.unsplash.com/1600x900/?recycle,environment");
        background-size: cover;
        background-position: center;
    }
    .item:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    }
    .item-title {
        font-size: 1.75rem;
    }
</style>
