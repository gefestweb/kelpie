import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { ScrollToPlugin } from "gsap/ScrollToPlugin.js";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
import { calculateOffscreenPositionY, calculateOffscreenPositionX } from "./calculations.js";
import { debounce } from "./debounce.js";
import header from "./header.js";
// import screenScroll from "./screenScroll.js";

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




    function blockScroll() {
        document.body.style.overflow = 'hidden';
    }

    function allowScroll() {
        document.body.style.overflow = '';
    }



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
    //      7: debounce(() => {
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
    const switcherNode = screens[0].querySelector('.switcher__toggler');
    const ramaElements = screens[0].querySelector('.rama').querySelectorAll('.animate-element');
    const firstScreenText = screens[0].querySelectorAll('.first-screen__first-title');

    // Элементы с первого доп экрана (второго)

    const dopScreenItems = document.querySelectorAll('.dop-screen__content-wrapper');


    // Элементы со второго экрана

    const secondScreenElements = screens[2].querySelectorAll('.animate-element');
    // secondScreenElements[0].style.visibility = 'hidden';

    // Элементы с третьего экрана

    const thirdScreenTextBlocks = screens[3].querySelectorAll('.third-screen__text-block');
    const thirdScreenText1 = thirdScreenTextBlocks[0].querySelectorAll('.animate-element');
    // const thirdScreenText2 = thirdScreenTextBlocks[1].querySelectorAll('.animate-element');
    // const thirdScreenText3 = thirdScreenTextBlocks[2].querySelectorAll('.animate-element');

    // Элементы с четвертого экрана

    const fourRamaItems = screens[4].querySelectorAll('.four-screen__rama-item');
    const fourRamaBlur = screens[4].querySelector('.four-screen__rama-blur');

    // Элементы с пятото экрана

    // const fifthScreenElements = screens[5].querySelector('.animate-element');
    // const fifthScreenText = screens[5].querySelector('.fifth-screen__text');
    // let textHeightStep = fifthScreenText.offsetHeight / 4;

    // Элементы со второго доп экрана

    // const dopScreenItems2 = screens[6].querySelectorAll(('.animate-element'));

    // Элементы с шестого экрана

    const sixthScreenElements = screens[6].querySelectorAll('.animate-element');
    const forSixthScreenAnimations = sixthScreenElements[1].querySelectorAll('.six-screen-anim');


    // Элементы с седьмого экрана

    const seventhScreenElements = screens[7].querySelector('.animate-element');


    // Фиксируем первый экран на время выполнения анимаций.

    function fixScreen(screen, scroll) {
        const trigger = ScrollTrigger.create({
            trigger: screen,
            start: "top top",
            end: "+=" + scroll,
            pin: true,
            // scrub: true,
            // onLeaveBack: self => self.kill(),
            // pinSpacing: false,
            // once: true, // Делаем фиксацию один раз
        });
    }

    // fixScreen(screens[0], 3000);
    // fixScreen(screens[1], 1000); /*  - доп-скрин */
    // fixScreen(screens[2], 1400);
    fixScreen(screens[3], 600);
    // fixScreen(screens[4], 1200);
    // fixScreen(screens[5], 3000);
    // fixScreen(screens[6], 1200); /* - доп-скрин2 */
    // fixScreen(screens[7], 1200);



    let canIAnimate = false;
    // Анимация первого текста.

    // const firstScreenTline1 = gsap.timeline();
    // const firstScreenTline2 = gsap.timeline();
    // const firstScreenTline3 = gsap.timeline();
    // const testFunction = () => {
    //     let currentIndex = 0;
    //     let animationInProgress = false;
    //     let scrollStart = false;

    //     const firstScreen1Anim = function () {
    //         gsap.fromTo(
    //             firstScreenText[0], {
    //             // opacity: 1,
    //             // y: 0
    //         }, {
    //             // opacity: 0, y: -300, duration: .5,
    //             onStart: function () {
    //                 switcherNode.classList.toggle('switcher__toggler--scroll');
    //             },
    //             onComplete: function () {
    //                 animationInProgress = false;
    //             }
    //         }
    //         );
    //     };

    //     const firstScreen2Anim = function () {
    //         gsap.fromTo(
    //             firstScreenText[1], {
    //             opacity: 0,
    //             y: 300
    //         }, {
    //             opacity: 1, y: 0, duration: .5,
    //             onStart: function () {
    //                 screens[0].querySelector('.rama').classList.remove('rama--circle');
    //                 gsap.to(ramaElements[1], {
    //                     opacity: 1, duration: .5,
    //                 });
    //                 gsap.to(ramaElements[0], {
    //                     opacity: 0, duration: .5,
    //                 });
    //             },
    //             onComplete: function () {
    //                 animationInProgress = false;
    //             }
    //         }
    //         );
    //     };

    //     const firstScreen3Anim = function () {
    //         gsap.to(
    //             firstScreenText[1], {
    //             opacity: 0, y: -300, duration: .5,
    //             onComplete: function () {
    //                 animationInProgress = false;
    //             }
    //         }
    //         );
    //     };

    //     const firstScreen4Anim = function () {
    //         gsap.fromTo(
    //             firstScreenText[2], {
    //             opacity: 0,
    //             y: 300
    //         }, {
    //             opacity: 1, y: 0, duration: .5,
    //             onStart: function () {
    //                 gsap.to(ramaElements[1], {
    //                     opacity: 0, duration: .5,
    //                 });
    //                 gsap.to(ramaElements[2], {
    //                     opacity: 1, duration: .5,
    //                 });
    //             },
    //             onComplete: function () {
    //                 animationInProgress = false;
    //                 // screenScroll();
    //                 // window.removeEventListener('wheel', wheelHandler(animationsFirst));


    //             }
    //         }
    //         );
    //     };

    //     const animationsFirst = [firstScreen1Anim, firstScreen2Anim, firstScreen3Anim, firstScreen4Anim];

    //     const startNextAnimation = (arrayAnimFunc) => {
    //         if (scrollStart && !animationInProgress && currentIndex < arrayAnimFunc.length) {
    //             animationInProgress = true;
    //             arrayAnimFunc[currentIndex]();
    //             currentIndex++;
    //         }
    //     };

    //     // Добавляем обработчик события для скролла колесика мыши
    //     const wheelHandler = (e) => {
    //         if (!scrollStart) {
    //             scrollStart = true;
    //         }
    //         startNextAnimation(animationsFirst);
    //     };

    //     window.addEventListener('wheel', wheelHandler);

    // }

    // testFunction();


    gsap.fromTo(firstScreenText[0], {
        opacity: 1,
        y: 0,
        // transition: 1,

    }, {
        opacity: 0,
        y: -300,
        scrollTrigger: {
            trigger: screens[0],
            start: "top top",
            end: "+=300",
            // pin: true,
            scrub: true,
        },
        onStart: function () {
            switcherNode.classList.toggle('switcher__toggler--scroll');
        },
    })


    const dopScreen1Elements = screens[1].querySelectorAll('.animate-element');

    dopScreen1Elements.forEach((element, index) => {
        gsap.fromTo(element, {
            autoAlpha: 0,
            y: 50
        }, {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            delay: index * 0.2,
            scrollTrigger: {
                trigger: screens[1],
                start: 'top top+=400',
            },
            onComplete: () => {
                // screenScroll();
            }
        });
    });










    const tline2 = gsap.timeline({ paused: true }); // Создаем таймлайн, но не запускаем его сразу

    secondScreenElements.forEach((element, index) => {
        tline2.from(element, {
            scale: 0, // Начинаем с масштаба 0 (элементы полностью скрыты)
            duration: .2, // Продолжительность анимации в секундах
            stagger: 1, // Задержка между анимациями каждого элемента
            ease: 'back.out(1.7)', // Эффект анимации (можно выбрать другой),
            onComplete: () => {
                // screenScroll();
            }
        });
    });

    ScrollTrigger.create({
        trigger: screens[2],
        start: 'top top+=400',
        toggleActions: "play none none none",
        // end: '+=600',
        // scrub: true,
        animation: tline2,

    });


    // const tline3 = gsap.timeline();
    const thirdScreenButton = screens[3].querySelector('.third-screen__button');

    // window.addEventListener('wheel', () => {
    //     if (!scrollStart) {
    //         scrollStart = true;
    //         console.log(123);
    //     }
    // });

    gsap.fromTo(thirdScreenTextBlocks[0], {
        opacity: 0,
        y: 50,
        // duration: 1
    }, {
        opacity: 1,
        y: 0,
        // delay: 1,
        duration: .5,
        scrollTrigger: {
            trigger: screens[3],
            start: 'top top',
            end: '+=400',
            scrub: true
        }
    })

    gsap.to(screens[3], {
        // delay: 1,
        onStart: function () {
            screens[3].classList.add('third-screen--filter');
            document.querySelector('.third-screen__video').style.zIndex = "-1"
        },
        onReverseComplete: function () {
            screens[3].classList.remove('third-screen--filter');
        },
        // onComplete: function () {
        //     animationInProgress = false;

        // },
        scrollTrigger: {
            trigger: screens[3],
            start: 'top top',
            end: '+=500',
            scrub: true
        }
    });

    // ScrollTrigger.create({
    //     trigger: screens[3],
    //     start: 'top top',
    //     end: '+=2000',
    //     // pin: true,
    //     // scrub: true,
    //     onEnter: () => {
    //         // blockScroll();
    //         testFunction2();
    //     },
    //     onLeave: () => {
    //         // allowScroll();
    //     },
    //     once: true
    // });

    // const testFunction2 = () => {

    //     let currentIndex = 0;
    //     let animationInProgress = false;
    //     let scrollStart = false;


    //     const thirdScreen1Anim = function () {

    //     }

    //     const thirdScreen2Anim = function () {
    //         gsap.fromTo(thirdScreenButton, {
    //             opacity: 0
    //         }, {
    //             opacity: 1,
    //             duration: .5
    //         });
    //         gsap.fromTo(thirdScreenTextBlocks[0], {
    //             opacity: 0,
    //             y: 50,
    //             // duration: 1
    //         }, {
    //             opacity: 1,
    //             y: 0,
    //             // delay: 1,
    //             duration: .5,
    //             onComplete: function () {
    //                 animationInProgress = false;
    //             }
    //         });
    //     }
    //     const thirdScreen3Anim = function () {
    //         gsap.to(thirdScreenTextBlocks[0], {
    //             // delay: 1,
    //             opacity: 0,
    //             y: 50,
    //             duration: .5,
    //             onComplete: function () {
    //                 animationInProgress = false;
    //             }
    //         });
    //     }
    //     const thirdScreen4Anim = function () {
    //         gsap.fromTo(thirdScreenTextBlocks[1], {
    //             opacity: 0,
    //             y: 50,
    //             // duration: 1
    //         }, {
    //             opacity: 1,
    //             y: 0,
    //             // delay: 1,
    //             duration: .5,
    //             onComplete: function () {
    //                 animationInProgress = false;
    //             }
    //         });
    //     }
    //     const thirdScreen5Anim = function () {
    //         gsap.to(thirdScreenTextBlocks[1], {
    //             // delay: 1,
    //             opacity: 0,
    //             y: 50,
    //             duration: .5,
    //             onComplete: function () {
    //                 animationInProgress = false;
    //             }
    //         });
    //     }
    //     const thirdScreen6Anim = function () {
    //         gsap.fromTo(thirdScreenTextBlocks[2], {
    //             opacity: 0,
    //             y: 50,
    //             // duration: 1
    //         }, {
    //             opacity: 1,
    //             y: 0,
    //             // delay: 1,
    //             duration: .5,
    //             onComplete: function () {
    //                 animationInProgress = false;
    //                 // screenScroll();
    //             }
    //         });
    //     }
    //     // const thirdScreen7Anim = function () {
    //     //     gsap.to(thirdScreenTextBlocks[2], {
    //     //         // delay: 1,
    //     //         opacity: 0,
    //     //         y: 50,
    //     //         duration: .5,
    //     //         onComplete: function () {
    //     //             animationInProgress = false;
    //     //         }
    //     //     });
    //     // }
    //     // const thirdScreen8Anim = function () {

    //     //     gsap.to(screens[3], {
    //     //         delay: 1,
    //     //         onStart: function () {
    //     //             screens[2].classList.remove('third-screen--filter');
    //     //         }
    //     //     });
    //     // }

    //     const animationsThird = [thirdScreen1Anim, thirdScreen2Anim, thirdScreen3Anim, thirdScreen4Anim, thirdScreen5Anim, thirdScreen6Anim];

    //     const startNextAnimation = (arrayAnimFunc) => {
    //         if (scrollStart && !animationInProgress && currentIndex < arrayAnimFunc.length) {
    //             animationInProgress = true;
    //             arrayAnimFunc[currentIndex]();
    //             currentIndex++;
    //         }
    //     };

    //     // Добавляем обработчик события для скролла колесика мыши
    //     const wheelHandler = (e) => {
    //         if (!scrollStart) {
    //             scrollStart = true;
    //         }
    //         startNextAnimation(animationsThird);
    //     };

    //     window.addEventListener('wheel', wheelHandler);

    // }




    const tline4 = gsap.timeline();

    tline4.to(screens[4], {
        delay: 1,
        onStart: function () {
            fourRamaBlur.classList.add('four-screen__rama-blur--full-blur');
        },
        onReverseComplete: function () {
            fourRamaBlur.classList.remove('four-screen__rama-blur--full-blur');
        },
        onComplete: () => {
            // screenScroll();
        }
    });

    // ScrollTrigger.create({
    //     trigger: screens[4],
    //     start: 'top top+=700',
    //     end: '+=500',
    //     scrub: true,
    //     animation: tline4,fifth-screen    // fixScreen(screens[5], 3000);auto	height: unset;autoconst tline5 = gsap.timeline({
    //     onUpdate: ScrollTrigger.update // Это для обновления ScrollTrigger при обновлении временной линии
    // });

    // // Добавляем анимацию перемещения элемента по оси Y (top)
    // tline5.to(fifthScreenElements, {
    //     top: "-100%", // Конечное состояние: перемещение на минус 100%
    //     ease: "none", // Эффект анимации (можете выбрать другой, если нужно)
    //     onComplete: () => {
    //         // screenScroll();
    //     }
    // });

    // // Создаем ScrollTrigger для триггера
    // ScrollTrigger.create({
    //     trigger: screens[5], // Триггер (можете использовать свой)
    //     start: 'top top',
    //     end: '+=3000',
    //     scrub: true,
    //     animation: tline5 // Привязываем временную линию анимации
    // });        animation: tline4,auto
    // });


    // const tline5 = gsap.timeline({
    //     onUpdate: ScrollTrigger.update // Это для обновления ScrollTrigger при обновлении временной линии
    // });

    // // Добавляем анимацию перемещения элемента по оси Y (top)
    // tline5.to(fifthScreenElements, {
    //     top: "-100%", // Конечное состояние: перемещение на минус 100%
    //     ease: "none", // Эффект анимации (можете выбрать другой, если нужно)
    //     onComplete: () => {
    //         // screenScroll();
    //     }
    // });

    // // Создаем ScrollTrigger для триггера
    // ScrollTrigger.create({
    //     trigger: screens[5], // Триггер (можете использовать свой)
    //     start: 'top top',
    //     end: '+=3000',
    //     scrub: true,
    //     animation: tline5 // Привязываем временную линию анимации
    // });

    // const tline6 = gsap.timeline();

    // dopScreenItems2.forEach((element, index) => {
    //     tline6.from(element, {
    //         scale: 0, // Начинаем с масштаба 0 (элементы полностью скрыты)
    //         duration: .2, // Продолжительность анимации в секундах
    //         stagger: 1, // Задержка между анимациями каждого элемента
    //         ease: 'back.out(1.7)', // Эффект анимации (можно выбрать другой)
    //     });
    // });

    // ScrollTrigger.create({
    //     trigger: screens[6], // Триггер (можете использовать свой)
    //     start: 'top top+=400',
    //     // end: '+=1000',
    //     // scrub: true,
    //     toggleActions: "play none none none",
    //     animation: tline6 // Привязываем временную линию анимации
    // });

    const tline7 = gsap.timeline();

    forSixthScreenAnimations.forEach((element, index) => {
        tline7.from(element, {
            scale: 0, // Начинаем с масштаба 0 (элементы полностью скрыты)
            duration: .2, // Продолжительность анимации в секундах
            stagger: 1, // Задержка между анимациями каждого элемента
            ease: 'back.out(1.7)', // Эффект анимации (можно выбрать другой)
            onComplete: () => {
                // screenScroll();
            }
        });
    });

    ScrollTrigger.create({
        trigger: screens[6], // Триггер (можете использовать свой)
        start: 'top top+=400',
        // end: '+=1000',
        // scrub: true,
        toggleActions: "play none none none",
        animation: tline7 // Привязываем временную линию анимации
    });

}

export default gsapAnimate;
