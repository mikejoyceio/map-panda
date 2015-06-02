var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins({
		pattern: ['gulp-*', 'gulp.*', 'main-bower-files'],
	replaceString: /\bgulp[\-.]/
});
var path = require('path');

// Scripts Task
// Uglifies / Concats
gulp.task('scripts', function() {
	gulp.src(plugins.mainBowerFiles().concat(['src/js/mapMarkers.js', 'src/js/dataModel.js', 'src/js/viewModel.js'])) 		
		.pipe(plugins.filter('*.js'))
		.pipe(plugins.concat('app.js'))
		//.pipe(plugins.uglify())
		.pipe(gulp.dest('./build/js'))	
		.pipe(plugins.livereload())
});

// Styles Task
// Uglifies
gulp.task('compass', function() {
  gulp.src('./src/sass/*.scss')
    .pipe(plugins.compass({
      project: path.join(__dirname, './src'),
      css: '../build/css',
      sass: 'sass',
      // style: 'compressed',
      import_path: 'vendor'
    }))
    .pipe(plugins.minifyCss())
    .pipe(gulp.dest('../build/css'))
    .pipe(plugins.livereload())
});

// Watch Task
// Watches for Changes in JS / SASS / HTML Files and reload
// Requires the LiveReload browser extension: http://livereload.com
gulp.task('watch', function() {

	plugins.livereload.listen();

	gulp.watch('src/js/*.js', ['scripts']);
	gulp.watch('src/sass/*.scss', ['compass']);
	gulp.watch('*.html').on('change', function(file) {
		plugins.livereload.changed(file.path);
	});
});

gulp.task('default', ['scripts', 'compass', 'watch']);