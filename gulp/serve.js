var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// Watch Files For Changes & Reload
//['clean','styles', 'jshint', 'html', 'browserify' ,'images', 'fonts', 'extras']
gulp.task('serve', ['build', 'watch'], function() {
  browserSync.init(null, {
    // watchTask: true,
    notify: false,
    server: {
      baseDir: ['dist'],
      index: 'index.html',
      routes: {
        '/bower_components': 'bower_components',
      },
    },
  });

  gulp.watch([
    'dist/**/*',
  ]).on('change', reload);

  gulp.watch('./app/src/components/**/*.vue', ['browserify']);
  gulp.watch('./app/*.html', ['html']);
  gulp.watch('./app/assets/**/*', ['extras']);
  gulp.watch('./app/images/**/*', ['images']);
  gulp.watch('./app/src/**/*.js', ['browserify']);
  gulp.watch('./redist/kogni/src/**/*', ['browserify']);
  gulp.watch('./app/styles/**/*.scss', ['styles']);
  gulp.watch('./app/fonts/**/*', ['fonts']);
  gulp.watch('./bower.json', ['wiredep', 'fonts']);
});
