import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { ScrollToPlugin } from "gsap/ScrollToPlugin.js";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
import { debounce } from "./debounce.js";

const gsapAnimate = () => {

    const screens = document.querySelectorAll('.screen');
    const firstScreenElements = screens[0].querySelectorAll('.animate-element');
    let isAnimating = false;
    let currentStep = 0;



    function blockScroll() {
        document.body.style.overflow = 'hidden';
    }

    blockScroll();

    //ПРОВЕРКА. ИДЕТ ЛИ АНИМАЦИЯ В ДАННЫЙ МОМЕНТ

    function checkEndAnimation(animation) {
        if (!isAnimating) {
            isAnimating = true;
            animation();
        } else {
            console.log('Идет анимация, жди!')
            console.log(isAnimating)
        }
    }


    function wheelHandler() {
        if (!isAnimating) {

            if (currentStep === 0) {
                animationStart(animations.s1e1);
                currentStep++;
                console.log(currentStep);
            } else if (currentStep === 1) {
                animationStart(animations.s1e2);
                currentStep++;
                console.log(currentStep);
            } else if (currentStep === 2) {
                animationStart(animations.s1e3);
                currentStep++;
                console.log(currentStep);
            } else if (currentStep === 3) {
                animationStart(animations.s1e4);
                currentStep++;
                console.log(currentStep);
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
            console.log('scroll');

            gsap.fromTo(firstScreenElements[0], { y: 0 }, {
                y: -window.innerHeight,
                duration: 3,
                ease: "power2.inOut",
                onComplete: function () {
                    isAnimating = false;
                    console.log(isAnimating);
                }
            });
        }, 250),


        s1e2: debounce(() => {
            console.log('scroll');

            gsap.fromTo(firstScreenElements[1], { y: window.innerHeight }, {
                y: 0,
                duration: 3,
                ease: "power2.inOut",
                onComplete: function () {
                    isAnimating = false;
                    console.log(isAnimating);
                }
            });
        }, 250),


        s1e3: debounce(() => {
            console.log('scroll');

            gsap.fromTo(firstScreenElements[2], { y: 0 }, {
                y: 300,
                duration: 2,
                ease: "power2.inOut",
                onComplete: function () {
                    isAnimating = false;
                    console.log(isAnimating);
                }
            });
        }, 250),

        s1e4: debounce(() => {
            console.log('scroll');

            gsap.fromTo(firstScreenElements[3], { y: 0 }, {
                y: -300,
                duration: 2,
                ease: "power2.inOut",
                onComplete: function () {
                    isAnimating = false;
                    console.log(isAnimating);
                }
            });
        }, 250),
    }
}

export default gsapAnimate;
