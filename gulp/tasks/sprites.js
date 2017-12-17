var gulp = require("gulp"),
    svgSprite = require("gulp-svg-sprite"),
    rename = require("gulp-rename");

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

gulp.task("createSprites", function () {
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

gulp.task("generateSprites", ["createSprites", "copySpriteSVG", "copySpriteCSS"]);