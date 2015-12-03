
// Gulp File

var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins({
	pattern: ['gulp-*', 'gulp.*', 'main-bower-files'],
	replaceString: /\bgulp[\-.]/
});
var path = require('path');

// Scripts Task
// Uglifies / Concatenates
gulp.task('scripts', function() {
	gulp.src(plugins.mainBowerFiles().concat(['src/js/mapMarkers.js', 'src/js/dataModel.js', 'src/js/viewModel.js'])) 		
		.pipe(plugins.filter('*.js'))
		.pipe(plugins.concat('app.js'))
		//.pipe(plugins.uglify())
		.pipe(gulp.dest('./dist/js'))	
});

// Styles Task
// Uglifies / Concatenates
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

gulp.task('default', ['scripts', 'compass']);
