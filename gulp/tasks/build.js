var gulp = require("gulp"),
    imagemin = require("gulp-imagemin"),
    usemin = require("gulp-usemin"),
    browserify = require("gulp-browserify"),
    del = require('del'),
    rev = require("gulp-rev"),
    uglify = require("gulp-uglify"),
    cssnano = require("gulp-cssnano"),
    htmlmin = require('gulp-htmlmin'),
    cleancss = require('gulp-clean-css'),
    pump = require('pump'),
    htmlusemin = require('gulp-usemin-html'),
    browserSync = require("browser-sync").create(),
    devip = require('dev-ip')
;

gulp.task("previewDist", function() {

    /*auto refresh browser*/
    browserSync.init({
        notify: false,
        server: {
            baseDir: "docs"
        },
        host: devip()
    });
});

gulp.task("deleteBuild", ["sprites"], function(){
    return del("./docs");
});

gulp.task("copyGeneralFiles", ["deleteBuild"], function(){
    const pathsToCopy = [
        "./app/**/*",
        "!./app/index.html",
        "!./app/assets/images/**/*",
        "!./app/assets/styles/**/*",
        "!./app/assets/scripts/**/*",
        "!./app/temp",
        "!./app/temp/**/*"
    ];

    return gulp.src(pathsToCopy)
        .pipe(gulp.dest("./docs"));
});

gulp.task("buildImages",["deleteBuild"],function(){
    /* use the ! to exclude files or folders*/
    return gulp.src(["./app/assets/images/**/*","!./app/assets/images/icons", "!./app/assets/images/icons/**/*"])
        .pipe(imagemin({
            progressive: true,//jpeg
            interlaced: true,//png
            multipass: true//svg
        }))
        .pipe(gulp.dest('./docs/assets/images'))
});

gulp.task("useminTrigger",["deleteBuild"],function(){
    gulp.start("usemin");
});

gulp.task("usemin",["styles", "scripts"],function(){
    /* use the ! to exclude files or folders*/
    return gulp.src("./app/index.html")
        .pipe(usemin({
            css: [function(){return rev()}, function(){return cssnano()}],
            js: [function(){return rev()}, function(){return uglify()}],
            html: [ htmlmin({ collapseWhitespace: true }) ]
          }))
        .pipe(gulp.dest('./docs'))
});

gulp.task("build", ["deleteBuild","buildImages","copyGeneralFiles","useminTrigger"]);