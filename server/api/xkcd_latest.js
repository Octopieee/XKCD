export default defineEventHandler(async () => {
    try {
        const response = await $fetch("https://xkcd.com/info.0.json");
        return response;
    } catch (error) {
        throw createError({
            statusCode: error.response?.status || 500,
            statusMessage: error.message || "Error fetching comic",
        });
    }
});