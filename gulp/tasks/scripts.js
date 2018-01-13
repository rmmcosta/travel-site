var gulp = require("gulp"),
    webpack = require("webpack"),
    path = require("path"),
    config = require(path.resolve("","webpack.config"))
;

gulp.task('scripts', function(callback) {
    webpack(config, function(err, stats){
        if(err) {
            console.log(err.toString());
        }
        if(stats) {
            console.log(stats.toString());
        }
        callback(); //say to gulp that this task ended here
    });
});