var gulp = require("gulp"),
    modernizr = require('gulp-modernizr');
 
gulp.task('modernizr', function() {
  return gulp.src(["./app/assets/scripts/**/*.js","./app/assets/styles/**/*.css"])
    .pipe(modernizr({
        "options" : [
            "setClasses"
        ]
    }))
    .pipe(gulp.dest("./app/temp/scripts"))
});