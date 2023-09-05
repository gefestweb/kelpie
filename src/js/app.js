import * as mainFuncs from "./modules/functions.js";
import { swiperInit } from "./modules/swiperInit.js";
import tabs from "./modules/tabs.js";
import oko from "./modules/oko.js";
import mobMenu from "./modules/mobmenu.js";
import ramaObserve from "./modules/helper.js";
import gsapAnimate from "./modules/gsapAnimate.js";
import test from "./modules/test.js";
import header from "./modules/header.js";
// import { scrollByPixels } from "./modules/scrollByPixel.js";
mainFuncs.isWebp();

document.addEventListener("DOMContentLoaded", function () {
	mobMenu();
	swiperInit();
	tabs();
	oko();
	ramaObserve();
	header();
	// scrollByPixels();
	if (window.matchMedia("(min-width: 1000px)").matches) {
		gsapAnimate();
	}
});
