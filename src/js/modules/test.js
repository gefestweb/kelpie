import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { ScrollToPlugin } from "gsap/ScrollToPlugin.js";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


const test = () => {

    const screens = document.querySelectorAll('.screen');
    const firstScreenElements = screens[0].querySelectorAll('.animate-element');
    const switcherNode = screens[0].querySelector('.switcher__toggler');
    const ramaElements = screens[0].querySelector('.rama').querySelectorAll('.animate-element');
    const firstScreenText = screens[0].querySelectorAll('.first-screen__first-title');

    let canIAnimate = true;

    function fixScreen(screen, scroll) {
        const trigger = ScrollTrigger.create({
            trigger: screen,
            start: "top top",
            end: "+=" + scroll,
            pin: true,
            // onLeaveBack: self => self.kill(),
            // pinSpacing: false,
            // once: true, // Делаем фиксацию один раз
        });
    }

    fixScreen(screens[0], 3000);

    gsap.fromTo(
        firstScreenText[0], {
        opacity: 1,
        y: 0,
        transition: .5
    }, {
        opacity: 0, y: -300, duration: 2,
        onStart: function () {
            switcherNode.classList.add('switcher__toggler--scroll');
            canIAnimate = false;
        },
        onReverseComplete: function () {
            switcherNode.classList.remove('switcher__toggler--scroll');
        },
        // scrollTrigger: {
        //     trigger: screens[0],
        //     start: "top top",
        //     end: "+=500",
        //     pin: true,
        //     scrub: true,
        //     // markers: true
        // },
        onComplete: function () {
            canIAnimate = true;
            gsap.fromTo(
                firstScreenText[1], {
                opacity: 0,
                y: 300
            }, {
                opacity: 1, y: 0, duration: .5,
                onStart: function () {
                    canIAnimate = false;
                    screens[0].querySelector('.rama').classList.remove('rama--circle');
                    gsap.to(ramaElements[1], {
                        opacity: 1, duration: .5,
                    });
                    gsap.to(ramaElements[0], {
                        opacity: 0, duration: .5,
                    });
                },
                // scrollTrigger: {
                //     trigger: firstScreenText[0],
                //     start: 'top top',
                //     end: '+=500',
                //     pin: true,
                //     scrub: true,
                //     markers: true
    
                // }
            }
            );
        }
    }
    );

    // if (canIAnimate) {

}

export default test

