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
 * Load Gulp Path
 * @type {object}
 */
var path = require('path');

/**
 * Load Node Del
 * @type {object}
 * @external 'require('del')'
 * @see {@link https://www.npmjs.com/package/del}
 */
var del = require('del');

/**
 * Load jpeg-recompress imagemin plugin
 * @type {object}
 * @external 'require('imagemin-jpeg-recompress')'
 * @see {@link https://www.npmjs.com/package/imagemin-jpeg-recompress}
 */
var imageminJpegRecompress = require('imagemin-jpeg-recompress');

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
 * Clean Task.
 * Cleans the build directories
 * @external 'del()'
 * @see {@link https://github.com/gulpjs/gulp/blob/master/docs/API.md#gulptaskname--deps-fn}
 */
gulp.task('clean', function(c) {
	del([
    'dist/css/*',
    'dist/fonts/*',
    'dist/images/*',
    'dist/js/*'
  ]);
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
	  	 * Gulp Sass
	  	 * @external '.sass'
	  	 * @see {@link https://www.npmjs.com/package/gulp-sass}
	  	 */
      .pipe(plugins.sass({
        css: './',
        style: 'expanded',
        sourceMap: false
      }).on('error', plugins.sass.logError))

      /**
       * Gulp Autoprefixer
       * @external '.autoprefixer'
       * @see {@link https://www.npmjs.com/package/gulp-autoprefixer}
       */
	    .pipe(plugins.autoprefixer({
        browsers: ['last 2 versions', 'ie >= 9', 'and_chr >= 2.3']
      }))

       /**
       * Gulp Clean CSS
       * @external '.cleanCss'
       * @see {@link https://www.npmjs.com/package/gulp-clean-css}
       */
      .pipe(plugins.cleanCss())

	    .pipe(gulp.dest('./dist/css'))
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
			.pipe(plugins.imagemin([
        imageminJpegRecompress({
          loops: 4,
          min: 50,
          max: 95,
          quality: 'high'
        })
      ]))

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
 * Watch Task. Watches for changes in JS and Scss files.
 * @external 'gulp.watch'
 * @see {@link https://github.com/gulpjs/gulp/blob/master/docs/API.md#gulpwatchglobs-opts-fn}
 */
gulp.task('watch', function() {
  gulp.watch("./src/sass/**/*.scss", ['styles']);
  gulp.watch("./src/js/**/*.js", ['scripts']);
});

/**
 * Set the default Gulp task
 * @external 'gulp.task'
 * @see {@link https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md}
 */
gulp.task('default', ['clean', 'scripts', 'styles', 'images', 'fonts']);
