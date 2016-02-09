var gulp = require('gulp'),
gulpLoadPlugins = require('gulp-load-plugins');
const $ = gulpLoadPlugins();

gulp.task('install', ['build', 'deploy']);
gulp.task('default', ['build', 'serve']);
