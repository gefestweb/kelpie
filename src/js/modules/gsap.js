import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { ScrollToPlugin } from "gsap/ScrollToPlugin.js";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
const tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".container",
        pin: true,   // pin the trigger element while active
        start: "top top", // when the top of the trigger hits the top of the viewport
        end: "+=0", // end after scrolling 500px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        snap: {
            snapTo: "labels", // snap to the closest label in the timeline
            duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
            delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
            ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
        }
    }
});
function blockScroll() {
    document.body.style.overflow = 'hidden';
}
// function allowScroll() {
//     document.body.style.overflow = 'auto';
// }

// blockScroll();
const animations = () => {

    const screens = document.querySelectorAll('.screen');
    const firstScreenElements = screens[0].querySelectorAll('.animate-element');

    // window.addEventListener('scroll', (e) => {
    //     // e.preventDefault()
    //     // e.stopPropagation()
    //     // window.scroll(0, 0)
    //     // console.log(123)
    //     animate_1screen_1elem()

    // })
    animate_1screen_1elem()

    function animate_1screen_1elem() {
        // gsap.fromTo(firstScreenElements[0], { y: 0 }, {
        //     y: 500,
        //     duration: 1,
        // });
        tl1
        .set(document.body, { overflow: 'hidden' })
        .to('h1.animate-element',{y:400})
        .to('h1.animate-element',{y:700})
        .set(document.body, { overflow: 'auto' })
    }
    function animate_1screen_2elem() {
        gsap.fromTo(firstScreenElements[1], { y: 0 }, {
            y: 500,
            duration: 1,
            onComplete: () => {
                blockScroll();
                currentElement++;
                animateElement();
            }
        });
    }
    function animate_1screen_3elem() {
        gsap.fromTo(firstScreenElements[2], { y: 0 }, {
            y: 500,
            duration: 1,
            onComplete: () => {
                blockScroll();
                currentElement++;
                animateElement();
            }
        });
    }
    function animate_1screen_4elem() {
        gsap.fromTo(firstScreenElements[3], { y: 0 }, {
            y: 500,
            duration: 1,
            onComplete: () => {
                blockScroll();
                currentElement++;
                animateElement();
            }
        });
    }



}

export default animations;