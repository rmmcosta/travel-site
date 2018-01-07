var gulp = require("gulp"),
    webpack = require("webpack"),
    path = require("path"),
    stream = require("webpack-stream"),
    config = require(path.resolve("",'./webpack.config.1.js'))
;

const paths = {
    src: './app/assets/scripts/App.js',
    build: './app/temp/scripts'
};

gulp.task('webpack', function() {
    return stream(config)
    .pipe(gulp.dest(`${paths.build}`));
});