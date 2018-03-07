var gulp = require("gulp"),
    imagemin = require("gulp-imagemin"),
    usemin = require("gulp-usemin"),
    browserify = require("gulp-browserify"),
    del = require('del')
;

gulp.task("deleteBuild", function(){
    return del("./dist");
});

gulp.task("buildImages",["deleteBuild"],function(){
    /* use the ! to exclude files or folders*/
    return gulp.src(["./app/assets/images/**/*","!./app/assets/images/icons", "!./app/assets/images/icons/**/*"])
        .pipe(imagemin({
            progressive: true,//jpeg
            interlaced: true,//png
            multipass: true//svg
        }))
        .pipe(gulp.dest('./dist/assets/images'))
});

gulp.task("usemin",["deleteBuild"],function(){
    /* use the ! to exclude files or folders*/
    return gulp.src("./app/index.html")
        .pipe(usemin())
        .pipe(gulp.dest('./dist'))
});

gulp.task("browserify",["deleteBuild"],function(){
    /* use the ! to exclude files or folders*/
    return gulp.src(["./app/assets/scripts/*.js","./app/assets/styles/*.css"])
        .pipe(browserify())
        .pipe(gulp.dest('./dist'))
});

gulp.task("build", ["deleteBuild","buildImages","usemin"]);