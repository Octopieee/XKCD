<template>
    <div class="bg-slate-800 text-white">
        <nav class="flex flex-col sm:flex-row items-center p-2 justify-between">
            <!-- Logo Section -->
            <div class="mb-4 sm:mb-0">
                <nuxt-link to="/">
                    <img class="w-12 sm:w-16" src="../public/img/logo.png" alt="logo">
                </nuxt-link>
            </div>

            <!-- Links and Search Bar Section -->
            <div class="flex flex-col sm:flex-row items-center gap-4">
                <nuxt-link class="mx-2 hover:text-slate-300" to="/">Latest</nuxt-link>
                <nuxt-link class="mx-2 hover:text-slate-300" to="/search" @click.native="emitLuckyClick">
                    I'm Feeling Lucky
                </nuxt-link>
                <input
                    v-model="comicId"
                    type="number"
                    placeholder="Search Comic ID"
                    class="w-full sm:w-auto px-3 py-2 rounded bg-slate-700 text-white"
                    @keydown.enter="searchComic"
                />
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            comicId: null,
        };
    },
    methods: {
        searchComic() {
            if (this.comicId) {
                this.$router.push({ path: '/search', query: { id: this.comicId } });
            }
        },
        emitLuckyClick() {
            this.$emit('lucky-click');
        },
    },
};
</script>
