document.addEventListener('DOMContentLoaded', () => {

    const filterButton = document.querySelector('.filter-button');
    const sidebar = document.querySelector('.category-sidebar');
    const doneButton = document.getElementById('sidebarDoneButton');
    const overlay = document.getElementById('siteOverlay');
    const clearFilterButton = document.getElementById('clearFilter');

    // Enables the category when linked from another page
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');
    if (category) {
        const checkbox = document.getElementById(category);
        if (checkbox) {
            checkbox.checked = true;
        }
    }

    // Toggles the sidebar visibility when the filter button is clicked
    filterButton.addEventListener('click', () => {
        sidebar.classList.toggle('sidebar-visible');
        if (window.innerWidth <= 768) {
            if (sidebar.classList.contains('sidebar-visible')) {
                doneButton.style.display = 'block';
                overlay.style.display = 'block';
            } else {
                doneButton.style.display = 'none';
                overlay.style.display = 'none';
            }
        }
    });

     // Close the sidebar when the done button is clicked
    doneButton.addEventListener('click', () => {
        sidebar.classList.remove('sidebar-visible');
        doneButton.style.display = 'none';
        overlay.style.display = 'none';
     });

     // Close the sidebar when the overlay clicked
    overlay.addEventListener('click', () => {
         sidebar.classList.remove('sidebar-visible');
         doneButton.style.display = 'none';
         overlay.style.display = 'none';
    });

    // Listen for window resize events
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            doneButton.style.display = 'none';
            overlay.style.display = 'none';
        } else if (window.innerWidth <= 768 && sidebar.classList.contains('sidebar-visible')) {
            doneButton.style.display = 'block';
            overlay.style.display = 'block';
        }
    });

    // Clears the filters
    clearFilterButton.addEventListener('click', clearFilters);
    function clearFilters() {
        const categoryCheckboxes = document.querySelectorAll('.category-option input[type="checkbox"]');
        categoryCheckboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
        clearFilterButton.style.display = 'none';

        searchCourses();
    }

    // FOr initializing
    searchCourses();
});
