var gulp = require("gulp"),
    svgSprite = require("gulp-svg-sprite"),
    rename = require("gulp-rename"),
    svg2png = require('gulp-svg2png'),
    del = require("del")
    ;

var config = {
    shape: {
        spacing: {
            padding: 1
        }
    },
    mode: {
        css: {
            variables: {
                now		: new Date().toDateString(),
                png		: function() {
                    return function(sprite, render) {
                        return render(sprite).split('.svg').join('.png');
                    }
                }
            },
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

gulp.task('svg2png', ["copySpriteSVG"], function () {
    gulp.src('./app/assets/images/sprites/**/*.svg')
        .pipe(svg2png())
        .pipe(gulp.dest('./app/assets/images/sprites'));
});

gulp.task("sprites", ["beginClean", "createSprites", "copySpriteSVG", "copySpriteCSS", "endClean","svg2png"]);