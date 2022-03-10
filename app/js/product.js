$(function (){

    const swiper = new Swiper('.product-slider', {
        slidesPerView: 1.5,
        navigation: {
            nextEl: ".swiper-button-next",
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'bullets',
        },
        loop: true,
        breakpoints: {
            570: {
                slidesPerView: 1,
                loop: false,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<span class="' + className + '">' + (index + 1) + "</span>";
                    },
                },
            },
        },
    });

});
