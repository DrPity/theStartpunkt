var gulp = require('gulp');

gulp.task('install', ['build', 'deploy']);
gulp.task('default', ['build', 'serve']);
