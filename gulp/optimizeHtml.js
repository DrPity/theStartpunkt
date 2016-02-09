var gulp = require('gulp'),
    fs = require('fs'),
    minifyHTML = require('gulp-minify-html'),
    replace = require('gulp-replace');

gulp.task('optimizeHtml', function() {
	return gulp.src('app/**/*.html')
		.pipe(minifyHTML({
			quotes: true
		}))
		.pipe(replace(/<link href=\"\/styles\/main.css\"[^>]*>/, function(s) {
			var style = fs.readFileSync('/styles/main.css', 'utf8');
			return '<style>\n' + style + '\n</style>';
		}))
		.pipe(gulp.dest('dist/'));
});
