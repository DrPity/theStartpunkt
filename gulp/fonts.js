var gulp = require('gulp')

gulp.task('fonts', function(){
  return gulp.src(require('main-bower-files')({
    filter: '**/*.{eot,svg,ttf,woff,woff2}'
  }).concat('app/fonts/**/*'))
    .pipe(gulp.dest('dist/fonts'));
});
