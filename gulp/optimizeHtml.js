var gulp = require('gulp'),
    fs = require('fs'),
    htmlmin = require('gulp-htmlmin'),
    replace = require('gulp-replace');

gulp.task('optimizeHtml', function() {
	return gulp.src('app/**/*.html')
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(replace(/<link href=\"\/styles\/main.css\"[^>]*>/, function(s) {
			var style = fs.readFileSync('/styles/main.css', 'utf8');
			return '<style>\n' + style + '\n</style>';
		}))
		.pipe(gulp.dest('dist/'));
});
