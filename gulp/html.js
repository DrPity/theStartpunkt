var gulp = require('gulp');
var useref = require('gulp-useref');
var gulpLoadPlugins = require('gulp-load-plugins');

var $ = gulpLoadPlugins();

gulp.task('html', function() {
  var assets = useref.assets({searchPath: ['.tmp', 'app', '.']});

  return gulp.src('app/**/*.html')
    .pipe(assets)
    // .pipe($.if('*.css', $.minifyCss({compatibility: '*'})))
    .pipe(assets.restore())
    .pipe(useref())
    .pipe($.if('*.html', $.minifyHtml({conditionals: true, loose: true})))
    .pipe(gulp.dest('dist'));
});
