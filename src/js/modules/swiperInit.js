import Swiper from 'swiper';

import { Autoplay, Navigation, Pagination, Thumbs, EffectCube } from 'swiper';

Swiper.use([Navigation, Pagination, Autoplay, Thumbs, EffectCube]);

export const swiperInit = () => {
    //Счетчик у слайдера

    function updateCounter(swiper, counterElem) {
        let activeSlide = swiper.realIndex + 1;
        let sumSlides = swiper.slides.filter(slide => !slide.classList.contains('swiper-slide-duplicate')).length;
        let resultCounter = `${activeSlide}/${sumSlides}`;
        counterElem.textContent = resultCounter;
    }

    function initSwiper1(counterSelector, swiperSelector) {
        let counterElem = document.querySelector(counterSelector);

        const swiper = new Swiper(swiperSelector, {
            loop: true,
            direction: 'horizontal',
            slidesPerView: 1,
            spaceBetween: 0,
            navigation: {
                nextEl: '.swiper-button-next.rent-content-right',
                prevEl: '.swiper-button-prev.rent-content-left',
            },

            // Добавляем обработчик события slideChange
            on: {
                slideChange: function () {
                    updateCounter(this, counterElem);
                },
                init: function () {
                    updateCounter(this, counterElem);
                }
            },
        });
    }

    function initSwiper2(counterSelector, swiperSelector) {
        let counterElem = document.querySelector(counterSelector);
        const seventhScreenSwiper = new Swiper(swiperSelector, {

            loop: true,
            slidesPerView: 1,
            spaceBetween: 10,
            speed: 600,
            effect: 'slide',
            navigation: {
                nextEl: '.swiper-button-next.rent-content-right.seventh-screen__right',
                prevEl: '.swiper-button-prev.rent-content-left.seventh-screen__left'
            },
            on: {
                slideChange: function () {
                    updateCounter(this, counterElem);
                },
                init: function () {
                    updateCounter(this, counterElem);
                }
            },
            breakpoints: {
                1000: {
                    slidesPerView: 3,

                }
            }
            // autoplay: {
            //     delay: 5000,
            // },
        });
    }

    function initSwiper3(counterSelector, swiperSelector) {
        let counterElem = document.querySelector(counterSelector);
        const dopScreen = new Swiper(swiperSelector, {
            modules: [Pagination],
            loop: true,
            slidesPerView: 1,
            spaceBetween: 30,
            speed: 450,
            effect: 'slide',
            // autoplay: true,
            breakpoints: {
                1000: {
                    slidesPerView: 2,

                }
            },
            // on: {
            //     slideChange: function () {
            //         updateCounter(this, counterElem);
            //     },
            //     init: function () {
            //         updateCounter(this, counterElem);
            //     }
            // },
            // navigation: {
            //     nextEl: '.swiper-button-next.rent-content-right.dop-screen__right',
            //     prevEl: '.swiper-button-prev.rent-content-left.dop-screen__left'
            // },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                // renderBullet: function (index, className) {
                //     // Замените 'active.svg' и 'inactive.svg' на пути к вашим SVG-файлам
                //     let bulletActive = '<img src="../img/ico/bullet-inactive.svg">';
                //     let bulletInactive = '<img src="../img/ico/bullet-inactive.svg">';
                //     return `<span class="${className}">${this.realIndex === index ? bulletActive : bulletInactive}</span>`;
                // },
            },


        });
    }

    initSwiper1('.counterMain', '.swiper-container.rent-content-swiper')
    initSwiper2('.seventh-screen__counter', '.seventh-screen__swiper-container')
    initSwiper3('.dop-screen__counter', '.dop-screen__swiper-container.swiper-container');
}