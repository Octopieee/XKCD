export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const comicId = query.id || Math.floor(Math.random() * 2761) + 1; // Use the ID if provided, otherwise generate a random ID
    const url = `https://xkcd.com/${comicId}/info.0.json`;

    try {
        const response = await $fetch(url);
        return response;
    } catch (error) {
        throw createError({
            statusCode: error.response?.status || 500,
            statusMessage: error.message || "Error fetching comic",
        });
    }
});