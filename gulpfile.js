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
 * Configuration
 * @type {object}
 */
var config = {
  source: 'src',
  dist: 'dist'
};

/**
 * Clean Task. Cleans the build directories.
 * @external 'del()'
 * @see {@link https://github.com/gulpjs/gulp/blob/master/docs/API.md#gulptaskname--deps-fn}
 */
gulp.task('clean', function(done) {
	del([
    'dist/css/*',
    'dist/fonts/*',
    'dist/images/*',
    'dist/js/*'
  ], done());
});

/**
 * Scripts Task. Uglifies & concatenates JavaScript files
 * @external 'gulp.task'
 * @see {@link https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md}
 */
gulp.task('scripts', function(done) {

	/**
	 * Gulp Main Bower Files
	 * @external '.mainBowerFiles'
	 * @see {@link https://www.npmjs.com/package/gulp-main-bower-files}
	 */
	gulp.src(plugins.mainBowerFiles().concat([config.source + '/js/dataModel.js', config.source + '/js/viewModel.js']))

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

			.pipe(gulp.dest(config.dist + '/js'))

      done();
});

/**
 * Styles Task. Uglifies & concatenates scss files.
 * @external 'gulp.task'
 * @see {@link https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md}
 */
gulp.task('styles', function(done) {
  gulp.src(config.source + '/sass/*.scss')

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

	    .pipe(gulp.dest(config.dist + '/css'))

      done();
});

/**
 * Image Task. Minify images.
 * @external 'gulp.task'
 * @see {@link https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md}
 */
gulp.task('images', function(done) {
	gulp.src(config.source + '/images/*')

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

			.pipe(gulp.dest(config.dist + '/images'))

      done();
});

/**
 * Fonts Task. Move Font Awesome font files to dist.
 * @external 'gulp.task'
 * @see {@link https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md}
 */
gulp.task('fonts', function(done) {
	gulp.src(config.source + '/vendor/font-awesome/fonts/fontawesome-webfont.*')
			.pipe(gulp.dest(config.dist + '/fonts'))
      done();
});

/**
 * Watch Task. Watches for changes in JS and Scss files.
 * @external 'gulp.watch'
 * @see {@link https://github.com/gulpjs/gulp/blob/master/docs/API.md#gulpwatchglobs-opts-fn}
 */
gulp.task('watch', function(done) {

  gulp.watch(config.source + '/sass/**/*.scss', gulp.parallel('styles'));

  gulp.watch(config.source + '/js/**/*.js', gulp.parallel('styles'));

  done();
});

/**
 * Set the default Gulp task
 * @external 'gulp.task'
 * @see {@link https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md}
 */
gulp.task('default', gulp.series(
    'clean',
    gulp.parallel([
      'scripts',
      'styles',
      'images',
      'fonts'
    ]),
    'watch'
  )
);
