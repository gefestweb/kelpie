import exp from "constants";
import fs from "fs";
import fonterFix from "gulp-fonter-fix";
import ttf2woof2 from "gulp-ttf2woff2";

export const otfToTtf=()=>{
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.otf`,{})
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title:'Fonts',
            message:'Error: <%= error.message %>',
        })
    ))
    .pipe(fonterFix(
        {
            formats:['ttf']
        }
    ))
    .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`))
}
export const ttfToWoff=()=>{
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`,{})
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title:'Fonts',
            message:'Error: <%= error.message %>',
        })
    ))
    .pipe(fonterFix(
        {
            formats:['woff']
        }
    ))
    .pipe(app.gulp.dest(`${app.path.build.fonts}`))
    .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`,{}))
    .pipe(ttf2woof2())
    .pipe(app.gulp.dest(`${app.path.build.fonts}`))

}
export function fontsStyle(params) {
    let source_folder=app.path.srcFolder;
    let file_content = fs.readFileSync(source_folder + '/scss/fonts.scss');
    if (file_content == '') {
    fs.writeFile(source_folder + '/scss/fonts.scss', '', cb);
    return fs.readdir(app.path.build.fonts, function (err, items) {
    if (items) {
    let c_fontname;
    for (var i = 0; i < items.length; i++) {
    let fontname = items[i].split('.');
    fontname = fontname[0];
    if (c_fontname != fontname) {
    fs.appendFile(source_folder + '/scss/fonts.scss', '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb);
    }
    c_fontname = fontname;
    }
    }
    })
    }
    }
    
    function cb() { }