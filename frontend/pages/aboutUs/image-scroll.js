document.addEventListener('scroll', function() {
    var footer = document.querySelector('.footer');
    var aboutUsImage = document.querySelector('.aboutUsImage');
    var footerRect = footer.getBoundingClientRect();
    var aboutUsImageBottom = aboutUsImage.getBoundingClientRect().bottom;

    var footerOffsetTop = footer.offsetTop;

    var stopFixed = footerOffsetTop - aboutUsImage.offsetHeight - 20; // 20 is the top-padding

    if (window.scrollY > stopFixed) {
        aboutUsImage.style.position = 'absolute';
        aboutUsImage.style.top = stopFixed + 'px';
    } else {
        aboutUsImage.style.position = 'fixed';
        aboutUsImage.style.top = '20px';
    }
});
