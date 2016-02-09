var gulp = require('gulp');

gulp.task('extras', function(){
  return gulp.src([
    'app/assets/**/*'
  ], {
    dot: true
  }).pipe(gulp.dest('dist/assets/'));
});
