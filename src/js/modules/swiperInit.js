import Swiper from 'swiper';
import { Navigation, Pagination, Thumbs } from 'swiper';

Swiper.use([Navigation, Pagination, Thumbs]);

export const swiperInit = () => {
//Счетчик у слайдера

    function counter (counterSelector, swiperSelector) {
        let counterElem = document.querySelector(counterSelector);
        let swiperElem = document.querySelector(swiperSelector);
        let slides = swiperElem.querySelectorAll('.swiper-slide');
        let activeSlide = 1;
        let sumSlides = slides.length;
    
        slides.forEach((slide, index) => {
            if (slide.classList.contains('swiper-slide-active')) {
                activeSlide = index + 1;
            }
        });
    
        let resultCounter = `${activeSlide}/${sumSlides}`
    
        counterElem.textContent = resultCounter;
    }


    const rentContentSwiper = new Swiper('.swiper-container.rent-content-swiper', {
        
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
            nextEl: '.swiper-button-next.rent-content-right',
            prevEl: '.swiper-button-prev.rent-content-left',
        },
        on: {
            transitionEnd: function () {
              counter('.counterMain', '#rent-content-swiper');
            },
          },
    });
}
