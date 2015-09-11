var gulp = require('gulp'),
    gulpLoadPlugins = require('gulp-load-plugins');

const $ = gulpLoadPlugins();


gulp.task('img', function(){
    return gulp.src('app/images/**/*')
    .pipe($.if($.if.isFile, $.cache($.imagemin({
      progressive: true,
      interlaced: true,
      // don't remove IDs from SVGs, they are often used
      // as hooks for embedding and styling
      svgoPlugins: [{cleanupIDs: false}]
    }))
    .on('error', function (err) {
      console.log(err);
      this.end();
    })));
    // .pipe(gulp.dest('.tmp/images/'));
});
