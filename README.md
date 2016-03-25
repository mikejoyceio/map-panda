#Map Panda

######Project Overview

Project #5 of Udacity's [Front-End Web Developer Nanodegree](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001). The task was to develop a single-page application with [KnockoutJS](knockoutjs.com) featuring a map of your neighborhood or a neighborhood you would like to visit. Requirements included adding additional functionality to the application, including: map markers to identify popular locations, a search function to easily discover these locations, and a listview to support simple browsing of all locations. Research was also required into how to implement third-party APIs that provide additional information about each location (such as StreetView images, Wikipedia articles, Yelp reviews, etc).

######Project Description

[Map Panda](https://mappanda.co) grabs the user's location with the [Geolocation API](http://dev.w3.org/geo/api/spec-source.html), and through the [Google Places API](https://developers.google.com/places/) a selection of popular location types are available to explore. The [Foursquare](https://developer.foursquare.com/) and [Uber](https://developer.uber.com/) APIs are leveraged to provide further functionality to the application.

##Getting Started

Point your browser to https://mappanda.co

If you would like to get it up and running locally:

**1.** Clone this repo:

```
$ git clone https://github.com/mikejoyceio/map
````

**2.** Run the following Python command from the root of the project:

```
$ python -m SimpleHTTPServer
```

**3.** Open your favorite browser:

Then point your browser to [http://localhost:8000](http://localhost:8000)

Detailed Python Simple Server instructions can been found [here](https://docs.python.org/2/library/basehttpserver.html).

NOTE: If you would like to serve the application locally without Python Simple Server, make sure to serve on port 8000 otherwise the Uber API will not return ride price estimates.

##The Build

The [Gulp](http://gulpjs.com/) streaming build system is used in this project to minify, concatenate and move files to the appropriate directories. Build files have already been added to the repo and can be found in the [dist](dist) directory.

[Sass](http://sass-lang.com/), along with the [Compass](http://compass-style.org/) CSS authoring framework, are used to generate cross-browser CSS. You will need to have [Ruby](https://www.ruby-lang.org/) installed (which is preinstalled on OS X) to be able to compile Sass and utilize Compass.

If you're feeling a little adventurous and would like to run the build yourself locally, you will need to:

**1.** Install Compass:

```
$ gem update --system
$ gem install compass
```

Detailed installation instructions can been found [here](http://compass-style.org/install/).

######Install NodeJS

Download a pre-compiled binary package from [here](https://nodejs.org/en/).

**2.** Install Gulp:

```
$ sudo npm install --save-dev gulp
```

Detailed installation instructions can been found [here](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md).

**3.** Install Gulp Plugins:

```
$ sudo npm install
```

**4.** Install Bower:

```
$ npm install -g bower
```

Detailed installation instructions can been found [here](http://bower.io/#getting-started).

**5.** Install Bower Packages:

```
$ bower install
```

##Running the Build

######Minify and concatenate CSS and JavaScript files

```
$ gulp
```

This command runs the default Gulp task in [gulpfile.js](gulpfile.js) and runs the both the styles and scripts tasks. The styles task concatenates and minifies all of the [Sass](http://sass-lang.com/) partials in [src/sass](src/sass) and compiles to a single file ([app.css](dist/css/app.css)) in [dist/css](dist/css). The scripts task concatenates and minifies all JavaScript files in [src/js](src/js), including all of the main Bower package JavaScript in [src/vendor](src/vendor) and compiles to a single file ([app.js](dist/js/app.js)) in [dist/js](dist/js).

######Optimize Images

```
$ gulp images
```

This command runs the images task in [gulpfile.js](gulpfile.js). Images in [src/images](src/images) will be optimized and moved to [dist/images](dist/images).

######Fonts

```
$ gulp fonts
```

This command runs the fonts task, which transfers the Font Awesome font files to [dist/fonts](dist/fonts).

##Package Management

[Bower](http://bower.io/) is used to keep track of frameworks, libraries, assets, and utilities. Packages will be installed in [src/vendor](src/vendor).

######Install Bower

```
$ npm install -g bower
```

Problems? Detailed installation instructions can been found [here](http://bower.io/).

######Install Bower Packages

```
$ bower install
```

##Resources

######Node Modules

- [Gulp](https://www.npmjs.com/package/gulp)
- [Gulp Compass](https://www.npmjs.com/package/gulp-compass)
- [Gulp Concat](https://www.npmjs.com/package/gulp-concat)
- [Gulp Filter](https://www.npmjs.com/package/gulp-filter)
- [Gulp ImageMin](https://www.npmjs.com/package/gulp-imagemin)
- [Gulp Live Reload](https://www.npmjs.com/package/gulp-livereload)
- [Gulp Load Plugins](https://www.npmjs.com/package/gulp-load-plugins)
- [Gulp MinifyCSS](https://www.npmjs.com/package/gulp-minify-css)
- [Gulp Plumber](https://www.npmjs.com/package/gulp-plumber)
- [Gulp Uglify](https://www.npmjs.com/package/gulp-uglify)
- [Gulp Main Bower Files](https://www.npmjs.com/package/gulp-main-bower-files)

######Bower Packages

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

######Build Tools

- [A Beginners Guide to Using Bower & Gulp](http://andy-carter.com/blog/a-beginners-guide-to-package-manager-bower-and-using-gulp-to-manage-components) by Andy Carter
- [Automatically Load Gulp Plugins](http://andy-carter.com/blog/automatically-load-gulp-plugins-with-gulp-load-plugins) by Andy Carter
- [Gulp](http://gulpjs.com/)
- [Level Up Tuts: Learning Gulp](http://leveluptuts.com/tutorials/learning-gulp/)
- [Setting up Gulp, Bower, Bootstrap Sass, & FontAwesome](http://ericlbarnes.com/setting-gulp-bower-bootstrap-sass-fontawesome/) by Eric L. Barnes
- [Stack Overflow: Installing a dependency with Bower from URL and specify version](http://stackoverflow.com/questions/19348076/installing-a-dependency-with-bower-from-url-and-specify-version)

######SASS

- [Animate SASS: A Sassy version of Dan Eden's Animate.css](https://github.com/tgdev/animate-sass)
- [Compass: Keyframe animation example](http://codepen.io/dwarcher/pen/yinsq)
- [Compass: SASS Authoring Framework](http://compass-style.org/help/documentation/)
- [Sitepoint: Architecture of a SASS Project](http://www.sitepoint.com/architecture-sass-project/)
- [The SASS Way: How to Structure a SASS Project](http://thesassway.com/beginner/how-to-structure-a-sass-project)

######CSS

- [Change Browser Highlight Colour](http://www.paulund.co.uk/change-browser-highlight-colour) by Paul Lund
- [CSS Ellipsis](http://html5hub.com/ellipse-my-text/)
- [CSS Transforms and Z-Index](http://daneden.me/2012/04/22/css-transforms-and-z-index/) by Daniel Eden
- [CSS Tricks: appearance](https://css-tricks.com/almanac/properties/a/appearance/)
- [Mozilla Developer Network: CSS Position](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
- [Mozilla Developer Network: CSS Transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
- [Name that Color](http://chir.ag/projects/name-that-color/#8C8C8C) by Chirag Mehta
- [“before” pseudo element with Font Awesome ](http://nuttify.com/help/developer-manual/coding-style-guide/css-style-guide/css-tricks-before-pseudo-element-with-fontawesome/) by Ajax McKerral

######Font

- [Google Fonts: Lato](https://www.google.com/fonts/specimen/Lato)
- [HTML5 Rocks: Antialiasing 101](http://www.html5rocks.com/en/tutorials/internals/antialiasing-101/)

######Icon Font

- [Font Awesome to PNG Converter](http://fa2png.io/)
- [Font Awesome](https://fortawesome.github.io/Font-Awesome/examples/#animated)

######HTML

- [Can I Use: Search input type](http://caniuse.com/#search=search%20input)
- [HTML input type=search](https://html.spec.whatwg.org/multipage/forms.html#text-(type=text)-state-and-search-state-(type=search))
- [HTML5 Doctor: The Main Element](http://html5doctor.com/the-main-element/)
- [Mozilla Developer Network: Input Element](https://developer.mozilla.org/en/docs/Web/HTML/Element/Input)
- [Using WAI-ARIA in HTML](http://w3c.github.io/aria-in-htmlUsing WAI-ARIA in HTML/)

######Images

- [Daturi - Convert images to base64](http://www.daturi.me/)
- [Favicon Generator](http://realfavicongenerator.net/)
- [Make Use Of - Convert Raster Images to Vector](http://www.makeuseof.com/tag/convert-images-to-svg-format-with-inkscape/)
- [Gimp: GNU Image Manipulation Program](https://www.gimp.org/)

######JavaScript

- [An Introduction to JSDoc](http://www.2ality.com/2011/08/jsdoc-intro.html)
- [Caniuse: Geolocation](http://caniuse.com/#search=geo)
- [Detecting operating system with JavaScript](http://www.javascripter.net/faq/operatin.htm)
- [Developing Large Scale KnockoutJS Applications](http://blog.scottlogic.com/2014/02/28/developing-large-scale-knockoutjs-applications.html) by Robat Williams
- [Google: JavaScript Style Guide](https://google.github.io/styleguide/javascriptguide.xml)
- [How to emulate touch events in Chrome](https://frontify.com/blog/how-to-emulate-touch-events-in-chrome/)
- [HTML Goodies: HTML5 Geolocation](http://www.htmlgoodies.com/html5/Web-Developer-Class-HTML5-Geolocation-3917596.htm#fbid=H6Q5EbyzCoF)
- [HTML5 Geolocation](http://html5demos.com/geo)
- [HTML5 Rocks: JavaScript Promises](http://www.html5rocks.com/en/tutorials/es6/promises/#toc-javascript-promises)
- [JSDoc](http://usejsdoc.org/tags-file.html)
- [Mozilla Developer Network: typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
- [Mozilla Developer Network: Array ForEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [Mozilla Developer Network: location.reload()](https://developer.mozilla.org/en-US/docs/Web/API/Location/reload)
- [Mozilla Developer Network: Math.round()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round)
- [Mozilla Developer Network: String.length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length)
- [Mozilla Developer Network: String.prototype.charAt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)
- [Mozilla Developer Network: String.prototype.indexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)
- [Mozilla Developer Network: Using the Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- [Named Function Expressions Demystified](http://kangax.github.io/nfe/) by Juriy "Kangax" Zaytsev)
- [Pragmatic Standards: JavaScript Coding Standards and Best Practices](https://github.com/stevekwan/best-practices/blob/master/javascript/best-practices.md)
- [Programmers Stack Exchange: How can we protect the namespace of an object in JavaScript](http://programmers.stackexchange.com/questions/161436/how-can-we-protect-the-namespace-of-an-object-in-javascript)
- [Reddit: JavaScript - Naming conventions for AJAX request callbacks](https://www.reddit.com/r/javascript/comments/16zuth/what_are_your_conventions_for_naming_callbacks/)
- [Stack Exchange GIS: How to measure the accuracy of latitude and longitude?](http://gis.stackexchange.com/questions/8650/how-to-measure-the-accuracy-of-latitude-and-longitude)
- [Stack Overflow: HTML Geolocation High Accuracy](http://stackoverflow.com/questions/16202077/high-accuracy-geolocation-html5)
- [Stack Overflow: JavaScript Hoisting in Chrome & Firefox](http://stackoverflow.com/questions/14242399/javascript-hoisting-in-chrome-and-firefox)
- [Stack Overflow: Returning a variable from $.getJSON](http://stackoverflow.com/questions/31129/how-can-i-return-a-variable-from-a-getjson-function)

######Knockout JS

- [KnockoutJS Docs](http://knockoutjs.com/documentation/introduction.html)
- [KnockoutJS: Mapping Plugin](http://knockoutjs.com/documentation/plugins-mapping.html)
- [KnockoutJS: Notification Plugin](https://github.com/janhartigan/Knockout-Notification)
- [KnockoutJS: Animate Plugin](https://github.com/TheGAFF/Knockout-Animate)
- [The Top 10 Mistakes That KnockoutJS Developers Make](https://www.airpair.com/knockout/posts/top-10-mistakes-knockoutjs) By Mike Mellentin

######jQuery

- [jQuery Docs: .ajax()](http://api.jquery.com/jQuery.ajax/)
- [jQuery Docs: .blur()](https://api.jquery.com/blur/)
- [jQuery Docs: .focus()](https://api.jquery.com/focus/)
- [jQuery Docs: .removeClass()](http://api.jquery.com/removeClass/)

######Google Maps

- [Font Awesome Markers](https://github.com/nathan-muir/fontawesome-markers)
- [Google Maps JavaScript Api](https://developers.google.com/maps/documentation/javascript)
- [Google Places Api](https://developers.google.com/places/supported_types)
- [InfoBox - A Google Maps JavaScript API utility library component](https://github.com/mikejoyceio/google-maps-infobox)
- [Map Icons](http://map-icons.com/)
- [RichMarker – A Google Maps JavaScript API utility library component](https://github.com/mikejoyceio/js-rich-marker)
- [Snazzy Maps: Styles for Google Maps](https://snazzymaps.com/)
- [Stack Overflow: Custom Google Map API V3 Zoom Buttons ](http://stackoverflow.com/questions/7916555/custom-google-map-api-v3-zoom-buttons)
- [Stack Overflow: Google Maps API Over Query per second limit](http://stackoverflow.com/questions/14014074/google-maps-api-over-query-limit-per-second-limit)
- [Stack Overflow: Google Places getUrl() is breaking my JavaScript](http://stackoverflow.com/questions/22459910/google-places-photos-geturl-is-breaking-my-javascript)
- [Stack Overflow: HTML Geolocation stopped working in Google Chrome Version 44.0.2403.157 (64-bit)](http://stackoverflow.com/questions/32328133/in-new-chrome-44-0-2403-157-geolocations-doesnt-works)
- [Stack Overflow: Using Icon Fonts as Markers in Google Maps V3](http://stackoverflow.com/questions/16375077/using-icon-fonts-as-markers-in-google-maps-v3)


######Apache HTTP Server

- [Enable CORS on Apache](http://enable-cors.org/server_apache.html)

######General Programming

- [Stack Exchange: What is abstraction?](http://programmers.stackexchange.com/questions/16070/what-is-abstraction)

######Foursquare

- [Foursquare for Developers: Foursquare API](https://developer.foursquare.com/)
- [Foursquare for Developers: Api Docs - Search Venus](https://developer.foursquare.com/docs/venues/search)

######Uber

- [Uber Developer: Tutorials](https://developer.uber.com/v1/tutorials/)
- [Uber Devloper: Design Guidelines](https://developer.uber.com/v1/design-guidelines/)
- [Thinkful: Uber API Tutorial](https://www.thinkful.com/learn/uber-api/)
