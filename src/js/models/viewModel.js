/**
 * @file View Model
 * @version 1.0
 * @author Mike Joyce [hello@mikejoyce.io]
 */

 import ko from 'knockout'
 import dataModel from './dataModel'
 import { RichMarker } from 'js-rich-marker'
 import { InfoBox } from 'google-maps-infobox'

/**
 * TODO:
 * - Add 'not supported' notice for older browsers
 * - Improve Uber deep-linking
 * - Add 'click' animations
 */

/**
 * View Model
 * @constructor
 */
var ViewModel = function() {

	/**
	 * Invoke strict mode
	 * @see {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Strict_mode}
	 */
	'use strict';

	/** Set a pointer reference to 'this' */
	var self = this;

	/**
	 * App Debug - set to true to console.log errors when debugging
	 * @type {boolean}
	 */
	this.appDebug = false;

	/**
	 * App Landing Action Visibility - show/hide the landing action button ('Find Me')
	 * @type {boolean}
	 */
	this.appLandingActionVisibility = ko.observable(false);

	/**
	 * App Landing Info Visibility - show/hide the landing information ('Explore popular locations around you.')
	 * @type {boolean}
	 */
	this.appLandingInfoVisibility = ko.observable(false);

	/**
	 * App Landing Visibility - show/hide the landing overlay
	 * @type {boolean}
	 */
	this.appLandingVisbility = ko.observable(true);

	/**
	 * App Landing Loading Visibility - show/hide the landing loading animation
	 * @type {boolean}
	 */
	this.appLandingLoadingVisibility = ko.observable(false)

	/**
	 * App reload visibility - show/hide the app reload button ('Reload Map Panda')
	 * @type {boolean}
	 */
	this.appReloadVisbility = ko.observable(false);

	/**
	 * App Swiping - set to true if user is swiping on a touch screen
	 * @type {boolean}
	 */
	this.appSwiping = ko.observable(false);

	/**
	 * App Viewport Width - stores the width of the browser viewport
	 * @type {number}
	 */
	this.appViewportWidth = ko.observable();

	/**
	 * App WheelNav - stores a global instance of the wheel navigation menu
	 * @type {object}
	 */
	this.appWheelNav = null;

	/**
	 * App Constants
	 * @type {Object}
	 */
	this.appConstants = {

		/**
		 * Default large image
		 * @const {string}
		 */
		DEFAULT_IMAGE_LARGE: 'dist/images/default-large.png',

		/**
		 * Default small image
		 * @const {string}
		 */
		DEFAULT_IMAGE_SMALL: 'dist/images/default-small.png',

		/**
		 * Foursquare API URL
		 * @const {string}
		 */
		FOURSQUARE_URL: 'https://foursquare.com/v/',

		/**
		 * Notification fade duration
		 * @type {number}
		 */
		NOTIFICATION_FADE_DURATION: 1000,

		/**
		 * Max map search radius
		 * @const {number}
		 */
		SEARCH_RADIUS_MAX: 10000,

		/**
		 * Min map search radius
		 * @const {number}
		 */
		SEARCH_RADIUS_MIN: 1000,

		/**
		 * Uber client ID
		 * @const {string}
		 */
		UBER_CLIENT_ID: 't4nJf4oEHYCwFZ_TvGsnIDc_raF7rFOn',

		/**
		 * Uber sign up URL
		 * @const {string}
		 */
		UBER_URL: 'https://m.uber.com/sign-up?'

	}


	/**
	 * Notification Fade Duration - default fade duration for user notification visibility
	 * @type {number}
	 */
	this.notificationFadeDuration = ko.observable(this.appConstants.NOTIFICATION_FADE_DURATION);

	/**
	 * Notification Keep Alive - if set to true, the notification will fade out
	 * @type {boolean}
	 */
	this.notificationKeepAlive = ko.observable(false);

	/**
	 * Notification Message - holds the user notification message
	 * @type {string}
	 */
	this.notificationMessage = ko.observable();


	/**
	 * Map - holds the Google map instance
	 * @type {Object}
	 */
	this.map = null;

	/**
	 * Map Current Latitude - the current latitude coordinate
	 * @type {number}
	 */
	this.mapCurrentLat = ko.observable();

	/**
	 * Map Current Longitude - the current longitude coordinate
	 * @type {number}
	 */
	this.mapCurrentLng = ko.observable();

	/**
	 * Map Info Visibility - show/hide the map information
	 * @type {boolean}
	 */
	this.mapInfoVisibility = ko.observable(false);

	/**
	 * Map Loader Visibility - shoe/hide the map loading animation
	 * @type {boolean}
	 */
	this.mapLoadingVisibility = ko.observable(false);

	/**
	 * Map Markers - stores an array of the map markers
	 * @type {Array.<object>}
	 */
	this.mapMarkers = ko.observableArray();

	/**
	 * Map LatLng - stores the map's Latitude & Longitude
	 * @type {number}
	 */
	this.mapLatLang = null;

	/**
	 * Map Places - stores the map places objects
	 * @see 'dataModel.places'
	 * @type {Object}
	 */
	this.mapPlaces = ko.observableArray();


	/**
	 * Modal Visibility - show/hide the modal
	 * @type {boolean}
	 */
	this.modalVisibilty = ko.observable(false);

	/**
	 * Modal Loading - show/hide the modal loading animation
	 * @type {boolean}
	 */
	this.modalLoading = ko.observable(true);

	/**
	 * Modal Foursquare URL
	 * @type {string}
	 */
	this.modalFoursquareURL = ko.observable();

	/**
	 * Modal Foursquare Visibility - show/hide the Foursquare button ('View in Foursquare')
	 * @type {string}
	 */
	this.modalFoursquareVisibility = ko.observable(false);

	/**
	 * Modal Info Address - holds the place address
	 * @type {string}
	 */
	this.modalInfoAddress = ko.observable();

	/**
	 * Modal Info Latitude - holds the place latitude
	 * @type {number}
	 */
	this.modalInfoLat = ko.observable();

	/**
	 * Modal Info Longitude - holds the place longitude
	 * @type {number}
	 */
	this.modalInfoLng = ko.observable();

	/**
	 * Modal Info Name - holds the place name
	 * @type {string}
	 */
	this.modalInfoName = ko.observable();

	/**
	 * Modal Info Phone - holds the place phone number
	 * @type {string}
	 */
	this.modalInfoPhone = ko.observable();

	/**
	 * Modal Info Phone Call - holds the place phone number with all white space removed, for use with the 'tel:' link
	 * @type {string}
	 */
	this.modalInfoPhoneCall = ko.observable();

	/**
	 * Modal Info Image - holds the place image
	 * @type {string}
	 */
	this.modalInfoImage = ko.observable();

	/**
	 * Modal Info Image Visibility - show/hide the place image
	 * @type {boolean}
	 */
	this.modalInfoImageVisibility = ko.observable(false);

	/**
	 * Modal Info Price - holds the place price level
	 * @type {string}
	 */
	this.modalInfoPrice = ko.observable();

	/**
	 * Modal Info Rating - holds the place rating
	 * @type {string}
	 */
	this.modalInfoRating = ko.observable();

	/**
	 * Modal Info Website - holds the place website
	 * @type {string}
	 */
	this.modalInfoWebsite = ko.observable();

	/**
	 * Modal Overlay Copy Button Visiblity - hide/show the copy button
	 * @type {boolean}
	 */
	this.modalOverlayCopyButtonVisibility = ko.observable();

	/**
	 * Modal Overlay Group Buttons - set the group button CSS (one, two)
	 * @type {number}
	 */
	this.modalOverlayGroupButtons = ko.observable();

	/**
	 * Modal Overlay Message - holds the modal overlay message
	 * @type {string}
	 */
	this.modalOverlayMessage = ko.observable();

	/**
	 * Modal Overlay Message Visibility - show/hide the modal overlay message
	 * @type {boolean}
	 */
	this.modalOverlayMessageVisibility = ko.observable(false);

	/**
	 * Modal Overlay Visibility - show/hide the modal overlay
	 * @type {boolean}
	 */
	this.modalOverlayVisibility = ko.observable(false);

	/**
	 * Modal Uber Deep link
	 * @type {string}
	 */
	this.modalUberDeepLink = ko.observable(false);

	/**
	 * Modal Uber Estimate - holds the Uber ride price estimate
	 * @type {string}
	 */
	this.modalUberEstimate = ko.observable();

	/**
	 * Modal Uber Estimate Visibility - show/hide the Uber price estimate
	 * @type {boolean}
	 */
	this.modalUberEstimateVisibility = ko.observable(false);

	/**
	 * Modal Uber Loading - show/hide the Uber loading animation
	 * @type {boolean}
	 */
	this.modalUberLoading = ko.observable(false);


	/**
	 * Place List - holds the place objects
	 * @type {Array.<object>}
	 */
	this.placeList = ko.observableArray([]);


	/**
	 * Loop through each Object in the dataModel places array, create a place object and push to the placeList observable array
	 * @param  {Object}
	 * @return {Object}
	 * @see dataModel.places
	 */
	dataModel.places.forEach(function(placeItem) {
		self.placeList.push(new Place(placeItem));
	});

	/**
	 * Set the default Current Place value
	 * @type {Object}
	 */
	this.currentPlace = ko.observable( this.placeList()[0] );

	/**
	 * Select the Current Place
	 * @param  {Object} place
	 */
	this.selectPlace = function(place) {

		/**
		 * If the user is swiping on a touch screen, return the function to prevent the place type from being selected
		 * @see 'ko.bindingHandlers.preventSwipeTap'
		 */
		if (self.appSwiping()) {
			return;
		}

		/** Hide the Notification Message */
		self.notificationKeepAlive(false);
		self.notificationFadeDuration(0);

		/** Set the Current Place value */
		self.currentPlace(place);

		/** Deselect each Place List item hide Map Info */
		for (var i=0,j=self.placeList().length;i<j;i++) {
			self.placeList()[i].isActive(false);
			self.mapInfoVisibility(false);
		}

		/** Set the Current Place to active */
		place.isActive(!place.isActive());

		/** Show Map Info */
		self.mapInfoVisibility(true);
	}

	/**
	 * Search Filter Visibility - show/hide the search filter
	 * @type {string}
	 */
	this.searchFilterVisibility = ko.observable(false);

	/**
	 * Search Query - holds the filter search query
	 * @type {string}
	 */
	this.searchQuery = ko.observable();

	/**
	 * Search Query No Results - shown when there are no results returned from a search query
	 * @type {string}
	 */
	this.searchQueryNoResults = ko.observable(false);

	/**
	 * Search Radius - holds the map search radius (set to 5000 by default)
	 * @type {number}
	 */
	this.searchRadius = ko.observable(this.appConstants.SEARCH_RADIUS_MAX / 2);

	/**
	 * Search Clear Filter Visibility - show/hide the clear filter button
	 */
	this.searchClearFilterVisibility = ko.observable(false);

	/**
	 * Clear the Filter.
	 */
	this.clearFilter = function(data, event) {

		/** Clear the filter input */
		self.searchQuery('');

		/** Loops through each place type in the place list and show it */
		for (var i=0,j=self.placeList().length;i<j;i++) {
			self.placeList()[i].isHidden(false);
		}
	}

	/**
	 * Map Pan To - pan to and center the map to the Current Location
	 * @external '.panTo()'
	 * @see {@link https://developers.google.com/maps/documentation/javascript/reference?hl=en#Map}
	 */
	this.mapPanTo = function() {
		self.map.panTo(self.mapLatLang);
	}

	/**
	 * Map Zoom In - zoom the map in
	 * @external 'getZoom()'
	 * @see {@link https://developers.google.com/maps/documentation/javascript/reference#Map}
	 */
	this.mapZoomIn = function() {
		var currentZoomLevel = self.map.getZoom();
		if(currentZoomLevel != 21){
		self.map.setZoom(currentZoomLevel + 1);}
	}

	/**
	 * Map Zoom Out - zoom the map out
	 * @external 'getZoom()'
	 * @see {@link https://developers.google.com/maps/documentation/javascript/reference#Map}
	 */
	this.mapZoomOut = function() {
		var currentZoomLevel = self.map.getZoom();
		if(currentZoomLevel != 0){
		self.map.setZoom(currentZoomLevel - 1);}
	}

	/**
	 * Close Modal - call to close the modal
	 */
 	this.closeModal = function() {
 		self.modalVisibilty(false);
 		self.modalInfoImageVisibility(false);
 		self.modalFoursquareVisibility(false);
 		self.modalUberEstimateVisibility(false);
 	}

 	/**
 	 * Open Modal Overlay - call to open the modal overlay
 	 */
 	this.openModalOverlay = function() {
 		self.modalOverlayVisibility(true);
 	}

 	/**
 	 * Close modal Overlay - call to close the modal overlay
 	 */
 	this.closeModalOverlay = function() {
 		self.modalOverlayVisibility(false);
 	}

 	/**
 	 * Reload App - call to reload the application
 	 */
 	this.reloadApp = function() {
 		document.location.reload(true);
 	}

 	/**
 	 * Search Foursquare Venues
 	 */
	this.searchFoursquare = function() {

		/**
		 * API Request
		 * @type {Object}
		 */
		var request = {
			venueLat: self.modalInfoLat(),
			venueLng: self.modalInfoLng(),
			venueName: self.modalInfoName()
		}

		/**
		 * Make a Foursquare API request
		 * @see dataModel.foursquare
		 */
	  var response = dataModel.foursquare(request);

	  /**
	   * Handle the response
	   * @param {Object}
	   * @external '.then'
	   * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then}
	   */
	  response.then(function(data) {
			if (data.response.venues.length > 0) {
				/** Set the Foursquare button URL */
				self.modalFoursquareURL(self.appConstants.FOURSQUARE_URL + data.response.venues[0]['id']);
				/** Show the Foursquare button */
		  	self.modalFoursquareVisibility(true);
			}	else {
				/** Set the Foursquare URL blank */
				self.modalFoursquareURL('#');
				/** Hide the Foursquare button */
				self.modalFoursquareVisibility(false);
			}

			/**
			 * Request failed
			 * @param  {Object} xhrObj
			 */
	  }, function(xhrObj) {

				/** If the appDebug variable is set to true, console.log the error */
				if (self.appDebug) console.log(xhrObj);

				/** Set the Foursquare URL blank */
				self.modalFoursquareURL('#');

				/** Hide the Foursquare button */
				self.modalFoursquareVisibility(false);
	  });

	}

	/**
	 * Get an Uber Ride Estimate
	 */
	this.getUberRideEstimate = function() {

		/** Hide the loading animation */
		self.modalUberLoading(true);
		/** Hide the price estimate */
		self.modalUberEstimateVisibility(false);

		/**
		 * API Request
		 * @type {Object}
		 */
		var request = {
			startLat: self.mapCurrentLat(),
			startLng: self.mapCurrentLng(),
			endLat: self.modalInfoLat(),
			endLng: self.modalInfoLng()
		}

		/**
		 * Make an Uber API request
		 * @see dataModel.uber
		 */
		var response = dataModel.uber(request);

	  /**
	   * Handle the response
	   * @param {Object}
	   * @external '.then'
	   * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then}
	   */
		response.then(function(data) {

			/**
			 * Uber Estimate
			 * @type {string}
			 */
			var uberEstimate;

			/** If the array contatains prices estimates, grab the cheapest */
			data['prices'].length > 0 ? uberEstimate = data['prices'][0]['estimate'] : uberEstimate = 'Unavailable';

			/** Set the estimate price in the modal */
			self.modalUberEstimate(uberEstimate);

			/** If a price estimate exists, add Uber deep link */
			uberEstimate !== 'Unavailable' ? self.modalUberDeepLink(true) : self.modalUberDeepLink(false);

			/** Hide the loading animation */
			self.modalUberLoading(false);

			/** Show the price estimate */
			self.modalUberEstimateVisibility(true);

			/**
			 * Request failed
			 * @param  {Object} xhrObj
			 */
		}, function(xhrObj) {

				/** If the appDebug variable is set to true, console.log the error */
				if (self.appDebug) console.log(xhrObj);

				/** Hide the loading animation */
				self.modalUberLoading(false);

				/** Set the estimate price as 'unavailable' */
				self.modalUberEstimate('Unavailable');

				/** Hide the price estimate */
				self.modalUberEstimateVisibility(true);
		});

	};

	/**
	 * Request Uber Ride Deep Link
	 */
	this.uberRideRequest = function() {

		/**
		 * Uber Deep Link
		 * @type {string}
		 * @see {@link https://developer.uber.com/v1/deep-linking/}
		 */
		var uberDeepLink;

		uberDeepLink = self.appConstants.UBER_URL;
		uberDeepLink += 'client_id=' + self.appConstants.UBER_CLIENT_ID;
		uberDeepLink += 'pickup_latitude=' + self.mapCurrentLat();
		uberDeepLink += 'pickup_longitude=' + self.mapCurrentLng();
		uberDeepLink += 'dropoff_latitude=' + self.modalInfoLat();
		uberDeepLink += 'dropoff_longitude=' + self.modalInfoLng();
		uberDeepLink += 'dropoff_nickname=' + self.modalInfoName();

		/** If modalUberDeepLink isn't empty, open the link */
		if (self.modalUberDeepLink()) {
			window.open(uberDeepLink);
		}
	}

	/**
	 * Get Location. Grab the user's current location
	 */
	this.getLocation = function() {

	  /** Try HTML5 Geolocation */
	  if(navigator.geolocation) {

	  	/** Hide the landing action */
	  	self.appLandingActionVisibility(false);

	  	/** Hide the landing info */
	  	self.appLandingInfoVisibility(false);

	  	/** Show landing loading animation */
	  	self.appLandingLoadingVisibility(true);

	  	/**
	  	 * Get current position with HTML Geolocation
	  	 * @external 'navigator.geolocation.getCurrentPosition'
	  	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition}
	  	 */
	    navigator.geolocation.getCurrentPosition(function (position) {

	    		/** Update the current latitude & longitude */
	    		self.mapCurrentLat(position.coords.latitude);
	    		self.mapCurrentLng(position.coords.longitude);

	    		/** Set the location on the map */
	    		self.setLocation();

	    		setTimeout(function() {

	    			/** Hide the landing */
			    	self.appLandingVisbility(false);

			    	/** Hide the landing loading animation */
			    	self.appLandingLoadingVisibility(false);
			  	}, 5000);

			}, self.handleNoGeolocation, { maximumAge:0, timeout:10000, enableHighAccuracy: true });

		} else {

	    /** Browser doesn't support Geolocation */
	    self.handleNoGeolocation(false);

		}

	}

	/**
	 * Set Location. Set the user's current location on the map.
	 */
	this.setLocation = function() {

		/** Set the map's current LatLng */
    self.mapLatLang = new google.maps.LatLng(self.mapCurrentLat(), self.mapCurrentLng());

		/** Center map on current LatLng */
    self.map.setCenter(self.mapLatLang);

    /** Check if localStorage is available in the browser */
    if (self.checkLocalStorage()) {

	    /** Save current Latitude and Longitude values to localStorage via dataModel helper methods */
	    dataModel.set('lat', self.mapCurrentLat());
	    dataModel.set('lng', self.mapCurrentLng());
  	}

    /**
     * Add a custom HTML current position marker to the map
     * @external 'new RichMarker'
     * @see {@link https://github.com/mikejoyceio/js-rich-marker}
     */
    var marker = new RichMarker({
    	position: self.mapLatLang,
    	map: self.map,
    	flat: true,
    	content: '<div class="map__current-location">' +
    							'<div class="map__current-location-animation"></div>' +
    					 '</div>'
    });
	}

	/**
	 * Handle no Geo-location
	 * @param {object}
	 */
 	this.handleNoGeolocation = function(error) {

		/** Show the landing action */
  	self.appLandingActionVisibility(true);

  	/** Show the landing info */
  	self.appLandingInfoVisibility(true);

  	/** Hide landing loading animation */
  	self.appLandingLoadingVisibility(false);

    switch (error.code) {
      case error.PERMISSION_DENIED:

				/** If the appDebug variable is set to true, console.log the error */
				if (self.appDebug) console.log('User denied the request for Geolocation.');

				/** Show the user notification message  */
				self.notificationKeepAlive(true);
				self.notificationMessage('Please share your location');

				break;
      case error.POSITION_UNAVAILABLE:

				/** If the appDebug variable is set to true, console.log the error */
				if (self.appDebug) console.log('Location information is unavailable.');

				/** Show the user notification message  */
				self.notificationKeepAlive(true);
				self.notificationMessage('Geolocation unavailable.');

				break;
      case error.TIMEOUT:

				/** If the appDebug variable is set to true, console.log the error */
				if (self.appDebug) console.log('The request to get user location timed out.');

				/** Show the user notification message  */
				self.notificationKeepAlive(true);
				self.notificationMessage('Geolocation timed out.');

				/** Show reload app button */
				self.appReloadVisbility(true);

				break;
      case error.UNKNOWN_ERROR:

				/** If the appDebug variable is set to true, console.log the error */
				if (self.appDebug) console.log('An unknown error occurred.');

				/** Show the user notification message  */
				self.notificationKeepAlive(true);
				self.notificationMessage('Unknown error.');

				/** Show reload app button */
				self.appReloadVisbility(true);

				break;
    }
	}


	/**
	 * Local Storage Available.
	 * Check local storage for latitude and longitude values and if
	 * they exist, check if the current latitude and longitude match.
	 */
	this.localStorageAvailable = function() {

		/** localStorage Latitude and Longitude values aren't set */
		if (!dataModel.get('lat') && !dataModel.get('lat')) {

			/** Show the landing */
			self.appLandingVisbility(true);

			/** Show the landing action */
	  	self.appLandingActionVisibility(true);

	  	/** Show the landing info */
	  	self.appLandingInfoVisibility(true);

		/** localStorage Latitude and Longitude values are set */
		} else {

			/** Hide the landing action */
	  	self.appLandingActionVisibility(false);

	  	/** Hide the landing info */
	  	self.appLandingInfoVisibility(false);

	  	/** Show landing loading animation */
	  	self.appLandingLoadingVisibility(true);

			/** Grab the Latitude and Longitude values from localStorage via dataModel helper functions */
			self.mapCurrentLat(parseFloat(dataModel.get('lat')));
			self.mapCurrentLng(parseFloat(dataModel.get('lng')));

	  	/**
	  	 * Get current position with HTML Geolocation
	  	 * @external 'navigator.geolocation.getCurrentPosition'
	  	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition}
	  	 */
			navigator.geolocation.getCurrentPosition(function(position) {

				/**
				 * If the current latitude and longitude values match the latitude and longitude values in localStorage, set the users location
				 * on the map and hide the landing. HTML5 Geolocation GPS requests are expensive on mobile devices, and the position coordinates
				 * returned from getCurrentPosition may vary down to a few decimal places, so the latitude and longitude values have been rounded
				 * to 4 decimal places, which is still accurate (to within around 11 meters) and comparable to the accuracy of most commercial GPS units.
				 * @external 'toFixed()'
				 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed}
				 */
				if (self.mapCurrentLat().toFixed(4) == position.coords.latitude.toFixed(4) && self.mapCurrentLng().toFixed(4) == position.coords.longitude.toFixed(4)) {

					/** Set the users location on the map */
					self.setLocation();

					setTimeout(function() {

						/** Hide the landing */
						self.appLandingVisbility(false);
					}, 5000);

					/**
					 * Else, the current location of has changed.
					 */
				} else {

					setTimeout(function() {

						/** Show the landing action */
				  	self.appLandingActionVisibility(true);

				  	/** Show the landing info */
				  	self.appLandingInfoVisibility(true);

				  	/** Hide landing loading animation */
				  	self.appLandingLoadingVisibility(false);
			  	}, 3000);

				}

			}, self.handleNoGeolocation, { maximumAge:0, timeout:10000, enableHighAccuracy: true });

		}

	}

	/**
	 * Local Storage Unavailable.
	 */
	this.localStorageUnavailable = function() {

		/** Show the landing */
		self.appLandingVisbility(true);

	}

	/**
	 * Local Storage Available. Check if local storage is available in the browser.
	 * @return {boolean}
	 */
	this.checkLocalStorage = function() {
		try {
			var storage = window['localStorage'],
				x = '__storage_test__';
			storage.setItem(x, x);
			storage.removeItem(x);
			return true;
		}
		catch(e) {
			return false;
		}
	}

	/**
	 * Init App. Initialize the application by checking if the Google Maps API is available
	 * and if localStorage is available or not.
	 */
	this.initApp = function() {

		/** Check if the Google Maps API is loaded and available to use */
    if (typeof google === 'object' && typeof google.maps === 'object') {

	    /** localStorage is available */
			if (self.checkLocalStorage()) {

				/** Call the LocalStorageAvailable function */
				self.localStorageAvailable();

			/** localStorage isn't available */
			} else {

				/** Call the LocalStorageUnavailable function */
				self.localStorageUnavailable();
			}

			/** Google Maps API isn't available */
  	} else {

			/** If the appDebug variable is set to true, console.log the error */
			if (self.appDebug) console.log('Google Maps API failed to load');

			/** Show the user notification message  */
			self.notificationKeepAlive(true);
			self.notificationMessage('Please check your connection');
  	}

	}
	this.initApp();

}

/**
 * Place Constructor
 * @param {Object} data
 * @constructor
 */
var Place = function(data) {
	this.name = ko.observable(data.name);
	this.description = ko.observable(data.description);
	this.type = ko.observable(data.type);
	this.icon = ko.observable(data.icon);
	this.marker = ko.observable(data.marker);
	this.isActive = ko.observable(false);
	this.isHidden = ko.observable(false);
};

/**
 * Apply Knockout Bindings
 * @param {Object}
 * @external 'ko.applyBindings'
 * @see {@link http://knockoutjs.com/documentation/observables.html}
 */
ko.applyBindings(new ViewModel());
