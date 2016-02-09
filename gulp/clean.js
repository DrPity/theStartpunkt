var gulp = require('gulp'),
    del = require('del');

gulp.task('clean', function (cb) {
    del.sync(['dist/**', '!dist', '!dist/rst/**','!dist/res/**', 'tmp/**/*', '!/app/']);
    cb();
});
