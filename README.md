# Map Panda

###### Project Overview

Project #5 of Udacity's [Front-End Web Developer Nanodegree](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001). The task was to develop a single-page application with [KnockoutJS](knockoutjs.com) featuring a map of your neighborhood or a neighborhood you would like to visit. Requirements included adding additional functionality to the application, including: map markers to identify popular locations, a search function to easily discover these locations, and a listview to support simple browsing of all locations. Research was also required into how to implement third-party APIs that provide additional information about each location (such as StreetView images, Wikipedia articles, Yelp reviews, etc).

###### Project Description

[Map Panda](https://mappanda.com) grabs the user's location with the [Geolocation API](http://dev.w3.org/geo/api/spec-source.html), and through the [Google Places API](https://developers.google.com/places/) a selection of popular location types are available to explore. The [Foursquare](https://developer.foursquare.com/) and [Uber](https://developer.uber.com/) APIs are leveraged to provide further functionality to the application.

## Getting Started

###### Live

Point your browser to https://mappanda.com

###### Local

###### 1. Clone this repo

```
$ git clone https://github.com/mikejoyceio/map
````

###### 2. Serve the application

```
$ python -m SimpleHTTPServer
```

Detailed Python Simple Server instructions can been found [here](https://docs.python.org/2/library/basehttpserver.html).

###### 3. Open the application

```
$ open "http://localhost:8000"
```

NOTE: If you would like to serve the application locally without Python Simple Server, make sure to serve on port 8000 otherwise the Uber API will not return ride price estimates.

## The Build

The [Gulp](http://gulpjs.com/) streaming build system is used in this project to minify, concatenate and move files to the appropriate directories. Build files have already been added to the repo and can be found in the [dist](dist) directory.

[Gulp Sass](https://www.npmjs.com/package/gulp-sass) and [Gulp Autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) are used to generate cross-browser CSS.

If you're feeling a little adventurous and would like to run the build yourself locally, you will need to:

###### Install Yarn

Yarn can be installed through the [Homebrew package manager](https://brew.sh/). This will also install [Node.js](https://nodejs.org/) (which is required) if it is not already installed.

Details installation instructions for all operating systems can be found [here](https://yarnpkg.com/en/docs/install)

To make sure you have Yarn installed, run the following command to check the version:

```
$ yarn -v
```

###### Install Dependencies

```
$ yarn install 
```

###### Install Bower Packages

```
$ bower install
```

## Running the Build

[Gulp](http://gulpjs.com/) minifies, concatenates and moves files to the appropriate directories by utilizing pre-defined [tasks](https://github.com/gulpjs/gulp/blob/master/docs/CLI.md#tasks) which can be found in [gulpfile.js](gulpfile.js). The following commands need to be ran from the root of the project.

###### Default Task

```
$ gulp
```

This command runs the default Gulp task in [gulpfile.js](gulpfile.js) and runs the both the styles and scripts tasks. The styles task concatenates and minifies all of the [Sass](http://sass-lang.com/) partials in [source/sass](source/sass) and compiles to a single file ([app.css](dist/css/app.css)) in [dist/css](dist/css). The scripts task concatenates and minifies all JavaScript files in [source/js](source/js), including all of the main Bower package JavaScript in [source/vendor](source/vendor) and compiles to a single file ([app.js](dist/js/app.js)) in [dist/js](dist/js).

###### Watch Task

```
$ gulp watch
```

This command runs the watch task, which watches both the [source/sass](source/sass) and [source/js](source/js) directories for changes and runs their respective tasks.

###### Images Task

```
$ gulp images
```

This command runs the images task in [gulpfile.js](gulpfile.js). Images in [source/images](source/images) will be optimized and moved to [dist/images](dist/images).

###### Fonts Task

```
$ gulp fonts
```

This command runs the fonts task, which transfers the Font Awesome font files to [dist/fonts](dist/fonts).

## Resources

###### Node Modules

- [Bower](https://www.npmjs.com/package/bower)
- [Gulp](https://www.npmjs.com/package/gulp)
- [Gulp Autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)
- [Gulp Concat](https://www.npmjs.com/package/gulp-concat)
- [Gulp Filter](https://www.npmjs.com/package/gulp-filter)
- [Gulp ImageMin](https://www.npmjs.com/package/gulp-imagemin)
- [Gulp Load Plugins](https://www.npmjs.com/package/gulp-load-plugins)
- [Gulp Clean CSS](https://www.npmjs.com/package/gulp-clean-css)
- [Gulp Plumber](https://www.npmjs.com/package/gulp-plumber)
- [Gulp Uglify](https://www.npmjs.com/package/gulp-uglify)
- [Gulp Main Bower Files](https://www.npmjs.com/package/gulp-main-bower-files)
- [Imagemin JPEG Recompress](https://www.npmjs.com/package/imagemin-jpeg-recompress)

###### Bower Packages

- [Animate SASS](https://github.com/tgdev/animate-sass)
- [Clipboard.js](https://zenorocha.github.io/clipboard.js/)
- [Compass.js](https://github.com/mikejoyceio/compass.js)
- [ES6 Promise Polyfill](https://github.com/jakearchibald/es6-promise)
- [Font Awesome](https://github.com/FortAwesome/Font-Awesome)
- [Font Awesome Markers](https://github.com/mikejoyceio/fontawesome-markers)
- [Google Maps Infobox](https://github.com/mikejoyceio/google-maps-infobox)
- [Ion Range Slider](https://github.com/IonDen/ion.rangeSlider)
- [jQuery](https://github.com/jquery/jquery)
- [jQuery Mousewheel](https://github.com/jquery/jquery-mousewheel)
- [Google Maps Rich Marker](https://github.com/mikejoyceio/js-rich-marker)
- [KnockoutJS](https://github.com/knockout/knockout)
- [Knockout Animate](https://github.com/mikejoyceio/Knockout-Animate)
- [Malihu Custom Scrollbar](https://github.com/malihu/malihu-custom-scrollbar-plugin)
- [Wheelnav](https://github.com/mikejoyceio/wheelnav)

NOTE: Many of these repos have been forked because the bower.json configuration files were either missing the 'main' property or it was incomplete. [Gulp Load Plugins](https://www.npmjs.com/package/gulp-load-plugins) requires this property to automatically include main JavaScript files in the build. Further information can be found in the [bower.json specification](https://github.com/bower/spec/blob/master/json.md).
