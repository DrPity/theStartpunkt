var gulp = require('gulp');
var useref = require('gulp-useref');

gulp.task('html', function() {
  var assets = useref.assets({searchPath: ['.tmp', 'app', '.']});

  return gulp.src('app/**/*.html')
    .pipe(assets)
    .pipe(assets.restore())
    .pipe(useref())
    .pipe(gulp.dest('dist'));
});
