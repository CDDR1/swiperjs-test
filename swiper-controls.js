const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,   
    slidesPerView: 3,
    spaceBetween: 30,

    // Autoplay 
    autoplay: {
        delay: 4000,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});