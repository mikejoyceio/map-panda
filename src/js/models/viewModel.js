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
	 * Filter place types in the place list
	 * @param  {string} query
	 */
	this.filter = function(query) {

		/** Loop through each place in the place list and compare the string */
		for (var i=0,j=self.placeList().length;i<j;i++) {
			compareString(query, self.placeList()[i].name().toLowerCase(), self.placeList()[i]);
		}

		/** Loop through each place in the place list, store a count, and if each place is hidden, show 'No Results' */
		var count = 0;
		for (var i=0,j=self.placeList().length;i<j;i++) {
			if (self.placeList()[i].isHidden()) {
				count++;
			}
			if (count === self.placeList().length) {
				self.searchQueryNoResults(true);
			} else {
				self.searchQueryNoResults(false);
			}
		}

		/**
		 * Compare String
		 * @param  {string} value
		 * @param  {string} placeName
		 * @param  {Object} placeObject
		 */
		function compareString(value, placeName, placeObject) {

			/** Loop through the length of the search query string */
			for (var i=0,j=value.length;i<j;i++) {

				/** If characters match in order, show the place type, else hide it */
				if (placeName.indexOf(value) !== -1 && placeName.charAt(i) === value.charAt(i)) {
					placeObject.isHidden(false);
					self.searchClearFilterVisibility(true);

					/** Else if there is no match, hide the place type and show the clear filter button */
				} else {
					placeObject.isHidden(true);
					self.searchClearFilterVisibility(true);
				}
			}

			/** If the search query is an exact match, select the place type, else show all place types if the search query is empty */
			if (value.indexOf(placeName) === 0 && value.length === placeName.length) {
				self.selectPlace(placeObject);
				self.searchClearFilterVisibility(true);

				/** Else if the text input is empty show all place types and hide the clear filter button */
			} else if (value.length === 0) {
				placeObject.isHidden(false);
				self.searchClearFilterVisibility(false);
			}

		}

	}

	/**
	 * Subscribe to the search query observable
	 * @external 'subscribe()'
	 * @see {@link http://knockoutjs.com/documentation/observables.html}
	 */
	this.searchQuery.subscribe(this.filter);

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
 * Knockout Custom Google Map Binding. Initializes and updates a Google map instance.
 * @type {Object}
 * @external 'ko.bindingHandlers'
 * @see {@link http://knockoutjs.com/documentation/custom-bindings.html}
 */
ko.bindingHandlers.map = {

	/**
	 * Init: Called when the binding is first applied.
	 * @param  {Object} element         DOM element involved in this binding
	 * @param  {Function} valueAccessor Function to get the current model property of this binding
	 * @param  {Object} allBindings     Object used to access all model values bound to this DOM element
	 * @param  {Object} viewModel       Access the view model
	 * @param  {Object} bindingContext  Holds the binding context available to this DOM elements bindings
	 */
  init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {

  	/**
  	 * Google Map Options
  	 * @type {Object}
  	 */
    var mapOptions = {

    	/**
    	 * Initial map zoom level
    	 * @type {number}
    	 * @see {@link https://developers.google.com/maps/documentation/static-maps/intro?hl=en#Zoomlevels}
    	 */
      zoom: 15,

      /**
       * Hide map zoom controls
       * @type {boolean}
       * @see {@link https://developers.google.com/maps/documentation/javascript/controls}
       */
      zoomControl: false,

      /**
       * Hide map type control
       * @type {boolean}
       * @see {@link https://developers.google.com/maps/documentation/javascript/controls}
       */
      mapTypeControl: false,

       /**
       * Hide map street view control
       * @type {boolean}
       * @see {@link https://developers.google.com/maps/documentation/javascript/controls}
       */
      streetViewControl: false,

      /**
       * Hide map pan control
       * @type {boolean}
       * @see {@link https://developers.google.com/maps/documentation/javascript/controls}
       */
      panControl: false,

      /**
       * Hide fullscreen control
       * @type {boolean}
       * @see {@link https://developers.google.com/maps/documentation/javascript/controls}
       */
      fullscreenControl: false,

      /**
       * Set a custom styled map
       * @type {Array}
       * @see {@link https://developers.google.com/maps/documentation/javascript/styling}
       */
      styles: [{
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

    /**
     * Instantiate a new Google Map object
     * @type {Object}
     * @external 'new google.maps.Map'
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference?hl=en#Map}
     */
    bindingContext.$root.map = new google.maps.Map(element, mapOptions);

	},

	/**
	 * Update: Called when the binding is first applied and again whenever any observables change
	 * @param  {Object} element         DOM element involved in this binding
	 * @param  {Function} valueAccessor Function to get the current model property of this binding
	 * @param  {Object} allBindings     Object used to access all model values bound to this DOM element
	 * @param  {Object} viewModel       Access the view model
	 * @param  {Object} bindingContext  Holds the binding context available to this DOM elements bindings
	 */
	update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {

  	var value = valueAccessor();

		/**
		 * Decalare a variable to hold error messages for debugging purposes
		 * @type {string}
		 */
		var statusMessage;

		/**
		 * Declare variable to hold error messages visible to the user
		 * @type {string}
		 */
		var notificationMessage;

		/** If the currentPlace isn't active, return the function */
		if(!value.currentPlace().isActive()) {
			return
		}

  	/** If the mapMarkers array contains values, clear the markers from the map */
  	if (bindingContext.$root.mapMarkers()) {
  		clearMarkers();
  	}

		/**
		 * Google Maps places search request object
		 * @type {Object}
		 */
    var request = {
    	location: bindingContext.$root.mapLatLang,
    	radius: value.searchRadius(),
    	types: []
    };

    /** Show the map loader */
    bindingContext.$root.mapLoadingVisibility(true);

    /**
     * Push the currentPlace type into the request object types array
     */
    request.types.push(value.currentPlace().type());

    /**
     * Instantiate a new Google Places Service object
     * @type {object}
     * @external 'new google.maps.places.PlacesService'
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference?hl=en#PlacesService}
     */
    var mapPlaces = new google.maps.places.PlacesService(bindingContext.$root.map);

    /**
     * Search nearby places
     * @external 'nearbySearch()'
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference?hl=en#PlacesService}
     */
    mapPlaces.nearbySearch(request, nearbySearchCallback);

    /**
     * Google Maps PlacesService callback function
     * @param  {Array.<Object>} results
     * @param  {Object} status
     * @see {@link https://developers.google.com/maps/documentation/javascript/places#place_search_responses}
     */
    function nearbySearchCallback(results, status) {

    	/**
    	 * Set a reference to Google Maps Service Status object
    	 * @type {Object}
    	 * @external 'google.maps.places.PlacesServiceStatus'
    	 * @see {@link https://developers.google.com/maps/documentation/javascript/reference?hl=en#PlacesServiceStatus}
    	 */
    	var statusCode = google.maps.places.PlacesServiceStatus;

    	/** If the statusCode is OK */
    	if (status === statusCode.OK) {

    		/** Clear all markers from the map */
    		clearMarkers();

    		/** Reset the places array length to 0 */
    		bindingContext.$root.mapPlaces().length = 0;

    		/** Hide user notification messages */
    		bindingContext.$root.notificationKeepAlive(false);
    		bindingContext.$root.notificationFadeDuration(0);

    		/**
    		 * Map Places
    		 * @type {Array.<Object>}
    		 */
    		var mapPlaces = [];

    		/** Loop through the results and push into the places array */
    		for (var i=0,j=results.length;i<j;i++) {
    			mapPlaces.push(results[i]);
    		}

    		/** Set the mapPlaces observable */
    		bindingContext.$root.mapPlaces(mapPlaces)

    		/** Set Place Markers, Info Windows and Modals	 */
    		setPlaces();

    		/** Hide the map loading animation */
  			setTimeout(function() {
  				bindingContext.$root.mapLoadingVisibility(false);
  			}, 1000);

    	} else {

	  		/**
	  		 * Callback Error Handling. Error status and messages are passed the the callbackError function.
	  		 * @see 'callbackError()'
	  		 */
	    	switch (status) {

	    		case statusCode.ERROR:
						callbackError(status+' There was a problem contacting the Google servers.', 'Connection error');
						break;
					case statusCode.INVALID_REQUEST:
						callbackError(status+' This request was invalid.', 'Error. Please try again.');
						break;
					case statusCode.OVER_QUERY_LIMIT:
						callbackError(status+' The webpage has gone over its request quota.', 'Slow down!');
						break;
					case statusCode.REQUEST_DENIED:
						callbackError(status+' This webpage is not allowed to use the PlacesService.', 'Error. Please try again.');

						/** Show reload app button */
						self.appReloadVisbility(true);

						break;
					case statusCode.UNKNOWN_ERROR:
						callbackError(status+' The PlacesService request could not be processed due to a server error. The request may succeed if you try again.', 'Server Error. Please try again.');
						break;
					case statusCode.ZERO_RESULTS:
						callbackError(status+' No result was found for this request.', 'No Results');
						break;
					default:
						callbackError('Unknown error', 'Error. Please try again.');

						/** Show reload app button */
						self.appReloadVisbility(true);

	    	}
    	}

    }

    /**
     * Set Places
     */
    function setPlaces() {

    	/** Loop thought the places array */
	    for (var i=0,j=bindingContext.$root.mapPlaces().length;i<j;i++) {

	    	/** Instantiate a new marker and set marker's icon */
	    	bindingContext.$root.mapMarkers()[i] = new google.maps.Marker({
	    		map: bindingContext.$root.map,
	    		position: bindingContext.$root.mapPlaces()[i].geometry.location,
	    		icon: value.currentPlace().marker()
	    	});

	    	/** Add the marker to the map */
	    	bindingContext.$root.mapMarkers()[i].setMap(bindingContext.$root.map);

	    	/**
	    	 * Place Data. Create an object to hold data for the place.
	    	 * @type {Object}
	    	 */
	    	var placeData = {
	    		marker: bindingContext.$root.mapMarkers()[i],
	    		id: bindingContext.$root.mapPlaces()[i].id,
	    		placeId: bindingContext.$root.mapPlaces()[i].place_id,
	    		name: bindingContext.$root.mapPlaces()[i].name,
	    		icon: value.currentPlace().icon(),
	    		vicinity: bindingContext.$root.mapPlaces()[i].vicinity,
	    		rating: typeof bindingContext.$root.mapPlaces()[i].rating !== 'undefined' ? Math.round(bindingContext.$root.mapPlaces()[i].rating) : 0,
	    		position: bindingContext.$root.mapPlaces()[i].geometry.location,
	    		photo: typeof bindingContext.$root.mapPlaces()[i].photos !== 'undefined'
	    					 ? bindingContext.$root.mapPlaces()[i].photos[0].getUrl({'maxWidth': 100, 'maxHeight': 100})
	    					 : bindingContext.$root.appConstants.DEFAULT_IMAGE_SMALL
	    	}

	    	/** Add an Info Box for the place */
	    	addInfoBox(placeData);

	    	/** Add a Modal for the place */
	    	addModal(placeData);

	    }

	    /**
	     * Automagically zoom the map in / out to show all the markers in the browser window
			 * @external 'LatLngBounds()'
			 * @see {@link https://developers.google.com/maps/documentation/javascript/reference?hl=en#LatLngBounds}
	     */
	    var bounds = new google.maps.LatLngBounds();

	    for(i=0; i<bindingContext.$root.mapMarkers().length; i++) {
	    	bounds.extend(bindingContext.$root.mapMarkers()[i].getPosition());
	    }

	    bindingContext.$root.map.fitBounds(bounds);

	 	}

	 	/**
	 	 * Add Info Box function
	 	 * @param {Object} data
	 	 */
		function addInfoBox(data) {

			/** InfoBox HTML content */
			var infoBoxContent = '<div class="info-box__content">' +
											'<div class="info-box__title">'+data.name+'</div>' +
											'<div class="info-box__image" style="background-image: url('+data.photo+');"></div>' +
											'<div class="info-box__rating rating rating--0'+data.rating+'">' +
												'<span class="rating__star rating__star--01"></span>' +
												'<span class="rating__star rating__star--02"></span>' +
												'<span class="rating__star rating__star--03"></span>' +
												'<span class="rating__star rating__star--04"></span>' +
												'<span class="rating__star rating__star--05"></span>' +
											'</div>' +
											'<i class="info-box__icon fa '+data.icon+'"></i>' +
								 		'</div>';

			/** InfoBox options */
			var infoBoxOptions = {
				boxClass: 'info-box',
				content: infoBoxContent,
				alignBottom: true,
				disableAutoPan: false,
				maxWidth: 0,
				pixelOffset: new google.maps.Size(-105, -30),
				zIndex: null,
				boxStyle: {
				  opacity: 0.75,
				  width: "230px"
				 },
				closeBoxURL: "",
				infoBoxClearance: new google.maps.Size(1, 1),
				isHidden: false,
				pane: "floatPane",
				enableEventPropagation: false
			};

			/**
			 * Instantiate an new infoBox
			 * @type {Object}
			 * @external 'new InfoBox'
			 * @see {@link http://google-maps-utility-library-v3.googlecode.com/svn/trunk/infobox/docs/examples.html}
			 */
			var infoBox = new InfoBox(infoBoxOptions);

			/**
			 * Show Info Box on marker mouseover
			 * @param {Object} data.marker
			 * @param {string} event
			 * @param {function} handler
			 * @external 'google.maps.event.addListener'
			 * @see {@link https://developers.google.com/maps/documentation/javascript/events}
			 */
		 	google.maps.event.addListener(data.marker, 'mouseover', function() {
		 		infoBox.open(bindingContext.$root.map, this);
		  });

			/**
			 * Hide Info Box on marker mouseout
			 * @param {Object} data.marker
			 * @param {string} event
			 * @param {function} handler
			 * @external 'google.maps.event.addListener'
			 * @see {@link https://developers.google.com/maps/documentation/javascript/events}
			 */
		  google.maps.event.addListener(data.marker, 'mouseout', function() {
		  	infoBox.close(bindingContext.$root.map, this);
		  });

		}

		/**
		 * Add Modal
		 * @param {Object} data
		 */
		function addModal(data) {

			/**
			 * Show Modal on map marker click
			 * @param {Object} data.marker
			 * @param {string} event
			 * @param {function} handler
			 * @external 'google.maps.event.addListener'
			 * @see {@link https://developers.google.com/maps/documentation/javascript/events}
			 */
			google.maps.event.addListener(data.marker, 'click', function() {

				/** Reset the marker icons */
				for (var i=0,j=bindingContext.$root.mapMarkers().length;i<j;i++) {
					bindingContext.$root.mapMarkers()[i].setIcon(value.currentPlace().marker());
				}

				/** Set the selected marker icon */
		 		// data.marker.setIcon({
        //   //path: fontawesome.markers.CIRCLE,
				// 	fillColor: '#ed5565',
				// 	fillOpacity: 1,
				// 	scale: 0.32,
				// 	strokeColor: '#ffffff',
				// 	strokeWeight: 3
				// });

				/** Show the modal */
				bindingContext.$root.modalVisibilty(true);

				/** Hide the modal photo */
				bindingContext.$root.modalInfoImageVisibility(false);

				/** Hide the modal overlay */
				bindingContext.$root.modalOverlayVisibility(false);

				/** Hide Uber estimate */
				bindingContext.$root.modalUberEstimateVisibility(false);

				/** Show Modal loading animation */
				bindingContext.$root.modalLoading(true);

				/**
				 * Google Maps places search request object
				 * @type {Object}
				 */
				var request = {
		  		placeId: data.placeId
				};

				/**
				 * Instatiate a Google Maps Places Service object
				 * @type {Object}
				 * @external 'new google.maps.places.PlacesService'
				 * @see {@link https://developers.google.com/maps/documentation/javascript/places#place_searches}
				 */
				var service = new google.maps.places.PlacesService(bindingContext.$root.map);

				/**
				 * Request place details
				 * @external 'getDetails'
				 * @see {@link https://developers.google.com/maps/documentation/javascript/places#place_details_requests}
				 */
				service.getDetails(request, placeDetailsCallback);

				/**
				 * Google Maps places search callback function
				 * @param  {Object} place
				 * @param  {Object} status
				 * @see {@link https://developers.google.com/maps/documentation/javascript/places#place_details_responses}
				 */
				function placeDetailsCallback(place, status) {

		    	/**
		    	 * Set a reference to Google Maps Service Status object
		    	 * @type {Object}
		    	 * @external 'google.maps.places.PlacesServiceStatus'
		    	 * @see {@link https://developers.google.com/maps/documentation/javascript/reference?hl=en#PlacesServiceStatus}
		    	 */
    			var statusCode = google.maps.places.PlacesServiceStatus;

					/** If the statusCode is OK, set the Info Window content */
				  if (status == statusCode.OK) {

				  	/**
				  	 * Place Info. Create an object to hold data for the place.
				  	 * @type {Object}
				  	 */
				  	var placeInfo = {
							id: place.id,
							name: place.name,
							address: place.formatted_address,
							website: typeof place.website !== 'undefined' ? place.website : false,
							lat: place.geometry.location.lat(),
							lng: place.geometry.location.lng(),
							phone: typeof place.formatted_phone_number !== 'undefined' ? place.formatted_phone_number : 'No Number',
							phoneCall: typeof place.formatted_phone_number !== 'undefined' ? place.formatted_phone_number.replace(/ /g, '') : false,
							photo: typeof place.photos !== 'undefined' ? "url('"+place.photos[0].getUrl({'maxWidth': 300, 'maxHeight': 300})+"')" : 'url('+bindingContext.$root.appConstants.DEFAULT_IMAGE_LARGE+')',
							rating: typeof place.rating !== 'undefined' ? 'rating--0'+Math.round(place.rating) : 'rating--00',
							price: typeof place.price_level !== 'undefined' ? 'price--0'+place.price_level : 'price-00'
						};

						/** Update the place name */
						bindingContext.$root.modalInfoName(placeInfo.name);

						/** Update the place address */
						bindingContext.$root.modalInfoAddress(placeInfo.address);

						/** Update the place website */
						bindingContext.$root.modalInfoWebsite(placeInfo.website);

						/** Update the place latitude */
						bindingContext.$root.modalInfoLat(placeInfo.lat);

						/** Update the place longitude */
						bindingContext.$root.modalInfoLng(placeInfo.lng);

						/** Update the place phone number */
						bindingContext.$root.modalInfoPhone(placeInfo.phone);

						/** Update the place html 'tel:' link */
						bindingContext.$root.modalInfoPhoneCall(placeInfo.phoneCall);

						/** Update the place image */
						bindingContext.$root.modalInfoImage(placeInfo.photo);

						/** Update the place price */
						bindingContext.$root.modalInfoPrice(placeInfo.price);

						/** Update the place rating */
						bindingContext.$root.modalInfoRating(placeInfo.rating);

						/** Search Foursquare venues */
						bindingContext.$root.searchFoursquare();

						/** Request and Uber ride price estimate */
						bindingContext.$root.getUberRideEstimate();

						setTimeout(function() {
							/** Hide the Modal loading animation */
							bindingContext.$root.modalLoading(false);
							/** Show the place image */
							bindingContext.$root.modalInfoImageVisibility(true);
						}, 1000);

					/** The Places Details request failed */
				  } else {

				  	/** If the appDebug variable is set to true, console log the error */
			  		if (bindingContext.$root.appDebug) console.log(status);

				  }
				}

			});

		}

		/**
		 * Clear Map Markers
		 * @external 'setMap(null)'
		 * @see {@link https://developers.google.com/maps/documentation/javascript/markers#remove}
		 */
		function clearMarkers() {

			/** Loop through each marker and set it to 'null' */
			for (var i=0,j=bindingContext.$root.mapMarkers().length;i<j;i++) {
				bindingContext.$root.mapMarkers()[i].setMap(null);
			}

			/** Reset the mapMarkers array length to 0 */
			bindingContext.$root.mapMarkers().length = 0;
		}

		/**
		 * Callback Error. This function will create both a developer-friendly error message for debugging purposes and a more readable,
		 * user-friendly error message for the user.
		 * @param  {string} statusMessage       Developer-friendly error message
		 * @param  {string} notificationMessage User-friendly notification message
		 */
    function callbackError(statusMessage, notificationMessage) {

    	/** If the appDebug variable is set to true, console log the error */
    	if (bindingContext.$root.appDebug) console.log(statusMessage);

    	/** Show the user notification message */
	    bindingContext.$root.mapLoadingVisibility(false);
	   	bindingContext.$root.notificationKeepAlive(true);
  		bindingContext.$root.notificationMessage(notificationMessage);

    }

	}

};

/**
 * Apply Knockout Bindings
 * @param {Object}
 * @external 'ko.applyBindings'
 * @see {@link http://knockoutjs.com/documentation/observables.html}
 */
ko.applyBindings(new ViewModel());
