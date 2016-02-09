var gulp = require('gulp'),
    argv = require('yargs')
      .default({path : 'dist'})
      .argv;

gulp.task('deploy', ['build'], function() {
    return gulp.src('dist/**/*')
    .pipe(gulp.dest(argv.path));
});
