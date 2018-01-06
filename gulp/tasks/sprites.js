var gulp = require("gulp"),
    svgSprite = require("gulp-svg-sprite"),
    rename = require("gulp-rename"),
    del = require("del")
    ;

var config = {
    mode: {
        css: {
            sprite: "sprite.svg",
            render: {
                css: {
                    template: "./gulp/templates/sprite.css"
                }
            }
        }
    }
}

gulp.task("beginClean", function(){
    return del(["./app/temp/sprite","./app/assets/images/sprites"]);
});

gulp.task("createSprites", ["beginClean"], function () {
    return gulp.src("./app/assets/images/icons/**/*.svg")
        .pipe(svgSprite(config))
        .pipe(gulp.dest("./app/temp/sprite"));
});

gulp.task("copySpriteSVG", ["createSprites"], function(){
    return gulp.src("./app/temp/sprite/css/**/*.svg")
        .pipe(gulp.dest("./app/assets/images/sprites"));
});

gulp.task("copySpriteCSS", ["createSprites"], function(){
    return gulp.src("./app/temp/sprite/css/**/*.css")
        .pipe(rename(function(path){
            path.basename = "_" + path.basename;
        }))
        .pipe(gulp.dest("./app/assets/styles/modules"));
});

gulp.task("endClean", ["copySpriteCSS", "copySpriteSVG"], function(){
    return del(["./app/temp/sprite"]);
});

gulp.task("generateSprites", ["beginClean", "createSprites", "copySpriteSVG", "copySpriteCSS", "endClean"]);