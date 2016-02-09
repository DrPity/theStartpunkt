var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
const $ = gulpLoadPlugins();

// Watch Files For Changes & Reload
gulp.task('build', ['clean','styles', 'jshint', 'html', 'browserify',
  'images', 'fonts', 'extras', 'optimizeImages', 'optimizeHtml'], function() {
  return gulp.src('dist/**/*');
});
