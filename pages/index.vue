<template>
    <div class="flex flex-col min-h-screen bg-slate-200">
        <Header />
        <Comic :comic="comic" :error="error" />
        <Footer />
    </div>
</template>

<script setup>
    const comic = ref(null);
    const error = ref(null);

    // Function to fetch the latest comic
    const fetchLatestComic = async () => {
        error.value = null; // Clear previous error
        comic.value = null; // Clear current comic

        try {
            const response = await $fetch('/api/xkcd_latest'); // Fetch the latest comic
            comic.value = response;
            console.log(comic.value); // Debugging: Check if comic.num is present
        } catch (err) {
            console.error(err);
            error.value = "Failed to fetch the latest comic.";
        }
    };

    // Fetch the latest comic on page load
    await fetchLatestComic();
</script>
