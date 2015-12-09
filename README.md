#Map Panda

######Project Overview

Project #5 of Udacity's [Front-End Web Developer Nanodegree](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001). The task was to develop a single-page application with KnockoutJS featuring a map of your neighborhood or a neighborhood you would like to visit. Requirements included adding additional functionality to the application, including: map markers to identify popular locations, a search function to easily discover these locations, and a listview to support simple browsing of all locations. Research was also required into how to implement third-party APIs that provide additional information about each location (such as StreetView images, Wikipedia articles, Yelp reviews, etc).

######Project Description

[Map Panda](https://mappanda.co) grabs the user's location with the [Geolocation API](http://dev.w3.org/geo/api/spec-source.html), and through the [Google Places API](https://developers.google.com/places/) a selection of popular location types are available to explore. The [Foursquare](https://developer.foursquare.com/) and [Uber](https://developer.uber.com/) APIs are leveraged to provide further functionality to the application.

##Getting Started

Point your browser to https://mappanda.co. 

If you would like to get it up and running locally:

**1.** Clone this repo:

```
$ git clone https://github.com/mikejoyceio/map
````

**2.** Run the following Python command from the root of the project:

```
$ python -m SimpleHTTPServer
```

Then point your browser to http://localhost:8000.

Problems? Detailed usage instructions can been found [here](https://docs.python.org/2/library/basehttpserver.html).

##Build

The [Gulp](http://gulpjs.com/) streaming build system is used in this project to minify, concatenate and move files to the appropriate directories.

To be able to run the build system, you will need to have [Node JS](https://nodejs.org/en/download/package-manager/#osx) installed.

######Install Gulp

From the root of the project, run the following command in the terminal:

```
$ npm install --save-dev gulp
```

######Install Gulp Plugins

```
$ sudo npm install
```

Problems? Detailed installation instructions can been found [here](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md).

######Gulp Commands

Minify and concatenate CSS and JavaScript files:

```
$ gulp
```

This command runs the default Gulp task in [gulpfile.js](gulpfile.js) and runs the both the styles and scripts tasks. The styles task concatenates and minifies all of the [Sass](http://sass-lang.com/) partials in [src/sass](src/sass) and compiles to a single file ([app.css](dist/css/app.css)) in [dist/css](dist/css). The scripts task concatenates and minifies all JavaScript files in [src/js](src/js), including all of the main Bower package JavaScript in [src/vendor](src/vendor) and compiles to a single file ([app.js](dist/js/app.js)) in [dist/js](dist/js).

Optimize images:

```
$ gulp images
```

This command runs the images task in [gulpfile.js](gulpfile.js). Images in [src/images](src/images) will be optimized and moved to [dist/images](dist/images).

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
- [CSS Triangle Generator](http://apps.eky.hk/css-triangle-generator/)
- [CSS Tricks: appearance](https://css-tricks.com/almanac/properties/a/appearance/)
- [Mozilla Developer Network: CSS Position](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
- [Mozilla Developer Network: CSS Transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
- [Name that Color](http://chir.ag/projects/name-that-color/#8C8C8C) by Chirag Mehta
- [Nuttify: “before” pseudo element with Fontawesome ](http://nuttify.com/help/developer-manual/coding-style-guide/css-style-guide/css-tricks-before-pseudo-element-with-fontawesome/) by Ajax McKerral

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
- [Mozilla Developer Network](https://developer.mozilla.org/en/docs/Web/HTML/Element/Input)
- [Stack Overflow: How to you detect the clearing of a "search" HTML5 input?](http://stackoverflow.com/questions/2977023/how-do-you-detect-the-clearing-of-a-search-html5-input)
- [Using WAI-ARIA in HTML](http://w3c.github.io/aria-in-htmlUsing WAI-ARIA in HTML/)

######Images

- [Daturi - Convert images to base64](http://www.daturi.me/)
- [Favicon Generator](http://realfavicongenerator.net/)
- [Make Use Of - Convert Raster Images to Vector](http://www.makeuseof.com/tag/convert-images-to-svg-format-with-inkscape/)
- [Gimp: GNU Image Manipulation Program](https://www.gimp.org/)

######JavaScript

- [An Introduction to JSDoc](http://www.2ality.com/2011/08/jsdoc-intro.html)
- [Caniuse: Geolocation](http://caniuse.com/#search=geo)
- [Clipboard.js: A modern approach to copy text to clipboard](https://zenorocha.github.io/clipboard.js/)
- [Detecting operating system with JavaScript](http://www.javascripter.net/faq/operatin.htm)
- [Developing Large Scale KnockoutJS Applications](http://blog.scottlogic.com/2014/02/28/developing-large-scale-knockoutjs-applications.html) by Robat Williams
- [Google: JavaScript Style Guide](https://google.github.io/styleguide/javascriptguide.xml)
- [How to emulate touch events in Chrome](https://frontify.com/blog/how-to-emulate-touch-events-in-chrome/)
- [HTML Goodies: HTML5 Geolocation](http://www.htmlgoodies.com/html5/Web-Developer-Class-HTML5-Geolocation-3917596.htm#fbid=H6Q5EbyzCoF)
- [HTML5 Geolocation](http://html5demos.com/geo)
- [HTML5 Rocks: JavaScript Promises](http://www.html5rocks.com/en/tutorials/es6/promises/#toc-javascript-promises)
- [iNoBounce - Stop your iOS webapp from bouncing around when scrolling](https://github.com/lazd/iNoBounce)
- [Ion Range Slider](https://github.com/IonDen/ion.rangeSlider)
- [jQuery: Return data after ajax call success](http://stackoverflow.com/questions/5316697/jquery-return-data-after-ajax-call-success)
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
- [Polyfill for ES6-style Promises](https://github.com/jakearchibald/es6-promise)
- [Pragmatic Standards: JavaScript Coding Standards and Best Practices](https://github.com/stevekwan/best-practices/blob/master/javascript/best-practices.md)
- [Programmers Stack Exchange: How can we protect the namespace of an object in JavaScript](http://programmers.stackexchange.com/questions/161436/how-can-we-protect-the-namespace-of-an-object-in-javascript)
- [Reddit: JavaScript - Naming conventions for AJAX request callbacks](https://www.reddit.com/r/javascript/comments/16zuth/what_are_your_conventions_for_naming_callbacks/)
- [Stack Exchange GIS: How to measure the accuracy of latitude and longitude?](http://gis.stackexchange.com/questions/8650/how-to-measure-the-accuracy-of-latitude-and-longitude)
- [Stack Overflow: HTML Geolocation High Accuracy](http://stackoverflow.com/questions/16202077/high-accuracy-geolocation-html5)
- [Stack Overflow: JavaScript Hoisting in Chrome & Firefox](http://stackoverflow.com/questions/14242399/javascript-hoisting-in-chrome-and-firefox)
- [Stack Overflow: Returning a variable from $.getJSON](http://stackoverflow.com/questions/31129/how-can-i-return-a-variable-from-a-getjson-function)
- [The Top 10 Mistakes That KnockoutJS Developers Make](https://www.airpair.com/knockout/posts/top-10-mistakes-knockoutjs) By Mike Mellentin

######Apache

- [Enable CORS on Apache](http://enable-cors.org/server_apache.html)

######jQuery 

- [jQuery Docs: .ajax()](http://api.jquery.com/jQuery.ajax/)
- [jQuery Docs: .blur()](https://api.jquery.com/blur/)
- [jQuery Docs: .focus()](https://api.jquery.com/focus/)
- [jQuery Docs: .removeClass()](http://api.jquery.com/removeClass/)

######General Programming

- [Stack Exchange: What is abstraction?](http://programmers.stackexchange.com/questions/16070/what-is-abstraction)

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
- [SVGO: An Nodejs-based tool for optimizing SVG vector graphics files.](https://github.com/nathan-muir/svgo/tree/nathan-svgo)

######Knockout JS

- [KnockoutJS Docs](http://knockoutjs.com/documentation/introduction.html)
- [KnockoutJS: Mapping Plugin](http://knockoutjs.com/documentation/plugins-mapping.html)
- [KnockoutJS: Notification Plugin](https://github.com/janhartigan/Knockout-Notification)
- [KnockoutJS: Animate Plugin](https://github.com/TheGAFF/Knockout-Animate)

######Foursquare

- [Foursquare for Developers: Foursquare API](https://developer.foursquare.com/)
- [Foursquare for Developers: Api Docs - Search Venus](https://developer.foursquare.com/docs/venues/search)

######Uber

- [Uber Developer: Tutorials](https://developer.uber.com/v1/tutorials/)
- [Uber Devloper: Design Guidelines](https://developer.uber.com/v1/design-guidelines/)
- [Thinkful: Uber API Tutorial](https://www.thinkful.com/learn/uber-api/)
