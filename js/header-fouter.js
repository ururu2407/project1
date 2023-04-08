(function () {

    var topNavigation = document.querySelector('.top-navigation ul li a');
    var navigationLinks = document.querySelectorAll('.top-navigation ul li a');
    var activeLink = document.querySelector('a.active');
    var slide = document.querySelector('.active-link');

    navigationLinks.forEach(link => {
        link.addEventListener('click', slideToLink);

    })

    function slideToLink(e) {
        removeActiveClass();
        setActiveSlide(e.target);

        e.target.classList.add('active');
    }

    function removeActiveClass() {
        activeLink = document.querySelector('a.active');
        activeLink.classList.remove('active');
    }

    function setActiveSlide(target) {
        var left = getLeftValue(target);
        slide.style.left = `${left}px`;
    }

    function getLeftValue(targetLink) {
        var targetLeft = targetLink.getBoundingClientRect().left;
        var topNavigationLeft = topNavigation.getBoundingClientRect().left;
        return targetLeft - topNavigationLeft + 62;
    }

    setActiveSlide(activeLink);

    // Новый код
    var sliding = document.querySelector('.active-link');
    var menuItems = document.querySelectorAll('.top-navigation ul li a');

    function setCurrentItemWidth() {
        var currentItem = document.querySelector('.top-navigation ul li a.active');
        sliding.style.width = currentItem.offsetWidth + 6 + 'px';
    }

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            document.querySelector('a.active').classList.remove('active');
            item.classList.add('active');
            setCurrentItemWidth();
        });
    });

    sliding.style.width = menuItems[0].offsetWidth + 'px';
})();
$('.header__burger, .overlay').click(function () {
    $('.header__burger').toggleClass('clicked');
    $('.overlay').toggleClass('show');
    $('.mobile__menu').toggleClass('show');
    $('body').toggleClass('overflow');
});
$('.search__mobile, .close__mobile, .overlay_search').click(function () {
    $('.search__mobile, .close__mobile').toggleClass('clicked');
    $('.overlay__search').toggleClass('show');
    $('.search__menu').toggleClass('show');
    $('body').toggleClass('overflow');
});
function focusSearch() {
    var input = document.getElementById("searchInput");
    input.focus();
}
function blurSearch() {
    var input = document.getElementById("searchInput");
    input.blur();
}

const image = document.querySelector('.BG .image img');
const width = image.clientWidth;
const height = image / 2.7;
image.style.height = `${height}px`;
if (width > 991) {

}
const input_email = document.querySelector('.input__email');
input_email.addEventListener('focus', () => {
    document.querySelector('#svg path').classList.add('focused');
});
input_email.addEventListener('blur', () => {
    document.querySelector('#svg path').classList.remove('focused');
});