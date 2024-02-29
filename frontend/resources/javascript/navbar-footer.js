// For loading the navbar
document.addEventListener("DOMContentLoaded", function() {
  fetch('/frontend/resources/html/navbar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbar').innerHTML = data;
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