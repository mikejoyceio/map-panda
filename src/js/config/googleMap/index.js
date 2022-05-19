/**
 * @file Google Map configuration
 */

/**
 * @type {Object}
 */
var googleMapConfig = {

  /**
   * Initial map zoom level
   * @type {number}
   * @see {@link https://developers.google.com/maps/documentation/static-maps/intro?hl=en#Zoomlevels}
   */
  zoom: 15,

  /**
   * Show/hide map zoom controls
   * @type {boolean}
   * @see {@link https://developers.google.com/maps/documentation/javascript/controls}
   */
  zoomControl: false,

  /**
   * Show/hide map type control
   * @type {boolean}
   * @see {@link https://developers.google.com/maps/documentation/javascript/controls}
   */
  mapTypeControl: false,

   /**
   * Show/hide map street view control
   * @type {boolean}
   * @see {@link https://developers.google.com/maps/documentation/javascript/controls}
   */
  streetViewControl: false,

  /**
   * Show/hide map pan control
   * @type {boolean}
   * @see {@link https://developers.google.com/maps/documentation/javascript/controls}
   */
  panControl: false,

  /**
   * Show/hide fullscreen control
   * @type {boolean}
   * @see {@link https://developers.google.com/maps/documentation/javascript/controls}
   */
  fullscreenControl: false,

  /**
   * Set a custom styled map
   * @type {Array}
   * @see {@link https://developers.google.com/maps/documentation/javascript/styling}
   */
  styles: [
    {
      "elementType": "labels.text",
      "stylers": [{
          "visibility": "simplified"
      }]
    }, {
      "featureType": "landscape.natural",
      "elementType": "geometry.fill",
      "stylers": [{
          "color": "#f5f5f2"
      }, {
          "visibility": "simplified"
      }]
    }, {
      "featureType": "administrative",
      "stylers": [{
          "visibility": "off"
      }]
    }, {
      "featureType": "transit",
      "stylers": [{
          "visibility": "simplified"
      }]
    }, {
      "featureType": "poi.attraction",
      "stylers": [{
          "visibility": "simplified"
      }]
    }, {
      "featureType": "landscape.man_made",
      "elementType": "geometry.fill",
      "stylers": [{
          "color": "#ffffff"
      }, {
          "visibility": "simplified"
      }]
    }, {
      "featureType": "poi.business",
      "stylers": [{
          "visibility": "simplified"
      }]
    }, {
      "featureType": "poi.medical",
      "stylers": [{
          "visibility": "simplified"
      }]
    }, {
      "featureType": "poi.place_of_worship",
      "stylers": [{
          "visibility": "simplified"
      }]
    }, {
        "featureType": "poi.school",
        "stylers": [{
            "visibility": "simplified"
        }]
    }, {
      "featureType": "poi.sports_complex",
      "stylers": [{
          "visibility": "simplified"
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [{
          "color": "#ffffff"
      }, {
          "visibility": "simplified"
      }]
    }, {
      "featureType": "road.arterial",
      "stylers": [{
          "visibility": "simplified"
      }, {
          "color": "#ffffff"
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "labels.icon",
      "stylers": [{
          "color": "#ffffff"
      }, {
          "visibility": "simplified"
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "labels.icon",
      "stylers": [{
          "visibility": "simplified"
      }]
    }, {
      "featureType": "road.arterial",
      "stylers": [{
          "color": "#ffffff"
      }]
    }, {
      "featureType": "road.local",
      "stylers": [{
          "color": "#ffffff"
      }]
    }, {
      "featureType": "poi.park",
      "elementType": "labels.icon",
      "stylers": [{
          "visibility": "simplified"
      }]
    }, {
      "featureType": "poi",
      "elementType": "labels.icon",
      "stylers": [{
          "visibility": "simplified"
      }]
    }, {
      "featureType": "water",
      "stylers": [{
          "color": "#71c8d4"
      }]
    }, {
      "featureType": "landscape",
      "stylers": [{
          "color": "#e5e8e7"
      }]
    }, {
      "featureType": "poi.park",
      "stylers": [{
          "color": "#8ba129"
      }]
    }, {
      "featureType": "road",
      "stylers": [{
          "color": "#ffffff"
      }]
    }, {
      "featureType": "poi.sports_complex",
      "elementType": "geometry",
      "stylers": [{
          "color": "#c7c7c7"
      }, {
          "visibility": "simplified"
      }]
    }, {
      "featureType": "water",
      "stylers": [{
          "color": "#a0d3d3"
      }]
    }, {
      "featureType": "poi.park",
      "stylers": [{
          "color": "#91b65d"
      }]
    }, {
      "featureType": "poi.park",
      "stylers": [{
          "gamma": 1.51
      }]
    }, {
      "featureType": "road.local",
      "stylers": [{
          "visibility": "simplified"
      }]
    }, {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [{
          "visibility": "simplified"
      }]
    }, {
      "featureType": "poi.government",
      "elementType": "geometry",
      "stylers": [{
          "visibility": "simplified"
      }]
    }, {
      "featureType": "landscape",
      "stylers": [{
          "visibility": "simplified"
      }]
    }, {
      "featureType": "road",
      "elementType": "labels",
      "stylers": [{
          "visibility": "simplified"
      }]
    }, {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [{
          "visibility": "simplified"
      }]
    }, {
      "featureType": "road.local",
      "stylers": [{
          "visibility": "simplified"
      }]
    }, {
      "featureType": "road",
      "elementType": "labels",
      "stylers": [{
          "color": "#444444"
      }, {
          "saturation": "-100"
      }, {
          "invert_lightness": "false"
      }]
    }, {
      "featureType": "road",
      "elementType": "labels.icon",
      "stylers": [{
          "visibility": "off"
      }]
    }, {
      "featureType": "road"
    }, {
      "featureType": "road"
    }, {}, {
      "featureType": "road.highway"
    }]
};

export default googleMapConfig;
