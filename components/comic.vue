<template>
    <div class="flex-1 flex items-center justify-center text-center p-4 sm:p-8">
        <div v-if="comic" class="flex flex-col items-center max-w-full">
            <p class="text-2xl sm:text-4xl mb-4">{{ comic.title }} #{{ comic.num }}</p>
            <a
                v-if="comic.link"
                :href="comic.link"
                target="_blank"
                rel="noopener noreferrer"
                class="max-w-full"
            >
                <img :src="comic.img" :title="comic.alt" :alt="comic.title" class="max-w-full h-auto shadow-lg border-white border-solid border-2" />
            </a>
            <img
                v-else
                :src="comic.img"
                :title="comic.alt"
                :alt="comic.title"
                class="max-w-full h-auto shadow-lg border-white border-solid border-2"
            />
            <p class="mt-2 text-sm sm:text-base">{{ comic.month }}-{{ comic.day }}-{{ comic.year }}</p>
        </div>
        <div v-else-if="error">
            <p class="text-lg sm:text-2xl">Error loading comic, come back later!</p>
        </div>
        <div v-else>
            <p class="text-lg sm:text-2xl">Loading comic...</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            comic: {
                type: Object,
                required: false,
                default: null,
            },
            error: {
                type: String,
                required: false,
                default: null,
            },
        },
    };
</script>