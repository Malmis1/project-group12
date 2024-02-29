// Placeholder data
    const courses = [
        { title: "Real-Time Programming in Java", keywords: "Java, real-time programming, multi-threading, programming", category: "InformationTechnologies", cost: 300, image: "/frontend/resources/images/business strategy.jpg" },
        { title: "Real-Time Programming in Java", keywords: "Java, real-time programming, multi-threading, programming", category: "InformationTechnologies", cost: 600, image: "/frontend/resources/images/business strategy.jpg" },
        { title: "Business And Entrepreneurship", keywords: "Java, real-time programming, multi-threading, programming", category: "BusinessAndEntrepreneurship", cost: 29999, image: "/frontend/resources/images/business strategy.jpg" },
        { title: "Real-Time Programming in Java", keywords: "Java, real-time programming, multi-threading, programming", category: "InformationTechnologies", cost: 50000, image: "/frontend/resources/images/business strategy.jpg" },
        { title: "Real-Time Programming in Java", keywords: "Java, real-time programming, multi-threading, programming", category: "InformationTechnologies", cost: 20000, image: "/frontend/resources/images/business strategy.jpg" },
        { title: "DigitalMarketing2", keywords: "Java, real-time programming, multi-threading, programming", category: "DigitalMarketing", cost: 300, image: "/frontend/resources/images/business strategy.jpg" },
        { title: "Digital Marketing", keywords: "Java, real-time programming, multi-threading, programming", category: "DigitalMarketing", cost: 29999, image: "/frontend/resources/images/business strategy.jpg" },

];

let sortSelect, resultsHeader, filterText, clearFilterSpan, coursesList;

// Initializng
document.addEventListener('DOMContentLoaded', (event) => {
    const categoryForm = document.getElementById('category-form');
    if (categoryForm) {
        categoryForm.addEventListener('change', searchCourses);
    }
});
document.querySelector('.sort-select').addEventListener('change', searchCourses);

document.addEventListener('DOMContentLoaded', () => {
    sortSelect = document.querySelector('.sort-select');
    resultsHeader = document.querySelector('.results-header');
    filterText = document.querySelector('.filter-text');
    clearFilterSpan = document.getElementById('clearFilter');
    coursesList = document.querySelector('.course-container');

    // Event listeners
    document.getElementById('category-form').addEventListener('change', searchCourses);
    sortSelect.addEventListener('change', searchCourses);
    clearFilterSpan.addEventListener('click', clearFilters);

    // Initial search to display courses
    searchCourses();
});

function searchCourses() {
    const selectedCategories = getSelectedCategories();
    toggleClearFilterSpan(selectedCategories.length > 0);

    let filteredCourses = filterCourses(selectedCategories);
    sortCourses(filteredCourses, sortSelect.value);
    updateUI(filteredCourses);

    displayCourses(filteredCourses);
}

function getSelectedCategories() {
    const categoryCheckboxes = document.querySelectorAll('.category-option input[type="checkbox"]');
    return Array.from(categoryCheckboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.name);
}

function toggleClearFilterSpan(isVisible) {
    clearFilterSpan.style.display = isVisible ? 'inline-block' : 'none';
}

function filterCourses(selectedCategories) {
    return courses.filter(course => selectedCategories.length === 0 || selectedCategories.includes(course.category));
}

function sortCourses(courses, sortValue) {
    switch (sortValue) {
        case 'Price (low - high)':
            courses.sort((a, b) => a.cost - b.cost);
            break;
        case 'Price (high - low)':
            courses.sort((a, b) => b.cost - a.cost);
            break;
        case 'Alphabetic (a to z)':
            courses.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'Alphabetic (z to a)':
            courses.sort((a, b) => b.title.localeCompare(a.title));
            break;
    }
}

function updateUI(filteredCourses) {
    const searchQuery = "test";
    filterText.textContent = categoryCheckboxes.length > 0 ? `☰ Filter (${categoryCheckboxes.length})` : `☰ Filter`;
    resultsHeader.textContent = `${filteredCourses.length} results${searchQuery ? ` for “${searchQuery}”` : ''}`;
}

function displayCourses(courses) {
    coursesList.innerHTML = '';

    courses.forEach(course => {
        // Create the main course div
        const courseDiv = document.createElement('div');
        courseDiv.className = 'course';

        // Create the image box with the course image and image text
        const imageBox = document.createElement('div');
        imageBox.className = 'image-box';
        imageBox.innerHTML = `<img src="${course.image}" alt="Course Image" class="course-image">
                              <div class="image-text">${course.description ? course.description : 'Click to view more'}</div>`;

        const title = document.createElement('h3');
        title.className = 'course-title';
        title.textContent = course.title;

        const price = document.createElement('div');
        price.className = 'course-price';
        price.textContent = `Price: ${course.cost} kr`;

        const button = document.createElement('button');
        button.className = 'course-button';
        button.textContent = 'Add to cart';

        // Appends the elements to the course div
        courseDiv.appendChild(imageBox);
        courseDiv.appendChild(title);
        courseDiv.appendChild(price);
        courseDiv.appendChild(button);

        // Append the course div to the container
        coursesList.appendChild(courseDiv);
    });
}

function clearFilters() {
    categoryCheckboxes.forEach(checkbox => checkbox.checked = false);
    searchCourses();
}

searchCourses();