var gulp = require('gulp'),
    watch = require('gulp-watch');

gulp.task('default', function() {
    console.log("Hooray - You created a Gulp Task");
});

gulp.task('html', function() {
    console.log('Something useful being doen to your HTML');
});

gulp.task('styles', function(){
   //ass or PostCSS tasks running here
   return gulp.src('app/assets/styles/styles.css').pipe(gulp.dest('app/temp/styles')); 
});

gulp.task('watch', function() {
   watch('app/index.html', function() {
       gulp.start('html');
   }); 
   
   watch('app/assets/styles/**/*.css', function(){
        gulp.start('styles');
   });
});