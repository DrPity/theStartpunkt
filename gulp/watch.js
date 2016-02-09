var gulp = require('gulp');

gulp.task('watch', ['browserify'], function() {
    gulp.watch(['./src/**/*.scss', './sass/**/*.scss'], ['styles']);
});
