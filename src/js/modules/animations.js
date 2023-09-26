import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { ScrollToPlugin } from "gsap/ScrollToPlugin.js";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const animations = () => {
    const screens = document.querySelectorAll('.screen');
    const firstScreenElements = screens[0].querySelectorAll('.animate-element');
    const switcherNode = screens[0].querySelector('.switcher__toggler');
    const ramaElements = screens[0].querySelector('.rama').querySelectorAll('.animate-element');
    const firstScreenText = screens[0].querySelectorAll('.first-screen__first-title');

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
        // onComplete: function () {
        //     switcherNode.classList.toggle('switcher__toggler--scroll');
        // }
    })
    // gsap.fromTo(firstScreenText[1], {
    //     opacity: 0,
    //     y: 300,

    // }, {
    //     opacity: 1,
    //     y: 0,
    //     scrollTrigger: {
    //         trigger: firstScreenText[1],
    //         start: "top top",
    //         end: "+=300",
    //         // pin: true,
    //         scrub: true,
    //         markers: true
    //     },

    // })
}


export default animations;