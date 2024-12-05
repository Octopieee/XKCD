<template>
    <div class="flex flex-col min-h-screen bg-slate-200">
        <Header @lucky-click="fetchRandomComic" />
        <Comic :comic="comic" :error="error" />
        <Footer />
    </div>
</template>

<script setup>
    const comic = ref(null);
    const error = ref(null);
    const comicId = ref(null);

    const route = useRoute();

    // Fetch specific comic
    const fetchComic = async () => {
        if (!comicId.value) {
            error.value = "Please enter a valid comic ID.";
            return;
        }

        error.value = null;
        comic.value = null;

        try {
            const { data } = await useFetch(`/api/xkcd?id=${comicId.value}`);
            comic.value = data.value;
        } catch (err) {
            console.error(err);
            error.value = "Failed to fetch comic. Please try again.";
        }
    };

    // Fetch random comic
    const fetchRandomComic = async () => {
        error.value = null;
        comic.value = null;

        try {
            const { data } = await useFetch('/api/xkcd');
            comic.value = data.value;
        } catch (err) {
            console.error(err);
            error.value = "Failed to fetch a random comic.";
        }
    };

    // Watch for route changes
    watch(
        () => route.query,
        (query) => {
            if (query.id) {
                comicId.value = query.id;
                fetchComic();
            } else {
                fetchRandomComic();
            }
        },
        { immediate: true }
    );
</script>