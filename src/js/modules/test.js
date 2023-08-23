import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { ScrollToPlugin } from "gsap/ScrollToPlugin.js";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


const test = () => {
    // Подключение ScrollTrigger
    // Подключение ScrollTrigger
    // Подключение ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    const blueContainer = document.querySelector('.blue');
    const texts = blueContainer.querySelectorAll('.text');

    // Фиксация первого синего контейнера
    gsap.to(blueContainer, {
        scrollTrigger: {
            trigger: blueContainer,
            start: 'top top', // Фиксируем контейнер, когда его верх достигает верха экрана
            end: 'bottom top', // Отменяем фиксацию, когда его низ достигает верха экрана
            pin: true, // Фиксируем контейнер на месте
            pinSpacing: false // Отключаем добавление пространства для фиксированного контейнера
        }
    });

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: blueContainer,
            start: 'top center', // Старт анимации, когда верх контейнера достигает центра экрана
            end: 'bottom center', // Конец анимации, когда низ контейнера достигает центра экрана
            scrub: true // Плавное изменение анимации при скролле
        }
    });

    texts.forEach((text, index) => {
        const offsetY = -index * 100;

        tl.to(text, {
            y: offsetY,
            opacity: 0,
            duration: 1,
            onStart: () => {
                text.style.zIndex = index * -1; // Поднимаем текcт наверх
            }
        });

        tl.fromTo(text, { opacity: 0, y: 100 }, {
            opacity: 1,
            y: 0,
            duration: 1,
            onStart: () => {
                text.style.zIndex = (index + 1) * -1; // Опускаем новый текст
            }
        });

        tl.to(text, {
            y: offsetY,
            opacity: 0,
            duration: 1,
            onStart: () => {
                text.style.zIndex = (index + 2) * -1; // Поднимаем новый текст наверх
            }
        });
    });




}

export default test

