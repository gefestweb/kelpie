
import * as nodepath from 'path';
const rootFolder=nodepath.basename(nodepath.resolve());
const buildFolder=`./dist`;
const srcFolder=`./src`;

export const path={
        build:{
            images:`${buildFolder}/img/`,
            js:`${buildFolder}/js/`,
            css:`${buildFolder}/css`,
            html:`${buildFolder}`,
            files:`${buildFolder}/files/`,
            fonts:`${buildFolder}/fonts/`,
            video:`${buildFolder}/video/`,
        },
        src:{
            img: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,ico}`,
            svg:`${srcFolder}/img/**/*.svg`,
            js: `${srcFolder}/js/app.js`,
            scrollSmoother: `${srcFolder}/js/scrollSmoother.js`,
            scss:`${srcFolder}/scss/style.scss`,
            html:`${srcFolder}/*.html`,
            files:`${srcFolder}/files/**/*.*`,
            svgicons:`${srcFolder}/svgicons/*.svg`,
            fonts:`${srcFolder}/fonts/**/*.*`,
            video: `${srcFolder}/video/**/*.*`,
        },
        watch:{
            images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,
            js:`${srcFolder}/js/**/*.js`,
            scss:`${srcFolder}/scss/**/*.scss`,
            html:`${srcFolder}/**/*.html`,
            files:`${srcFolder}/files/**/*.*`,
            fonts:`${srcFolder}/fonts/**/*.*`,
            video: `${srcFolder}/video/**/*.*`,

        },
        clean:buildFolder,
        buildFolder:buildFolder,
        srcFolder:srcFolder,
        rootFolder:rootFolder,
        ftp:`/public_html/`,

}