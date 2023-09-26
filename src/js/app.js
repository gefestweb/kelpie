import * as mainFuncs from "./modules/functions.js";
import { swiperInit } from "./modules/swiperInit.js";
import tabs from "./modules/tabs.js";
import oko from "./modules/oko.js";
import mobMenu from "./modules/mobmenu.js";
import ramaObserve from "./modules/helper.js";
import gsapAnimate from "./modules/gsapAnimate.js";
// import test from "./modules/test.js";
import header from "./modules/header.js";
import navigation from "./modules/navigation.js";
import modals from "./modules/modals.js";
import test from "./modules/test.js";
import animations from "./modules/animations.js"
// import { controlVideo } from "./modules/video.js";

mainFuncs.isWebp();

document.addEventListener("DOMContentLoaded", function () {
	mobMenu();
	swiperInit();
	tabs();
	oko();
	ramaObserve();
	header();
	setTimeout(() => {
		navigation();		
	}, 5000);
	modals();
	// test();
	// scrollByPixels();
	if (window.matchMedia("(min-width: 1000px)").matches) {
		// animations();
		gsapAnimate();
	}
});
