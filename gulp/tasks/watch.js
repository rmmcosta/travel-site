var gulp = require("gulp"),
    watch = require("gulp-watch"),
    browserSync = require("browser-sync").create(),
    devip = require('dev-ip')
;

gulp.task("watch", function() {

    /*auto refresh browser*/
    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        },
        host: devip()
    });

    watch("./app/index.html", function() {
        /*refresh the browser*/
	    browserSync.reload();
    }); 

    watch("./app/assets/images/icons/**/", function(){
        gulp.start("generateSprites");
    });

    watch("./app/assets/scripts/**/*.js", function(){
        gulp.start("scripts");
    });

    /*watch("./app/temp/scripts/modernizr.js", function(){
        gulp.start("modernizr");
    });*/
    
    watch("./app/assets/styles/**/*.css", function(){
        /*runs the task to update styles css*/
        /*gulp.start("styles");*/
        /*New start to run on changing css and inject that css in the browser*/
        gulp.start("cssInject"); //also add to cssInject task to run styles before the css inject
    });

});

gulp.task("cssInject", ["styles"], function(){
	return gulp.src("./app/temp/styles/styles.css")
		.pipe(browserSync.stream());
});