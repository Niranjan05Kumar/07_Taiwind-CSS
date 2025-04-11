// our doctores
const swiper = new Swiper('.swiper-container', {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,

    //  pagination
    // pagination: {
    //     el: '.swiper-pagination',
    // },

    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        769: {
            slidesPerView: 3
        },
    }

  });