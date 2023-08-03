import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { ScrollToPlugin } from "gsap/ScrollToPlugin.js";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
import { calculateOffscreenPositionY, calculateOffscreenPositionX } from "./calculations.js";
import { debounce } from "./debounce.js";

const gsapAnimate = () => {

    let isAnimating = false;
    let currentStep = 1;
    let currentScreen = 1;

    // Элементы с первого экрана

    const screens = document.querySelectorAll('.screen');
    const firstScreenElements = screens[0].querySelectorAll('.animate-element');
    const ramaElements = screens[0].querySelector('.rama').querySelectorAll('.animate-element');

    // Элементы со второго экрана

    const secondScreenElements = screens[1].querySelectorAll('.animate-element');
    // secondScreenElements[0].style.marginTop = '100%';
    secondScreenElements[0].style.visibility = 'hidden';


    function blockScroll() {
        document.body.style.overflow = 'hidden';
    }

    // blockScroll();

    //ПРОВЕРКА. ИДЕТ ЛИ АНИМАЦИЯ В ДАННЫЙ МОМЕНТ

    function checkEndAnimation(animation) {
        if (!isAnimating) {
            isAnimating = true;
            console.log(isAnimating)
            animation();
        } else {
            console.log('Идет анимация, жди!')
            console.log(isAnimating)
        }
    }


    function wheelHandler() {
        if (!isAnimating) {

            switch (currentScreen) {
                case 1:
                    switch (currentStep) {
                        case 1:
                            animationStart(animations.s1e1);
                        case 2:
                            animationStart(animations.s1e2);
                        case 3:
                            animationStart(animations.s1e3);
                            break;
                    }
                case 2:
                    switch (currentStep) {
                        case 1:
                            console.log('b nen')
                            animationStart(animations.s2);
                        case 2:
                            animationStart(animations.s2e2);
                        case 3:
                            animationStart(animations.s2e3);
                        case 4:
                            animationStart(animations.s2e4);
                    }
            }
        }

    }

    document.addEventListener('wheel', wheelHandler);

    function animationStart(animation) {
        checkEndAnimation(animation);
    }

    //АНИМАЦИИ

    let animations = {
        s1e1: debounce(() => {
            console.log(`Анимация ${currentStep} началась!`);
            const switherNode = screens[0].querySelector('.switcher__toggler');
            switherNode.classList.add('switcher__toggler--scroll');
            firstScreenElements[0].classList.add('hide-element-bottom');

            gsap.fromTo(firstScreenElements[0], { y: 0 }, {
                duration: 1.5,
                onComplete: function () {
                    isAnimating = false;
                    console.log("Анимация закончилась!");
                    currentStep++;
                    console.log(`Готово ко ${currentStep} анимации!`)



                }
            });
        }, 250),


        s1e2: debounce(() => {
            console.log('scroll');
            firstScreenElements[1].classList.remove('hide-element-bottom');
            document.querySelector('.rama').classList.remove('rama--circle');
            ramaElements[0].classList.add('opacity-off');
            ramaElements[1].classList.add('opacity-on');


            gsap.fromTo(firstScreenElements[1], { y: 0 }, {
                duration: 1.5,
                onComplete: function () {
                    isAnimating = false;
                    console.log("Анимация закончилась!");
                    currentStep++;
                    console.log(`Готово ко ${currentStep} анимации!`);
                }
            });
        }, 250),


        s1e3: debounce(() => {
            console.log('scroll');
            ramaElements[1].classList.remove('opacity-on');
            ramaElements[2].classList.add('opacity-on');


            gsap.fromTo(firstScreenElements[1], { y: 0 }, {
                y: -calculateOffscreenPositionY('top', firstScreenElements[1]) - 36,
                duration: .5,
                onComplete: function () {

                }
            });

            firstScreenElements[2].classList.remove('hide-element-bottom');

            gsap.fromTo(firstScreenElements[2], { y: 0 }, {
                duration: 1.5,
                onComplete: function () {
                    isAnimating = false;
                    console.log("Анимация закончилась!");
                    currentStep = 1;
                    currentScreen++;
                    console.log(`Готово ко ${currentStep} анимации!`)
                }
            });
        }, 250),

        s2: debounce(() => {
            console.log('scroll');

            gsap.fromTo(screens[1], { y: 0 }, {
                yPercent: -100,
                duration: 1.5,
                onComplete: function () {
                    console.log("Анимация закончилась!");

                }
            });

            gsap.fromTo(secondScreenElements[0], { autoAlpha: 0 }, {
                duration: 1,
                delay: 2,
                autoAlpha: 1,
                ease: 'power0.none',
                onComplete: function () {
                    console.log("Анимация закончилась!");
                    console.log(`Готово ко ${currentStep} анимации!`)
                }
            });
            
            gsap.fromTo(secondScreenElements[1], { autoAlpha: 0 }, {
                autoAlpha: 1,
                delay: 2.3,
                duration: 1,
                ease: 'power0.none',
                onComplete: function () {
                    console.log("Анимация закончилась!");
                    console.log(`Готово ко ${currentStep} анимации!`)
                }
            });

            gsap.fromTo(secondScreenElements[2], { autoAlpha: 0 }, {
                autoAlpha: 1,
                delay: 3,
                duration: 1,
                ease: 'power0.none',
                onComplete: function () {
                    isAnimating = false;
                    console.log("Анимация закончилась!");
                    console.log(`Готово ко ${currentStep} анимации!`)
                }
            });

            gsap.fromTo(secondScreenElements[3], { autoAlpha: 0 }, {
                autoAlpha: 1,
                delay: 3.5,
                duration: 1,
                ease: 'power0.none',
                onComplete: function () {
                    isAnimating = false;
                    console.log("Анимация закончилась!");
                    currentStep++;
                    console.log(`Готово ко ${currentStep} анимации!`)
                }
            });
        }, 250),
        s2e1: debounce(() => {
            console.log('SCROLL');
            console.log('пытаюсь...');

            // gsap.fromTo(secondScreenElements[0], { marginTop: 0 }, {
            //     duration: 1,
            //     ease: 'power0.none',
            //     onComplete: function () {
            //         console.log("Анимация закончилась!");
            //         console.log(`Готово ко ${currentStep} анимации!`)
            //     }
            // });

            

        }, 250),

    }
}

export default gsapAnimate;
