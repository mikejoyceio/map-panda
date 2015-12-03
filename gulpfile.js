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
			//.pipe(plugins.uglify())
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
	      // style: 'compressed',
	      import_path: 'vendor'
	    }))
	    /**
	     * Gulp Minify CSS
	     * @external '.minifyCss'
	     * @see {@link https://www.npmjs.com/package/gulp-minify-css}
	     */
	    .pipe(plugins.minifyCss())
	    .pipe(gulp.dest('../dist/css'))
});

/**
 * Image Task. Minify images.
 * @external 'gulp.task'
 * @see {@link https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md}
 */
gulp.task('image', function() {
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
 * Set the default Gulp task
 * @external 'gulp.task'
 * @see {@link https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md}
 */
gulp.task('default', ['scripts', 'styles', 'image']);
