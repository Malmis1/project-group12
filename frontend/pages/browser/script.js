// For enabling the categories when linked from another page
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed");
    // Get the query parameter value
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');

    // If there's a matching category, check the corresponding checkbox
    if (category) {
        const checkbox = document.getElementById(category);
        if (checkbox) {
            checkbox.checked = true;
        }
    }
    searchCourses();
});

// For toggling the filter sidebar
document.addEventListener('DOMContentLoaded', function() {
    const filterButton = document.querySelector('.filter-button');
    const sidebar = document.querySelector('.category-sidebar');
    sidebar.classList.toggle('sidebar-visible'); // Visible by default

    filterButton.addEventListener('click', function() {
        sidebar.classList.toggle('sidebar-visible');
    });
});

// For clearing the filters
document.addEventListener('DOMContentLoaded', (event) => {
    searchCourses(); // Calls it to set the initlalize state to clear
});
document.getElementById('clearFilter').addEventListener('click', clearFilters);
function clearFilters() {
    // Uncheck all checkboxes
    const categoryCheckboxes = document.querySelectorAll('.category-option input[type="checkbox"]');
    categoryCheckboxes.forEach(checkbox => {
        checkbox.checked = false;
    });

    // Hide the Clear Filter button
    document.getElementById('clearFilter').style.display = 'none';

    // Call searchCourses to refresh the list without filters
    searchCourses();
}

