document.addEventListener('scroll', function() {
    var footer = document.querySelector('.footer');
    var sidebar = document.querySelector('.sidebar');
    var footerRect = footer.getBoundingClientRect();
    var sidebarBottom = sidebar.getBoundingClientRect().bottom;

    var footerOffsetTop = footer.offsetTop;

    var stopFixed = footerOffsetTop - sidebar.offsetHeight - 40; // 20 is the top-padding

    if (window.scrollY > stopFixed) {
        sidebar.style.position = 'absolute';
        sidebar.style.top = stopFixed + 'px';
    } else {
        sidebar.style.position = 'fixed';
        sidebar.style.top = '150px';
    }
});
