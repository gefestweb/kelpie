import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { ScrollToPlugin } from "gsap/ScrollToPlugin.js";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const gsapAnimate = () => {
	const screens = document.querySelectorAll(".screen");
	const secondScreenElements = screens[1].querySelectorAll(".animate-element");
	const thirdScreenElements = screens[2].querySelectorAll(".animate-element");
	const thirdScreenTextBlocks = screens[3].querySelectorAll(
		".third-screen__text-block"
	);
	const sixthScreenElements = screens[5].querySelectorAll(".six-screen-anim");

	function fixScreen(screen, scroll) {
		ScrollTrigger.create({
			trigger: screen,
			start: "top top",
			end: "+=" + scroll,
			pin: true,
		});
	}

	fixScreen(screens[3], 600);

	secondScreenElements.forEach((element, index) => {
		gsap.fromTo(
			element,
			{
				autoAlpha: 0,
				y: 50,
			},
			{
				autoAlpha: 1,
				y: 0,
				duration: 1,
				delay: index * 0.2,
				scrollTrigger: {
					trigger: screens[1],
					start: "top-=500 top+=300",
				},
			}
		);
	});

	gsap.from(thirdScreenElements, {
		opacity: 0,
		duration: 0.4,
		stagger: 0.2,
		ease: "back.out(1.7)",
		scrollTrigger: {
			trigger: screens[2],
			start: "top top+=500",
			toggleActions: "play none none none",
		},
	});

    gsap.to(screens[3], {
        onStart: function () {
            screens[3].classList.add("third-screen--filter");
            document.querySelector(".third-screen__video").style.zIndex = "-1";
        },
        onReverseComplete: function () {
            screens[3].classList.remove("third-screen--filter");
        },
        scrollTrigger: {
            trigger: screens[3],
            start: "top top",
            end: "+=500",
            scrub: true,
        },
    });
	gsap.fromTo(
		thirdScreenTextBlocks[0],
		{
			opacity: 0,
			y: 50,
		},
		{
			opacity: 1,
			y: 0,
			duration: 0.5,
			scrollTrigger: {
				trigger: screens[3],
				start: "top top",
				end: "+=400",
				scrub: true,
			},
		}
	);
  
    gsap.from(sixthScreenElements, {
        opacity: 0,
        stagger: .1,
        scrollTrigger: {
	        trigger: screens[5], 
	        start: 'top top+=400',
            end: '+=400',
            toggleActions: "play none none none",  
            
        }
    });        
}

export default gsapAnimate;