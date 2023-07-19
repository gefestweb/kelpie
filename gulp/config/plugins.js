import replace from "gulp-replace"; //Поиск и замена
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import browsersync from "browser-sync";
import newer from "gulp-newer";
import ifPlugin from "gulp-if";

//Объект с общими плагинами
export const plugins={
    replace:replace,
    plumber:plumber,
    notify:notify,
    browsersync:browsersync,
    newer:newer,
    if:ifPlugin,
}