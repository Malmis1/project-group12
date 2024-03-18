function adjustSidebar() {
    var sidebar = document.querySelector('.sidebar');

    // Return if the sidebar doesn't exist
    if (!sidebar) return;

    if (window.innerWidth >= 1075) {
        document.addEventListener('scroll', handleScroll);
        handleScroll();
    } else {
        document.removeEventListener('scroll', handleScroll);
        // Reset sidebar style for smaller screens
        sidebar.style.position = '';
        sidebar.style.top = '';
    }
}

function handleScroll() {
    var sidebar = document.querySelector('.sidebar');
    var footer = document.querySelector('.footer');

    if (!sidebar || !footer) return;

    var footerOffsetTop = footer.offsetTop;
    var sidebarHeight = sidebar.offsetHeight;
    var stopFixed = footerOffsetTop - sidebarHeight - 400;

    var initialTopOffset = 150;
    var scrollTop = window.scrollY + initialTopOffset;

    if (scrollTop > stopFixed) {
        sidebar.style.position = 'absolute';
        sidebar.style.top = stopFixed + 'px';
    } else {
        sidebar.style.position = 'fixed';
        sidebar.style.top = initialTopOffset + 'px';
    }
}

// For showing more course providers
document.addEventListener('DOMContentLoaded', function() {
    // Initially check the number of providers and show/hide the button accordingly
    updateShowMoreButtonVisibility();

    document.getElementById("showMoreButton").addEventListener("click", function() {
        const hiddenProviders = document.querySelectorAll('.provider:nth-of-type(n+4)');
        let showMore = true;

        // Toggles the display property of hidden providers
        hiddenProviders.forEach(function(provider) {
            if (provider.style.display === 'none' || provider.style.display === '') {
                provider.style.display = 'block';
                showMore = false;
            } else {
                provider.style.display = 'none';
                showMore = true;
            }
        });

        // Toggles the button icon direction
        const icon = this.querySelector('i');
        if (showMore) {
            icon.className = 'fa fa-chevron-down';
        } else {
            icon.className = 'fa fa-chevron-up';
        }

        updateShowMoreButtonVisibility();
    });

    function updateShowMoreButtonVisibility() {
        const providers = document.querySelectorAll('.provider');
        const showMoreButton = document.getElementById("showMoreButton");

        // Hide the button if there are 3 or fewer providers
        if (providers.length <= 3) {
            showMoreButton.style.display = 'none';
        } else {
            showMoreButton.style.display = 'block';
        }
    }
});


adjustSidebar();
// Listen for window resize events
window.addEventListener('resize', adjustSidebar);
