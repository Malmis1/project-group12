document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed");
    // Get the query parameter value
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');

    // If there's a matching category, check the corresponding checkbox
    if (category) {
    console.log("Hello world!");
        const checkbox = document.getElementById(category);
        if (checkbox) {
            checkbox.checked = true;
        }
    }
});
