export function http(term) {
    const link = "https://pixabay.com/api/?";
    const apiKey = "43250686-c1e1dda9f99928fc2eb99e4d5";
    const searchParams = new URLSearchParams({
        key: apiKey,
        q: term,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true",
    });
    const URL = link + searchParams;
    return fetch(URL).then(response => {
        if (!response.ok) {
        throw new Error(response.status);
        }
        return response.json();
  });
}