var gulp = require("gulp"),
    watch = require("gulp-watch"),
	browserSync = require("browser-sync").create()
;

gulp.task("cssInject", ['styles'], function(){
	return gulp.src("./app/temp/styles/styles.css")
		.pipe(browserSync.stream());
});

gulp.task("watch", function() {

    /*auto refresh browser*/
    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    });

    watch("./app/index.html", function() {
        /*refresh the browser*/
	    browserSync.reload();
    }); 
    
    watch("./app/assets/styles/**/*.css", function(){
        /*runs the task to update styles css*/
        /*gulp.start("styles");*/
        /*New start to run on changing css and inject that css in the browser*/
        gulp.start("cssInject"); //also add to cssInject task to run styles before the css inject
    });

    watch("./app/assets/images/icons/**/", function(){
        console.log("watch icons");
        gulp.start("generateSprites");
    });

});