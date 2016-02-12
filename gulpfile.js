/**
 * @file Gulpfile
 * @file overview Gulp build configuration
 * @author Mike Joyce [hello@mikejoyce.io]
 */

/**
 * Load Gulp
 * @type {object}
 * @external 'require('gulp')'
 * @see {@link http://gulpjs.com/}
 */
var gulp = require('gulp');

/**
 * Load Del
 * @type {object}
 * @external 'require('del')'
 * @see {@link https://www.npmjs.com/package/del}
 */
var del = require('del');

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
 * Clean Task.
 * Cleans the build directories
 * @external 'del()'
 * @see {@link https://github.com/gulpjs/gulp/blob/master/docs/API.md#gulptaskname--deps-fn}
 */
gulp.task('clean', function(c) {
	del(['dist/js/*', 'dist/css/*']);
});

/**
 * Scripts Task. Uglifies & concatenates JavaScript files
 * @external 'gulp.task'
 * @see {@link https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md}
 */
gulp.task('scripts', function() {
	/**
	 * Gulp Main Bower Files
	 * @external '.mainBowerFiles'
	 * @see {@link https://www.npmjs.com/package/gulp-main-bower-files}
	 */
	gulp.src(plugins.mainBowerFiles().concat(['src/js/dataModel.js', 'src/js/viewModel.js']))
			/**
			 * Gulp Filter
			 * @external '.filter'
			 * @see {@link https://www.npmjs.com/package/gulp-filter}
			 */
			.pipe(plugins.filter('*.js'))
			/**
			 * Gulp Concat
			 * @external '.concat'
			 * @see {@link https://www.npmjs.com/package/gulp-concat}
			 */
			.pipe(plugins.concat('app.js'))
			/**
			 * Gulp Uglify
			 * @external '.uglify'
			 * @see {@link https://www.npmjs.com/package/gulp-uglify}
			 */
			.pipe(plugins.uglify())
			.pipe(gulp.dest('./dist/js'))
});

/**
 * Styles Task. Uglifies & concatenates scss files.
 * @external 'gulp.task'
 * @see {@link https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md}
 */
gulp.task('styles', function() {
  gulp.src('./src/sass/*.scss')
	  	/**
	  	 * Gulp Compass
	  	 * @external '.compass'
	  	 * @see {@link https://www.npmjs.com/package/gulp-compass}
	  	 */
	    .pipe(plugins.compass({
	      project: path.join(__dirname, './src'),
	      css: '../dist/css',
	      sass: 'sass',
	      style: 'compressed',
	      import_path: 'vendor'
	    }))
	    .pipe(gulp.dest('../dist/css'))
});

/**
 * Image Task. Minify images.
 * @external 'gulp.task'
 * @see {@link https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md}
 */
gulp.task('images', function() {
	gulp.src('./src/images/*')
			/**
			 * Gulp Imagemin
			 * @external '.imagemin()'
			 * @see {@link https://www.npmjs.com/package/gulp-imagemin}
			 */
			.pipe(plugins.imagemin())
			.pipe(gulp.dest('./dist/images'))
});

/**
 * Fonts Task. Move Font Awesome font files to dist.
 * @external 'gulp.task'
 * @see {@link https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md}
 */
gulp.task('fonts', function() {
	gulp.src('./src/vendor/font-awesome/fonts/fontawesome-webfont.*')
			.pipe(gulp.dest('./dist/fonts'))
});

/**
 * Set the default Gulp task
 * @external 'gulp.task'
 * @see {@link https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md}
 */
gulp.task('default', ['clean', 'scripts', 'styles']);
