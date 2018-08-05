/**
 * @file Gulpfile
 * @file overview Gulp build configuration
 * @author Mike Joyce [hello@mikejoyce.io]
 */

/**
 * Load Gulp
 * @type {Object}
 * @external 'gulp'
 * @see {@link http://gulpjs.com/}
 */
var gulp = require('gulp');

/**
 * Load Gulp Path
 * @type {Object}
 */
var path = require('path');

/**
 * Load del
 * @type {Object}
 * @external 'del'
 * @see {@link https://www.npmjs.com/package/del}
 */
var del = require('del');

/**
 * Load fs
 * @external 'fs'
 * @see {@link https://nodejs.org/api/fs.html#fs_file_system}
 * @type {Object}
 */
var fs = require('fs');

/**
 * Load jpeg-recompress imagemin plugin
 * @type {Object}
 * @external 'require('imagemin-jpeg-recompress')'
 * @see {@link https://www.npmjs.com/package/imagemin-jpeg-recompress}
 */
var imageminJpegRecompress = require('imagemin-jpeg-recompress');

/**
 * Load Gulp Plugins
 * @type {Object}
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
 * @type {Object}
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
    'dist/favicons/*',
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
	gulp.src(plugins.mainBowerFiles().concat([
        config.source + '/js/bindings/*',
        config.source + '/js/models/*',
      ]))

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
  gulp.src(config.source + '/scss/*.scss')

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
        browsers: [
          'last 2 versions',
          'ie >= 9',
          'and_chr >= 2.3'
        ]
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
 * Favicon Task. Generates a favicon for all major platforms.
 * @external '.realFavicon'
 * @see {@link https://www.npmjs.com/package/gulp-real-favicon}
 */
gulp.task('favicon', function(done) {
    plugins.realFavicon.generateFavicon({
      masterPicture: config.source + '/favicon/favicon.png',
      dest: config.dist + '/favicons',
      iconsPath: './',
      design: {
        ios: {
          pictureAspect: 'noChange',
          assets: {
            ios6AndPriorIcons: false,
            ios7AndLaterIcons: false,
            precomposedIcons: false,
            declareOnlyDefaultIcon: true
          }
        },
        desktopBrowser: {},
        windows: {
          pictureAspect: 'noChange',
          backgroundColor: '#2eb398',
          onConflict: 'override',
          assets: {
            windows80Ie10Tile: false,
            windows10Ie11EdgeTiles: {
              small: false,
              medium: true,
              big: false,
              rectangle: false
            }
          }
        },
        androidChrome: {
          pictureAspect: 'noChange',
          themeColor: '#ffffff',
          manifest: {
            name: 'Map Panda',
            display: 'standalone',
            orientation: 'notSet',
            onConflict: 'override',
            declared: true
          },
          assets: {
            legacyIcon: false,
            lowResolutionIcons: false
          }
        },
        safariPinnedTab: {
          pictureAspect: 'blackAndWhite',
          threshold: 78.125,
          themeColor: '#2eb398'
        }
      },
      settings: {
        scalingAlgorithm: 'Mitchell',
        errorOnImageTooSmall: false,
        readmeFile: false,
        htmlCodeFile: false,
        usePathAsIs: false
      },
      markupFile: 'favicon.json'
    }, function() {
      done();
    });
  }
);

/**
 * Favicon Update Task. Check for updates on RealFaviconGenerator.
 * @external '.realFavicon'
 * @see {@link https://www.npmjs.com/package/gulp-real-favicon}
 */
gulp.task('favicon-update', function(done) {
  var currentVersion;
  currentVersion = JSON.parse(fs.readFileSync('favicon.json')).version;
  plugins.realFavicon.checkForUpdates(currentVersion, function(err) {
    if (err) {
      throw err;
    }
  });
});

/**
 * Watch Task. Watches for changes in JS and SCSS files.
 * @external 'gulp.watch'
 * @see {@link https://github.com/gulpjs/gulp/blob/master/docs/API.md#gulpwatchglobs-opts-fn}
 */
gulp.task('watch', function(done) {
  gulp.watch(config.source + '/scss/**/*.scss', gulp.parallel('styles'));
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
      'favicon',
      'fonts',
      'images',
      'scripts',
      'styles'
    ]),
    'watch'
  )
);
