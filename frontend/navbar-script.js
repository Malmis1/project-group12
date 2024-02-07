document.addEventListener('DOMContentLoaded', function() {
  var navbarContainer = document.getElementById('navbar-container');
  if (!navbarContainer) {
    console.error('Navbar container not found.');
    return;
  }

  var request = new XMLHttpRequest();
  request.open('GET', 'navbar.html', true);

  request.onload = function() {
    if (this.status >= 200 && this.status < 400) {
      navbarContainer.innerHTML = this.response;
    } else {
      console.error('Server reached, but it returned an error.');
    }
  };

  request.onerror = function() {
    console.error('There was a connection error of some sort.');
  };

  request.send();
});
