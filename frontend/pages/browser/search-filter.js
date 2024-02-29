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

// Initializng
document.addEventListener('DOMContentLoaded', (event) => {
    const categoryForm = document.getElementById('category-form');
    if (categoryForm) {
        categoryForm.addEventListener('change', searchCourses);
    }
});
document.querySelector('.sort-select').addEventListener('change', searchCourses);

function searchCourses() {
    const categoryCheckboxes = document.querySelectorAll('.category-option input[type="checkbox"]');
    const sortSelect = document.querySelector('.sort-select');
    const resultsHeader = document.querySelector('.results-header')
    const filterText = document.querySelector('.filter-text');
    let searchQuery = "test";
    let selectedCategories = [];

    // Iterate over the checkboxes to find the checked ones
        categoryCheckboxes.forEach(checkbox => {
            if (checkbox.checked) {
                selectedCategories.push(checkbox.name);
            }
        });

    // Show or hide the clear filter span based on if a filter is selected
    const clearFilterButton = document.getElementById('clearFilter');
    if (selectedCategories.length > 0) {
        clearFilterButton.style.display = 'inline-block';
    } else {
        clearFilterButton.style.display = 'none';
    }

    // Filter the courses based on selected categories
    // If rhere are no categories are selected, display all courses
    let filteredCourses = courses.filter(course => {
        return selectedCategories.length === 0 || selectedCategories.includes(course.category);
    });

     // Sorts the courses after what the user selects
        const sortValue = sortSelect.value;
        switch (sortValue) {
            case 'Price (low - high)':
                filteredCourses.sort((a, b) => a.cost - b.cost);
                break;
            case 'Price (high - low)':
                filteredCourses.sort((a, b) => b.cost - a.cost);
                break;
            case 'Alphabetic (a to z)':
                filteredCourses.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'Alphabetic (z to a)':
                filteredCourses.sort((a, b) => b.title.localeCompare(a.title));
                break;
            default:
                // Most relevant
                break;
        }

    // Update the filter count
    const selectedFiltersCount = selectedCategories.length;
    filterText.textContent = selectedFiltersCount > 0 ? `☰ Filter (${selectedFiltersCount})` : `☰ Filter`;

    // Updates the results header
    resultsHeader.textContent = `${filteredCourses.length} results${searchQuery ? ` for “${searchQuery}”` : ''}`;

    displayCourses(filteredCourses);
}


function displayCourses(courses) {
    const coursesList = document.querySelector('.course-container');
    coursesList.innerHTML = '';

    courses.forEach(course => {
        // Create the main course div
        const courseDiv = document.createElement('div');
        courseDiv.className = 'course';

        // Create the image box with the course image and image text
        const imageBox = document.createElement('div');
        imageBox.className = 'image-box';
        imageBox.innerHTML = `
            <img src="${course.image}" alt="Course Image" class="course-image">
            <div class="image-text">${course.description ? course.description : 'Click to view more'}</div>
        `;

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
searchCourses();



