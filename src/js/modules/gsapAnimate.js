import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { ScrollToPlugin } from "gsap/ScrollToPlugin.js";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
import { calculateOffscreenPositionY, calculateOffscreenPositionX } from "./calculations.js";
import { debounce } from "./debounce.js";

const tl = gsap.timeline();
const t2 = gsap.timeline();
const t3 = gsap.timeline();
const t4 = gsap.timeline();

const gsapAnimate = () => {

    // window.onbeforeunload = function () {
    //     window.scrollTo(0, 0);
    // }

    // let isAnimating = false;
    // let currentStep = 1;
    // let currentScreen = 1;

    // // Элементы с первого экрана

    // const screens = document.querySelectorAll('.screen');
    // const firstScreenElements = screens[0].querySelectorAll('.animate-element');
    // const ramaElements = screens[0].querySelector('.rama').querySelectorAll('.animate-element');

    // // Элементы со второго экрана

    // const secondScreenElements = screens[1].querySelectorAll('.animate-element');
    // secondScreenElements[0].style.visibility = 'hidden';

    // // Элементы с третьего экрана

    // const thirdScreenElements = screens[2].querySelectorAll('.animate-element');

    // // Элементы с пятого экрана

    // const fifthScreenElements = screens[4].querySelector('.animate-element');
    // const fifthScreenText = screens[4].querySelector('.fifth-screen__text');
    // let textHeightStep = fifthScreenText.offsetHeight / 4;

    // // Элементы с шестого экрана

    // const sixthScreenElements = screens[5].querySelectorAll('.animate-element');
    // const forSixthScreenAnimations = sixthScreenElements[1].querySelectorAll('.six-screen-anim');

    // // Элементы с седьмого экрана

    // const seventhScreenElements = screens[6].querySelector('.animate-element')




    // function blockScroll() {
    //     document.body.style.overflow = 'hidden';
    // }

    // function allowScroll() {
    //     document.body.style.overflow = '';
    // }



    // // blockScroll();

    // //ПРОВЕРКА. ИДЕТ ЛИ АНИМАЦИЯ В ДАННЫЙ МОМЕНТ

    // function checkEndAnimation(animation) {
    //     if (!isAnimating) {
    //         isAnimating = true;
    //         console.log(isAnimating)
    //         animation();
    //     } else {
    //         console.log('Идет анимация, жди!')
    //         console.log(isAnimating)
    //     }
    // }


    // function wheelHandler() {
    //     if (!isAnimating) {

    //         switch (currentScreen) {
    //             case 1:
    //                 switch (currentStep) {
    //                     case 1:
    //                         animationStart(animations.s1e1);
    //                     case 2:
    //                         animationStart(animations.s1e2);
    //                     case 3:
    //                         animationStart(animations.s1e3);
    //                         break;
    //                 }
    //             case 2:
    //                 switch (currentStep) {
    //                     case 1:
    //                         console.log('b nen')
    //                         animationStart(animations.s2);
    //                     case 2:
    //                         animationStart(animations.s2e2);
    //                     case 3:
    //                         animationStart(animations.s2e3);
    //                     case 4:
    //                         animationStart(animations.s2e4);
    //                 }
    //             case 3:
    //                 switch (currentStep) {
    //                     case 1:
    //                         animationStart(animations.s3);
    //                     case 2:
    //                         animationStart(animations.s3e1);
    //                     case 3:
    //                         animationStart(animations.s3e2);
    //                     case 4:
    //                         animationStart(animations.s3e3);
    //                     case 5:
    //                         animationStart(animations.s3e4);
    //                 }
    //             case 4:
    //                 switch (currentStep) {
    //                     case 1:
    //                         animationStart(animations.s4);
    //                 }
    //             case 5:
    //                 switch (currentStep) {
    //                     case 1:
    //                         animationStart(animations.s5);
    //                     case 2:
    //                         animationStart(animations.s5e1);
    //                 }
    //             case 6:
    //                 switch (currentStep) {
    //                     case 1:
    //                         animationStart(animations.s6);
    //                 }
    //             case 7:
    //                 switch (currentStep) {
    //                     case 1:
    //                         animationStart(animations.s7);
    //                 }
    //             case 8:
    //                 animationStart(animations.s8);
    //                 break;
    //         }
    //     }

    // }

    // document.addEventListener('wheel', wheelHandler);

    // function animationStart(animation) {
    //     checkEndAnimation(animation);
    // }

    // //АНИМАЦИИ

    // let animations = {
    //     s1e1: debounce(() => {
    //         console.log(`Анимация ${currentStep} началась!`);
    //         const switherNode = screens[0].querySelector('.switcher__toggler');
    //         switherNode.classList.add('switcher__toggler--scroll');
    //         firstScreenElements[0].classList.add('hide-element-bottom');

    //         gsap.fromTo(firstScreenElements[0], { y: 0 }, {
    //             duration: 1.5,
    //             onComplete: function () {
    //                 isAnimating = false;
    //                 console.log(isAnimating);
    //                 console.log("Анимация закончилась!");
    //                 currentStep++;
    //                 console.log(`Готово ко ${currentStep} анимации!`)



    //             }
    //         });
    //     }, 250),


    //     s1e2: debounce(() => {
    //         console.log('scroll');
    //         firstScreenElements[1].classList.remove('hide-element-bottom');
    //         document.querySelector('.rama').classList.remove('rama--circle');
    //         ramaElements[0].classList.add('opacity-off');
    //         ramaElements[1].classList.add('opacity-on');


    //         gsap.fromTo(firstScreenElements[1], { y: 0 }, {
    //             duration: 1.5,
    //             onComplete: function () {
    //                 isAnimating = false;
    //                 console.log(isAnimating);
    //                 console.log("Анимация закончилась!");
    //                 currentStep++;
    //                 console.log(`Готово ко ${currentStep} анимации!`);
    //             }
    //         });
    //     }, 250),


    //     s1e3: debounce(() => {
    //         console.log('scroll');
    //         ramaElements[1].classList.remove('opacity-on');
    //         ramaElements[2].classList.add('opacity-on');


    //         gsap.fromTo(firstScreenElements[1], { y: 0 }, {
    //             y: -calculateOffscreenPositionY('top', firstScreenElements[1]) - 36,
    //             duration: .5,
    //             onComplete: function () {

    //             }
    //         });

    //         firstScreenElements[2].classList.remove('hide-element-bottom');

    //         gsap.fromTo(firstScreenElements[2], { y: 0 }, {
    //             duration: 1.5,
    //             onComplete: function () {
    //                 isAnimating = false;
    //                 console.log(isAnimating);
    //                 console.log("Анимация закончилась!");
    //                 currentStep = 1;
    //                 currentScreen++;
    //                 console.log(`Готово ко ${currentStep} анимации!`)
    //             }
    //         });
    //     }, 250),

    //     s2: debounce(() => {
    //         console.log('scroll');

    //         gsap.fromTo(screens[1], { y: 0 }, {
    //             yPercent: -100,
    //             duration: 1.5,
    //             onComplete: function () {


    //             }
    //         });

    //         gsap.fromTo(secondScreenElements[0], { autoAlpha: 0 }, {
    //             duration: 1,
    //             delay: 2,
    //             autoAlpha: 1,
    //             ease: 'power0.none',
    //             onComplete: function () {

    //             }
    //         });

    //         gsap.fromTo(secondScreenElements[1], { autoAlpha: 0 }, {
    //             autoAlpha: 1,
    //             delay: 2.3,
    //             duration: 1,
    //             ease: 'power0.none',
    //             onComplete: function () {

    //             }
    //         });

    //         gsap.fromTo(secondScreenElements[2], { autoAlpha: 0 }, {
    //             autoAlpha: 1,
    //             delay: 3,
    //             duration: 1,
    //             ease: 'power0.none',
    //             onComplete: function () {

    //             }
    //         });

    //         gsap.fromTo(secondScreenElements[3], { autoAlpha: 0 }, {
    //             autoAlpha: 1,
    //             delay: 3.5,
    //             duration: 1,
    //             ease: 'power0.none',
    //             onComplete: function () {
    //                 isAnimating = false;
    //                 console.log(isAnimating);
    //                 console.log("Анимация закончилась!");
    //                 currentStep = 1;
    //                 currentScreen++;
    //                 console.log(`Готово ко ${currentStep} анимации!`)
    //             }
    //         });
    //     }, 250),
    //     s3: debounce(() => {
    //         console.log('Начали');

    //         gsap.to(thirdScreenElements[0], {
    //             duration: 0,
    //             autoAlpha: 0,
    //             y: -200,
    //             onComplete: function () {

    //             }
    //         });

    //         gsap.fromTo(screens[2], {
    //             yPercent: -200,
    //             autoAlpha: 0,
    //         }, {
    //             duration: 1,
    //             autoAlpha: 1,
    //             ease: 'power0.none',
    //             onComplete: function () {
    //                 console.log(isAnimating);
    //                 console.log("Анимация закончилась!");
    //                 console.log('Закончили');
    //                 isAnimating = false;
    //                 currentStep++;

    //             }
    //         });

    //     }, 250),
    //     s3e1: debounce(() => {

    //         gsap.to(screens[2], {
    //             duration: 0,
    //             // backgroundColor: "rgba(0, 0, 0, 0.5)",
    //             onComplete: function () {
    //                 screens[2].classList.add('third-screen--filter');
    //             }
    //         });
    //         gsap.to(thirdScreenElements[0], {
    //             delay: .5,
    //             duration: .5,
    //             autoAlpha: 1,
    //             y: 0,
    //             onComplete: function () {
    //                 isAnimating = false;
    //                 console.log(isAnimating);
    //                 currentStep++;
    //             }
    //         });

    //     }, 250),
    //     s3e2: debounce(() => {

    //         // Создаем анимацию для плавного исчезновения текста
    //         tl.to([thirdScreenElements[1], thirdScreenElements[2]], { duration: 0.5, opacity: 0 });

    //         // Заменяем текст в элементе
    //         tl.add(() => {
    //             thirdScreenElements[1].textContent = "Применяйте OLED-дисплей в максимально широком спектре задач.";
    //             thirdScreenElements[2].textContent = "За дисплеем можно поместить любой объект и раскрыть его с совершенно новой стороны: рассказать на прозрачном экране историю его создания, поместить инструкцию по применению, дополнить объект фото/видео его внутреннего устройства или показать, как объект вписывается в разные сценарии жизни пользователей. Нет никаких пределов!"
    //         });

    //         // // Создаем анимацию для плавного появления нового текста
    //         tl.to([thirdScreenElements[1], thirdScreenElements[2]], {
    //             duration: 1,
    //             opacity: 1,
    //             onComplete: function () {
    //                 isAnimating = false;
    //                 console.log(isAnimating);
    //                 currentStep++;
    //             }

    //         });
    //     }, 250),
    //     s3e3: debounce(() => {

    //         // Создаем анимацию для плавного исчезновения текста
    //         tl.to([thirdScreenElements[1], thirdScreenElements[2]], { duration: 0.5, opacity: 0 });

    //         // Заменяем текст в элементе
    //         tl.add(() => {
    //             thirdScreenElements[1].textContent = "Интегрируйте любые рекламные инструменты на OLED-дисплей, чтобы рассмотреть их новые удивительные ракурсы";
    //             thirdScreenElements[2].textContent = "В магазине, автосалоне, ресторане, на ресепшен, в качестве витрины и презентационной стойки. Транслируйте любой контент (фото, видео, текст, графика, логотипы, голограммы, видео-мосты) в новом формате и собирайте восторженные отзывы, налаживайте коммуникацию с аудиторией, взаимодействуйте качественно и на перспективу."
    //         });

    //         // Создаем анимацию для плавного появления нового текста
    //         tl.to([thirdScreenElements[1], thirdScreenElements[2]], {
    //             duration: 1,
    //             opacity: 1,
    //             onComplete: function () {
    //                 isAnimating = false;
    //                 console.log(isAnimating);
    //                 currentStep++;
    //             }

    //         });
    //     }, 250),
    //     s3e4: debounce(() => {
    //         console.log(thirdScreenElements)
    //         // Создаем анимацию для плавного появления нового текста
    //         tl.to(thirdScreenElements[0], {
    //             duration: .5,
    //             opacity: 0,
    //             onComplete: function () {
    //                 screens[2].classList.remove('third-screen--filter');

    //             }
    //         });
    //         t2.fromTo(screens[3], { y: 0 }, {
    //             yPercent: -200,
    //             duration: 0,
    //             onComplete: function () {
    //                 isAnimating = false;
    //                 console.log(isAnimating);
    //                 currentStep = 1;
    //                 currentScreen = 4;
    //             }
    //         });
    //     }, 250),
    //     s4: debounce(() => {
    //         console.log('scroll');

    //         t3.to(screens[2], {
    //             duration: 2,
    //             yPercent: -300,
    //         });

    //         t2.fromTo(screens[3], { y: 0 }, {
    //             yPercent: -300,
    //             duration: 1,

    //         });

    //         gsap.fromTo(screens[4], { y: 0 }, {
    //             yPercent: -300,
    //             duration: 1,
    //             onComplete: function () {
    //                 isAnimating = false;
    //                 console.log(isAnimating);
    //                 currentStep = 1;
    //                 currentScreen++;
    //             }
    //         })
    //         // СДЕЛАТЬ БЛЮР РАМЫ
    //     }, 250),
    //     s5: debounce(() => {
    //         console.log('scroll');

    //         gsap.fromTo(screens[4], { y: 0 }, {
    //             yPercent: -400,
    //             duration: 1,
    //         })
    //         t4.to(fifthScreenElements, {
    //             ease: 'power0.none',
    //             delay: 1,
    //             duration: .1,
    //             css: {
    //                 yPercent: -30
    //             }
    //         })
    //         t4.to(fifthScreenElements, {
    //             ease: 'power0.none',
    //             delay: .5,
    //             duration: .1,
    //             css: {
    //                 yPercent: -70
    //             }
    //         })
    //         t4.to(fifthScreenElements, {
    //             ease: 'power0.none',
    //             delay: .5,
    //             duration: .1,
    //             css: {
    //                 yPercent: -100
    //             },
    //             onComplete: function () {
    //                 isAnimating = false;
    //                 currentStep++;

    //             }
    //         })
    //     }, 250),
    //     s5e1: debounce(() => {
    //         console.log('scroll');
    //         t4.to(fifthScreenElements, {
    //             ease: 'power0.none',
    //             // delay: .5,
    //             duration: .1,
    //             css: {
    //                 yPercent: -130
    //             }
    //         })
    //         t4.to(fifthScreenElements, {
    //             ease: 'power0.none',
    //             delay: .5,
    //             duration: .1,
    //             css: {
    //                 yPercent: -170
    //             }
    //         })
    //         t4.to(fifthScreenElements, {
    //             ease: 'power0.none',
    //             delay: .5,
    //             duration: .1,
    //             css: {
    //                 yPercent: -200
    //             },
    //             onComplete: function () {
    //                 gsap.to(screens[5], {
    //                     yPercent: -400,
    //                     duration: 0
    //                 });
    //                 isAnimating = false;
    //                 currentScreen++;
    //                 currentStep = 1;
    //             }
    //         })

    //     }, 250),

    //     s6: debounce(() => {
    //         console.log('scroll');
    //         const t5 = gsap.timeline();
    //         t4.to(screens[4], {
    //             yPercent: -500,
    //             duration: .5,
    //         });
    //         gsap.to(screens[5], {
    //             yPercent: -500,
    //             duration: .5,
    //         });
    //         gsap.from(sixthScreenElements[0], {
    //             delay: .5,
    //             scale: 0, // Начинаем с масштаба 0 (элемент полностью скрыт)
    //             duration: .2, // Продолжительность анимации в секундах
    //             ease: 'back.out(1.7)' // Эффект анимации (можно выбрать другой)
    //         });
    //         t5.from(forSixthScreenAnimations, {
    //             scale: 0, // Начинаем с масштаба 0 (элементы полностью скрыты)
    //             duration: 0.5, // Продолжительность анимации в секундах
    //             stagger: 0.1, // Задержка между анимациями каждого элемента
    //             ease: 'back.out(1.7)', // Эффект анимации (можно выбрать другой)
    //             onComplete: function () {
    //                 gsap.to(screens[6], {
    //                     yPercent: -500,
    //                     duration: 0
    //                 });
    //                 isAnimating = false;
    //                 currentScreen++;
    //                 currentStep = 1;
    //             }
    //         });
    //     }, 250),
    //     s7: debounce(() => {
    //         console.log('scroll');
    //         gsap.to(screens[6], {
    //             yPercent: -600,
    //             duration: .5,
    //             onComplete: function () {
    //                 // firstScreenElements[1].style.display = 'none';
    //                 // firstScreenElements[2].style.display = 'none';
    //                 // fifthScreenElements.style.top = '0';
    //                 // fifthScreenElements.style.transform = 'translate(0, 0)';
    //                 // gsap.set(screens, { clearProps: 'all' });
    //                 // gsap.globalTimeline.clear();
    //                 // allowScroll();

    //                 firstScreenElements[1].style.display = 'none';
    //                 firstScreenElements[2].style.display = 'none';
    //                 firstScreenElements[0].classList.remove('hide-element-bottom');
    //                 fifthScreenElements.style.top = '0';
    //                 fifthScreenElements.style.transform = 'translate(0, 0)';
    //                 isAnimating = false;
    //                 currentScreen++;
    //             }
    //         });
    //     }, 250),
    //     s8: debounce(() => {


    //         gsap.set(screens, { clearProps: 'all' });
    //         gsap.globalTimeline.clear();
    //         allowScroll();

    //     }, 250),

    // }


    // Элементы с первого экрана

    const screens = document.querySelectorAll('.screen');
    const firstScreenElements = screens[0].querySelectorAll('.animate-element');
    const ramaElements = screens[0].querySelector('.rama').querySelectorAll('.animate-element');

    // Элементы со второго экрана

    const secondScreenElements = screens[1].querySelectorAll('.animate-element');
    secondScreenElements[0].style.visibility = 'hidden';

    // Элементы с третьего экрана

    const thirdScreenElements = screens[2].querySelectorAll('.animate-element');

    // Элементы с пятого экрана

    const fifthScreenElements = screens[4].querySelector('.animate-element');
    const fifthScreenText = screens[4].querySelector('.fifth-screen__text');
    let textHeightStep = fifthScreenText.offsetHeight / 4;

    // Элементы с шестого экрана

    const sixthScreenElements = screens[5].querySelectorAll('.animate-element');
    const forSixthScreenAnimations = sixthScreenElements[1].querySelectorAll('.six-screen-anim');

    // Элементы с седьмого экрана

    const seventhScreenElements = screens[6].querySelector('.animate-element');


    const tl = gsap.timeline();
    const t2 = gsap.timeline();
    const t3 = gsap.timeline();
    const t4 = gsap.timeline();

    tl.to('.first-screen__first-title', 
    {

        scrollTrigger: {
            trigger: screens[0],
            start: "top top",
            end: "+=500",
            pin: true,
            scrub: true,
        },
        y: -500,
        opacity: 0
    });


}

export default gsapAnimate;
