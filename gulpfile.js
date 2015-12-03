/**
 * @file Gulpfile
 * @file overview Gulp build configuration
 * @author Mike Joyce [hello@mikejoyce.io]
 * @external 'gulp'
 * @see {@link http://gulpjs.com/}
 */

/**
 * Load Gulp
 * @type {object}
 */
var gulp = require('gulp');
/**
 * Load Gulp Plugins
 * @type {object}
 * @external 'gulpLoadPlugins'
 * @see {@link https://www.npmjs.com/package/gulp-load-plugins}
 */
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins({
	pattern: ['gulp-*', 'gulp.*', 'main-bower-files'],
	replaceString: /\bgulp[\-.]/
});
/**
 * Load Gulp Path 
 * @type {object}
 */
var path = require('path');

/**
 * Scripts Task. Uglifies & concatenates JavaScript files
 * @external 'gulp.task'
 * @see {@link https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md}
 */
gulp.task('scripts', function() {
	gulp.src(plugins.mainBowerFiles().concat(['src/js/mapMarkers.js', 'src/js/dataModel.js', 'src/js/viewModel.js'])) 		
		.pipe(plugins.filter('*.js'))
		.pipe(plugins.concat('app.js'))
		//.pipe(plugins.uglify())
		.pipe(gulp.dest('./dist/js'))	
});

/**
 * Styles Task. Uglifies & concatenates scss files.
 * @external 'gulp.task'
 * @see {@link https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md}
 */
gulp.task('compass', function() {
  gulp.src('./src/sass/*.scss')
    .pipe(plugins.compass({
      project: path.join(__dirname, './src'),
      css: '../dist/css',
      sass: 'sass',
      // style: 'compressed',
      import_path: 'vendor'
    }))
    .pipe(plugins.minifyCss())
    .pipe(gulp.dest('../dist/css'))
});

/**
 * Set the default Gulp task
 * @external 'gulp.task'
 * @see {@link https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md}
 */
gulp.task('default', ['scripts', 'compass']);
