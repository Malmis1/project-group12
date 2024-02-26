document.addEventListener('scroll', function() {
    var sidebar = document.querySelector('.sidebar');

    if (sidebar.style.marginTop === "") {
        sidebar.style.marginTop = '150px';
    }

    var footer = document.querySelector('.footer');
    var footerRect = footer.getBoundingClientRect();
    var sidebarBottom = sidebar.getBoundingClientRect().bottom;
    var footerOffsetTop = footer.offsetTop;
    var stopFixed = footerOffsetTop - sidebar.offsetHeight - 170;

    if (window.scrollY > stopFixed) {
        sidebar.style.position = 'absolute';
        sidebar.style.top = stopFixed + 'px';
    } else {
        sidebar.style.position = 'fixed';
        sidebar.style.top = '0px';
    }
});
