let theEnd = 0,
    navbar = document.getElementById('navbar_menu');

window.addEventListener('scroll', function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > theEnd) {
        navbar.style.top = '-100px';
    }
    else {
        navbar.style.top = '40px';
    }
    theEnd = scrollTop;
})