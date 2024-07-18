export const postData = async (endpoint: string, data: FormData) => {
    try {
        const response = await fetch(endpoint, {
            method: "POST",
            body: data
        });
        return response.json();
    } catch (error) {
        console.error('Error posting data', error);
        throw error;
    }
};