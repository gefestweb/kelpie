import * as mainFuncs from "./modules/functions.js";
import {swiperInit} from "./modules/swiperInit.js";
import tabs from "./modules/tabs.js";
import oko from "./modules/oko.js";
import mobMenu from "./modules/mobmenu.js";
import ramaObserve from "./modules/helper.js";
import gsapAnimate from "./modules/gsapAnimate.js";

mainFuncs.isWebp();

document.addEventListener("DOMContentLoaded", function() {
    swiperInit();
    tabs();
    mobMenu();
    oko();
    ramaObserve();
    gsapAnimate();
})
