var gulp = require("gulp"),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    mixins = require("postcss-mixins"),
    cssvars = require("postcss-simple-vars"),
    nested = require("postcss-nested"),
    cssimport = require("postcss-import")
;

gulp.task("styles", function(){
	//ass or PostCSS tasks running here
	return gulp.src("./app/assets/styles/styles.css")
        .pipe(postcss([cssimport, cssvars, mixins, nested, autoprefixer]))
        .on("error", function(errorInfo){
            console.log("An error ocurred in the css files!");
            console.log(errorInfo.toString());
            this.emit("end");
        })
		.pipe(gulp.dest("./app/temp/styles")); 
});