const fetchApi = async (url) => {
    const res = await fetch(import.meta.env.VITE_BASE_URL + url, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_BEARER}`,
            accept: "application/json",
        },
    });
    if (!res.ok) {
        throw new Error("Internal Server Error");
    }
    const jsonData = await res.json();
    return jsonData;
}

export default fetchApi;