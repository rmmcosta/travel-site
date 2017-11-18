var gulp = require('gulp'),
    watch = require('gulp-watch');

gulp.task('default', function() {
    console.log("Hooray - You created a Gulp Task");
});

gulp.task('html', function() {
    console.log('Something useful being doen to your HTML');
});

gulp.task('styles', function(){
   console.log("Imagine Sass or PostCSS tasks running here."); 
});

gulp.task('watch', function() {
   watch('./app/index.html', function() {
       gulp.start('html');
   }); 
   
   watch('app/styles/**/*.css', function(){
        gulp.start('styles');
   });
});