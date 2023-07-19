
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
        },
        src:{
            img: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
            svg:`${srcFolder}/img/**/*.svg`,
            js:`${srcFolder}/js/app.js`,
            scss:`${srcFolder}/scss/style.scss`,
            html:`${srcFolder}/*.html`,
            files:`${srcFolder}/files/**/*.*`,
            svgicons:`${srcFolder}/svgicons/*.svg`,
            fonts:`${srcFolder}/fonts/**/*.*`,
        },
        watch:{
            images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,
            js:`${srcFolder}/js/**/*.js`,
            scss:`${srcFolder}/scss/**/*.scss`,
            html:`${srcFolder}/**/*.html`,
            files:`${srcFolder}/files/**/*.*`,
            fonts:`${srcFolder}/fonts/**/*.*`,
        },
        clean:buildFolder,
        buildFolder:buildFolder,
        srcFolder:srcFolder,
        rootFolder:rootFolder,
        ftp:`test`,

}