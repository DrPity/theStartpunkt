//some gulp config parts are based on patchwork from ayamflow (https://github.com/ayamflow/patchwork)

var browserSync = require('browser-sync');
var gulpLoadPlugins = require('gulp-load-plugins');
var fs = require('fs');
var tasks = fs.readdirSync('./gulp/');

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

tasks.forEach(function(task) {
  if(task.slice(-3) != '.js') return;
  require('./gulp/' + task);
});
