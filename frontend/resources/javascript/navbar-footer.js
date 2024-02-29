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
    const popupMenu = document.getElementById('popupMenu');
    if (popupMenu.style.display === 'block') {
        popupMenu.style.display = 'none';
    } else {
        popupMenu.style.display = 'block';
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