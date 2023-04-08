let myBlockSlider = new Swiper('.banner-content',{
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        // dynamicBullets: true,
        // dynamicMainBullets: 1,
    },
    spaceBetween: 16,
    // controller: {
    //     control: myBgSlider
    // },
    loop: true,
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    //     pauseOnMouseEnter: true,
    // },
});

let myBgSlider = new Swiper('.swiper-bg',{
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    loop: true,
});

myBgSlider.controller.control = myBlockSlider
myBlockSlider.controller.control = myBgSlider

new Swiper('.scroll', {
    direction: 'vertical',
    mousewheel: {
    sensitivity: 0.4,
    },
    speed: 600,
    // sliderPerGroup: 1,
    freeMode: true,
    slidesPerView: 3.65,
    spaceBetween: 16,
});