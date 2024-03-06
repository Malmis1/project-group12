// For loading the navbar
document.addEventListener("DOMContentLoaded", function() {
  fetch('/frontend/resources/html/navbar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbar').innerHTML = data;
      initCartDropdown(); // initialize event listener for cart dropdown
    });
});

// For toggling the popup menu on small screen sizes
function toggleMenu() {
    var menu = document.getElementById("popupMenu");
    if (menu.classList.contains("show")) {
        // When hiding
        menu.style.maxHeight = null;
        menu.classList.remove("show");
    } else {
        // When showing
        const scrollHeight = menu.scrollHeight + "px";
        menu.style.maxHeight = scrollHeight;
        menu.classList.add("show");
    }
}


// For loading the footer
document.addEventListener("DOMContentLoaded", function() {
    fetch('/frontend/resources/html/footer.html')
        .then(response => response.text())
        .then(data => {
        document.getElementById('footer').innerHTML = data;
    });
});

function initCartDropdown() {
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    if (mobileMenuIcon) {
        let hideTimeout;
        mobileMenuIcon.addEventListener('mouseenter', function() {
            clearTimeout(hideTimeout);
            const cartDropdown = document.querySelector('.cart-dropdown');
            cartDropdown.style.visibility = 'visible';
            cartDropdown.style.opacity = '1';
        });

        mobileMenuIcon.addEventListener('mouseleave', function() {
            hideTimeout = setTimeout(() => {
                const cartDropdown = document.querySelector('.cart-dropdown');
                cartDropdown.style.visibility = 'hidden';
                cartDropdown.style.opacity = '0';
            }, 500);
        });
    }
}