/**
 * @file View Model
 * @file overview Map project for Udacity's FEND
 * @version 1.0
 * @author Mike Joyce [hello@mikejoyce.io]
 */

/* TODO:
 * - Add javascript promise polypill
 * - Add help panel
 * - Test Uber deep linking
 * - Update viewportWidth and preventSwipeTap bindings
 */

/**
 * View Model
 * @constructor
 */
var ViewModel = function() {

	/** Invoke strict mode */
	'use strict';

	/** Set a pointer reference to 'this' */
	var self = this;

	/**
	 * App Debug
	 * @type {boolean}
	 */
	this.appDebug = false;		
	/**
	 * App Name
	 * @type {string}
	 */
	this.appName = "Map Panda";
	/**
	 * Add Description
	 * @type {string}
	 */
	this.appDescription = "Description";
	/**
	 * App Swiping - true if user is swiping on a touch screen
	 * @type {boolean}
	 */
	this.appSwiping = ko.observable(false);
	/**
	 * App Viewport Width - stores the width of the browser viewport width
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
	this.notificationFadeDuration = ko.observable(1000);
	/**
	 * Notification Keep Alive - 
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
	 * Map Current Latitude
	 * @type {number}
	 */
	this.mapCurrentLat = ko.observable();
	/**
	 * Map Current Longitude
	 * @type {number}
	 */
	this.mapCurrentLng = ko.observable();
	/**
	 * Map Info Visibility
	 * @type {boolean}
	 */
	this.mapInfoVisibility = ko.observable(false);
	/**
	 * Map Loader Visibility
	 * @type {boolean}
	 */
	this.mapLoaderVisibility = ko.observable(false);
	/**
	 * Map Markers
	 * @type {Array.<object>}
	 */
	this.mapMarkers = ko.observableArray();
	/**
	 * Map Latitude & Longitude
	 * @type {number}
	 */
	this.mapLatLang = null;
	/**
	 * Map Places
	 * @type {Object}
	 */
	this.mapPlaces = ko.observableArray();

	
	/**
	 * Modal Visibility
	 * @type {boolean}
	 */
	this.modalVisibilty = ko.observable(false);
	/**
	 * Modal Loading
	 * @type {boolean}
	 */
	this.modalLoading = ko.observable(true);
	/**
	 * Modal Foursquare URL
	 * @type {string}
	 */
	this.modalFoursquareURL = ko.observable();
	/**
	 * Modal Foursquare Visibility
	 * @type {string}
	 */
	this.modalFoursquareVisibility = ko.observable(false);
	/**
	 * Modal Info Address
	 * @type {string}
	 */
	this.modalInfoAddress = ko.observable();
	/**
	 * Modal Info Latitude
	 * @type {number}
	 */
	this.modalInfoLat = ko.observable();
	/**
	 * Modal Info Longitude
	 * @type {number}
	 */
	this.modalInfoLng = ko.observable();
	/**
	 * Modal Info Name
	 * @type {string}
	 */
	this.modalInfoName = ko.observable();
	/**
	 * Modal Info Phone
	 * @type {string}
	 */
	this.modalInfoPhone = ko.observable();
	/**
	 * Modal Info Phone Call
	 * @type {string}
	 */
	this.modalInfoPhoneCall = ko.observable();
	/**
	 * Modal Info Image
	 * @type {string}
	 */
	this.modalInfoImage = ko.observable();
	/**
	 * Modal Info Image Visibility
	 * @type {boolean}
	 */
	this.modalInfoImageVisibility = ko.observable(false);
	/**
	 * Modal Info Price
	 * @type {string}
	 */
	this.modalInfoPrice = ko.observable();
	/**
	 * Modal Info Rating
	 * @type {string}
	 */
	this.modalInfoRating = ko.observable();
	/**
	 * Modal Info Website
	 * @type {string}
	 */
	this.modalInfoWebsite = ko.observable();
	/**
	 * Modal Overlay Copy Button Visiblity
	 * @type {boolean}
	 */
	this.modalOverlayCopyButtonVisibility = ko.observable();
	/**
	 * Modal Overlay Group Buttons
	 * @type {number}
	 */
	this.modalOverlayGroupButtons = ko.observable();
	/**
	 * Modal Overlay Message
	 * @type {string}
	 */
	this.modalOverlayMessage = ko.observable();
	/**
	 * Modal Overlay Message Visibility
	 * @type {boolean}
	 */
	this.modalOverlayMessageVisibility = ko.observable(false);
	/**
	 * Modal Overlay Visibility
	 * @type {boolean}
	 */
	this.modalOverlayVisibility = ko.observable(false);
	/**
	 * Modal Uber Deep link
	 * @type {string}
	 */
	this.modalUberDeepLink = ko.observable(false);
	/**
	 * Modal Uber Estimate
	 * @type {string}
	 */
	this.modalUberEstimate = ko.observable();
	/**
	 * Modal Uber Estimate Visibility
	 * @type {boolean}
	 */
	this.modalUberEstimateVisibility = ko.observable(false);
	/**
	 * Modal Uber Loading
	 * @type {boolean}
	 */
	this.modalUberLoading = ko.observable(false);

	
	/**
	 * Place List
	 * @type {Array.<object>}
	 */
	this.placeList = ko.observableArray([]); 


	/**
	 * Search Query
	 * @type {string}
	 */
	this.searchQuery = ko.observable();
	/**
	 * Search Radius
	 * @type {number}
	 */
	this.searchRadius = ko.observable(this.appConstants.SEARCH_RADIUS_MAX / 2);
	/**
	 * Search Clear Filter Visibility
	 */
	this.searchClearFilterVisibility = ko.observable(false);

	/**
	 * Loop through each Object in the dataModel places array
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

		/** If the user is swiping on a touch screen, return the function to prevent place from being selected */
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
	 * Filter place types in the place list
	 * @param  {String} query
	 */
	this.filter = function(query) {

		/** Loop through each place in the place list */
		for (var i=0;i<self.placeList().length;i++) {
			compareString(query, self.placeList()[i].name().toLowerCase(), self.placeList()[i]);
		}

		/**
		 * Compare String
		 * @param  {string} value       
		 * @param  {string} placeName   
		 * @param  {Object} placeObject             
		 */
		function compareString(value, placeName, placeObject) {

			/** Loop through the length of the search query string */
			for (var i=0;i<value.length;i++) {

				/** If characters match in order, show the place type, else hide it */
				if (placeName.indexOf(value) !== -1 && placeName.charAt(i) === value.charAt(i)) {
					placeObject.isHidden(false);
					self.searchClearFilterVisibility(true);
				} else {
					placeObject.isHidden(true);
				}
			}

			/** If the search query is an exact match, select the place type, else show all place types if the search query is empty */
			if (value.indexOf(placeName) === 0) {
				self.selectPlace(placeObject);
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
	 * Map Pan To. Pan to and center the map to the Current Location
	 * @see this.mapLatLang
	 */
	this.mapPanTo = function() {
		self.map.panTo(self.mapLatLang);
	}

	/**
	 * Zoom Map In
	 * @external 'getZoom()'
	 * @see {@link https://developers.google.com/maps/documentation/javascript/reference#Map}
	 */
	this.mapZoomIn = function() {
		var currentZoomLevel = self.map.getZoom();
		if(currentZoomLevel != 21){
		self.map.setZoom(currentZoomLevel + 1);}
	}

	/**
	 * Zoom Map Out
	 * @external 'getZoom()'
	 * @see {@link https://developers.google.com/maps/documentation/javascript/reference#Map}
	 */
	this.mapZoomOut = function() {
		var currentZoomLevel = self.map.getZoom();
		if(currentZoomLevel != 0){
		self.map.setZoom(currentZoomLevel - 1);}
	}

	/**
	 * Close Modal
	 */
 	this.closeModal = function() {
 		self.modalVisibilty(false);
 		self.modalInfoImageVisibility(false);
 		self.modalFoursquareVisibility(false);
 		self.modalUberEstimateVisibility(false);
 	} 

 	/**
 	 * Open Modal Overlay
 	 */
 	this.openModalOverlay = function() {
 		self.modalOverlayVisibility(true);
 	}

 	/**
 	 * Close modal Overlay
 	 */
 	this.closeModalOverlay = function() {
 		self.modalOverlayVisibility(false);
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
				/** Hide the price estimate */
				self.modalUberEstimateVisibility(false);
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
 * Knockout Custom Google Map Binding
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
      zoom: 15,
      zoomControl: false,
      mapTypeControl: false,
      streetViewControl: false,
      panControl: false,
      styles: [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2e5d4"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#c5dac6"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{"featureType":"road","elementType":"all","stylers":[{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#c5c6c6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#e4d7c6"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fbfaf7"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"color":"#acbcc9"}]}]
    };

    /**
     * Instantiate a new Google Map object
     * @type {Object}
     * @external 'new google.maps.Map'
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference?hl=en#Map}
     */
    bindingContext.$root.map = new google.maps.Map(element, mapOptions);


	  /** Try HTML5 Geolocation */
	  if(navigator.geolocation) {

	  	/**
	  	 * Get current position with HTML Geolocation
	  	 * @external 'navigator.geolocation.getCurrentPosition'
	  	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition}
	  	 */
	    navigator.geolocation.getCurrentPosition(function(position) {

	    		/** Update the current latitude & longitude */
	    		bindingContext.$root.mapCurrentLat(position.coords.latitude);
	    		bindingContext.$root.mapCurrentLng(position.coords.longitude);
	
					/** Set the map's current LatLng */
		      bindingContext.$root.mapLatLang = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);	

	    		/** Center map on current LatLng */
		      bindingContext.$root.map.setCenter(bindingContext.$root.mapLatLang);

		      /**
		       * Add a custom HTML current position marker to the map
		       * @external 'new RichMarker'
		       * @see {@link https://github.com/mikejoyceio/js-rich-marker}
		       */
			    var marker = new RichMarker({
			    	position: bindingContext.$root.mapLatLang,
			    	map: bindingContext.$root.map,
			    	flat: true,
			    	content: '<div class="map-current-location">' +
			    							'<div class="radial-pulse"></div>' +
			    					 '</div>'
			    });

		  }, function() {

	  		/** Browser supports Geolocation but hasn't been enabled */
	      handleNoGeolocation(true);

		}, 
			/**
			 * Enable high accuracy Geolocation
			 * @external 'enableHighAccuracy'
			 * @see {@link http://www.w3.org/TR/geolocation-API/#enablehighaccuracy} 
			 */
			{ maximumAge:600000, timeout:5000, enableHighAccuracy: true });
		  
		} else {

	    /** Browser doesn't support Geolocation */
	    handleNoGeolocation(false);

		}

		/**
		 * Handle no Geo-location
		 * @param  {object}
		 */
		function handleNoGeolocation(error) {

	    switch (error.code) {
        case error.PERMISSION_DENIED:
					/** If the appDebug variable is set to true, console.log the error */
					if (bindingContext.$root.appDebug) console.log('User denied the request for Geolocation.');
					/** Show the user notification message  */
					bindingContext.$root.notificationKeepAlive(true);
					bindingContext.$root.notificationMessage('User denied the request for Geolocation.');
					break;
        case error.POSITION_UNAVAILABLE:
					/** If the appDebug variable is set to true, console.log the error */
					if (bindingContext.$root.appDebug) console.log('Location information is unavailable.');
					/** Show the user notification message  */
					bindingContext.$root.notificationKeepAlive(true);
					bindingContext.$root.notificationMessage('Location information is unavailable.');
					break;
        case error.TIMEOUT:
					/** If the appDebug variable is set to true, console.log the error */
					if (bindingContext.$root.appDebug) console.log('The request to get user location timed out.');
					/** Show the user notification message  */
					bindingContext.$root.notificationKeepAlive(true);
					bindingContext.$root.notificationMessage('The request to get user location timed out.');
					break;
        case error.UNKNOWN_ERROR:
					/** If the appDebug variable is set to true, console.log the error */
					if (bindingContext.$root.appDebug) console.log('An unknown error occurred.');
					/** Show the user notification message  */
					bindingContext.$root.notificationKeepAlive(true);
					bindingContext.$root.notificationMessage('An unknown error occurred.');
					break;
	    }
		}

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

    		/** Show the map loader */
    		bindingContext.$root.mapLoaderVisibility(true);

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
  				bindingContext.$root.mapLoaderVisibility(false);
  			}, 1000);

    	} else {
	  		/**
	  		 * Callback Error Handling. Error status and messages are passed the the callbackError function.
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
						break;
					case statusCode.UNKNOWN_ERROR:
						callbackError(status+' The PlacesService request could not be processed due to a server error. The request may succeed if you try again.', 'Server Error. Please try again.');	
						break;
					case statusCode.ZERO_RESULTS:
						callbackError(status+' No result was found for this request.', 'No Results');	
						break;
					default: 
						callbackError('Unknown error', 'Error. Please try again.');
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
			var infoBoxContent = '<div class="info-box-content">' + 
											'<div class="info-box-title">'+data.name+'</div>' + 
											'<div class="info-box-image" style="background-image: url('+data.photo+');"></div>' + 
											'<div class="info-box-rating rating rating-0'+data.rating+'">' +
												'<span class="star star-01"></span>' +
												'<span class="star star-02"></span>' +
												'<span class="star star-03"></span>' +
												'<span class="star star-04"></span>' +
												'<span class="star star-05"></span>' +
											'</div>' +
											'<i class="info-box-icon fa '+data.icon+'"></i>' +
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
		 		data.marker.setIcon({ path: fontawesome.markers.CIRCLE,
					fillColor: '#ed5565',
					fillOpacity: 1,
					scale: 0.32,
					strokeColor: '#ffffff',
					strokeWeight: 3
				});

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
							rating: typeof place.rating !== 'undefined' ? 'rating-0'+Math.round(place.rating) : 'rating-00',
							price: typeof place.price_level !== 'undefined' ? 'price-0'+place.price_level : 'price-00'
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
	    bindingContext.$root.mapLoaderVisibility(false);
	   	bindingContext.$root.notificationKeepAlive(true);
  		bindingContext.$root.notificationMessage(notificationMessage);	  	    	

    }

	} 

};

/**
 * Knockout Custom Notification Binding
 * @type {Object}
 * @external 'ko.bindingHandlers'
 * @see {@link http://knockoutjs.com/documentation/custom-bindings.html}
 */
ko.bindingHandlers.notification = {

	/**
	 * Update: Called when the binding is first applied and again whenever any observables change
	 * @param  {Object} element         DOM element involved in this binding
	 * @param  {Function} valueAccessor Function to get the current model property of this binding
	 * @param  {Object} allBindings     Object used to access all model values bound to this DOM element
	 * @param  {Object} viewModel       Access the view model
	 * @param  {Object} bindingContext  Holds the binding context available to this DOM elements bindings
	 */
	update: function(element, valueAccessor, allBindingsAccessor, viewModel) {

		var value = valueAccessor();	

		/**
		 * The notifcation binding can be passed a string or an object with properties
		 * @type {[type]}
		 */
		var options = typeof value == 'object' ? value : { message: value };

		/**
		 * Notication message
		 * @type {string}
		 */
		var message = ko.utils.unwrapObservable(options.message);

		/**
		 * Notification default fade out duration
		 * @type {number}
		 */
		var duration = options.duration !== undefined ? ko.utils.unwrapObservable(options.duration) : 5000;

		/**
		 * Notification fade out duration
		 * @type {number}
		 */
		var fadeoutDuration = options.fadeoutDuration !== undefined ? ko.utils.unwrapObservable(options.fadeoutDuration) : 200;

		/**
		 * Notifcation hide
		 * @type {boolean}
		 */
		var hide = options.hide !== undefined ? ko.utils.unwrapObservable(options.hide) : true;

		/**
		 * Notification show
		 * @type {boolean}
		 */
		var fade = options.fade !== undefined ? ko.utils.unwrapObservable(options.fade) : true;

		/** Set the value of the message */
		if (message === null || message === undefined) {
			message = "";
		}

		/**
		 * Set the notification message
		 * @external '$().html'
		 * @see {@link http://api.jquery.com/html/}
		 */
		$(element).html(message);	

		/**
		 * Clear any outstanding timeouts
		 * @external 'clearTimeout'
		 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/clearTimeout}
		 */
		clearTimeout(element.notificationTimer);

		if (message == '') {

		/**
		 * Hide the notification
		 * @external '$().hide'
		 * @see {@link http://api.jquery.com/hide/}
		 */
			$(element).hide();
			return;
		}
		
		/**
		 * If there are any animations running, stop them and show the notification, otherwise show it
		 * @external '$().stop'
		 * @see {@link https://api.jquery.com/stop/}
		 */
		$(element).stop(true, true).show();

		if (!hide) {

			/**
			 * Run a timeout to hide the notification
			 * @external 'setTimeout'
			 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setTimeout#Callback_arguments}
			 */
			element.notificationTimer = setTimeout(function() {

				if (fade) {

					/**
					 * Fade the notification out
					 * @external '$().fadeOut'
					 * @see {@link http://api.jquery.com/fadeout/}
					 */
					jQuery(element).fadeOut(fadeoutDuration, function() {
            options.message('');

          });

				} else {

					/**
					 * Hide the notification
					 * @external '$().hide'
					 * @see {@link http://api.jquery.com/hide/}
					 */
					jQuery(element).hide();
					options.message('');

				}
			}, duration);

		} 
	}
};

/**
 * Knockout Custom Range Slider Binding
 * @type {Object}
 * @external 'ko.bindingHandlers'
 * @see {@link http://knockoutjs.com/documentation/custom-bindings.html}
 */
ko.bindingHandlers.rangeSlider = {

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
		 * Ion Range Slider
		 * @external '$().ionRangeSlider'
		 * @see {@link https://github.com/IonDen/ion.rangeSlider}
		 */
		$(element).ionRangeSlider({
		    min: bindingContext.$root.appConstants.SEARCH_RADIUS_MIN,
		    max: bindingContext.$root.appConstants.SEARCH_RADIUS_MAX,
		    from: bindingContext.$root.appConstants.SEARCH_RADIUS_MAX / 2,
		    step: bindingContext.$root.appConstants.SEARCH_RADIUS_MIN,
		    postfix: ' km',
		    hide_min_max: true,
		    prettify_enabled: true,
		    prettify: function(num) {
		    	return num / 1000;
		    }
		});

		/** Bind to the input value */
		ko.bindingHandlers.value.init(element, valueAccessor, allBindings);
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

		/**
		 * Grab the Ion Range Slider DOM object
		 * @type {Object}
		 */
		var rangeSlider = $(element).data('ionRangeSlider');

		/**
		 * Update Ion Range Slider
		 */
		rangeSlider.update({
			from: ko.unwrap(valueAccessor())
		});

		/** Update the input value */
		ko.bindingHandlers.value.update(element, valueAccessor)

	}
};

/**
 * Knockout Custom Scroll Bar Binding
 * @type {Object}
 * @external 'ko.bindingHandlers'
 * @see {@link http://knockoutjs.com/documentation/custom-bindings.html}
 */
ko.bindingHandlers.scrollBar = {

	/**
	 * Update: Called when the binding is first applied and again whenever any observables change
	 * @param  {Object} element         DOM element involved in this binding
	 * @param  {Function} valueAccessor Function to get the current model property of this binding
	 * @param  {Object} allBindings     Object used to access all model values bound to this DOM element
	 * @param  {Object} viewModel       Access the view model
	 * @param  {Object} bindingContext  Holds the binding context available to this DOM elements bindings
	 */
	update: function(element, valueAccessor, allBindingsAccessor) {

		/**
		 * Viewport Width
		 * @type {number}
		 */
		var viewportWidth = ko.unwrap(valueAccessor());

		/** If the viewport width is greater than 1024px instantiate the custom scrollbar, else destroy it */
		if (viewportWidth > 1024) {

			/**
			 * M Custom Scrollbar
			 * @external '$().mCustomScrollbar'
			 * @see {@link http://manos.malihu.gr/jquery-custom-content-scroller/}
			 */
			$(element).mCustomScrollbar({
				keyboard: { scrollType:'stepped' },
				mouseWheel: { scrollAmount:10 }
			});

		} else {
			$(element).mCustomScrollbar('destroy');
		}
	}
};

/**
 * Knockout Custom Clipboard Binding
 * @type {Object}
 * @external 'ko.bindingHandlers'
 * @see {@link http://knockoutjs.com/documentation/custom-bindings.html}
 */
ko.bindingHandlers.clipboard = {

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
		 * Check for mobile devices
		 * @type {RegExp}
		 * @external 'navigator.userAgent'
		 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/navigator}
		 */
		var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;	

		/** If isMobile is false */
		if (!isMobile) {

			/** Show the modal overlay copy button */
			bindingContext.$root.modalOverlayCopyButtonVisibility(true);

			/** Set the modal overlay group group buttons CSS class to two */
			bindingContext.$root.modalOverlayGroupButtons('two')

			/**
			 * Clipboard
			 * @type {Object}
			 * @external 'new Clipboard'
			 * @see {@link http://zenorocha.github.io/clipboard.js/}
			 */
			var clipboard = new Clipboard(element);	

			/**
			 * Clipboard Success
			 * @external '$().on'
			 * @see {@link http://api.jquery.com/on/}
			 */
			clipboard.on('success', function(e) {
				bindingContext.$root.modalOverlayMessage('Copied!');
				bindingContext.$root.modalOverlayMessageVisibility(true);
				setTimeout(function() {
					bindingContext.$root.modalOverlayMessageVisibility(false);					
				}, 1000);
			});

			/**
			 * Clipboard Error
			 * @external '$().on'
			 * @see {@link http://api.jquery.com/on/}
			 */
			clipboard.on('error', function(e) {

				/**
				 * App Version
				 * @type {string}
				 */
				var appVersion = navigator.appVersion.indexOf("Mac");

				/** Check the operating system */
				if (appVersion!=-1) {

					/** Set the overlay message text for Mac */
					bindingContext.$root.modalOverlayMessage('Press ⌘+C to copy');
				} else {

					/** Set the overlay message text for all other operating systems */
					bindingContext.$root.modalOverlayMessage('Press Ctrl+C to copy');	
				}

				/** Show the overlay message */
				bindingContext.$root.modalOverlayMessageVisibility(true);

				/** After a short timeout, hide the overlay message */
				setTimeout(function() {
					bindingContext.$root.modalOverlayMessageVisibility(false);					
				}, 2000);

			});

		} else {

			/** Hide the modal overlay copy button */
			bindingContext.$root.modalOverlayCopyButtonVisibility(false);

			/** Set the modal overlay group buttons CSS class to one */
			bindingContext.$root.modalOverlayGroupButtons('one')

		}
	}	
};

/**
 * Knockout Custom WheelNav Binding
 * @type {Object}
 * @external 'ko.bindingHandlers'
 * @see {@link http://knockoutjs.com/documentation/custom-bindings.html}
 */
ko.bindingHandlers.wheelNav = {

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
		 * WheelNav
		 * @type {object}
		 * @external 'new wheelNav'
		 * @see {@link http://wheelnavjs.softwaretailoring.net/documentation.html}
		 */
		bindingContext.$root.appWheelNav = new wheelnav(element.id);
    bindingContext.$root.appWheelNav.slicePathFunction = slicePath().DonutSlice;
		bindingContext.$root.appWheelNav.sliceInitPathFunction = bindingContext.$root.appWheelNav.slicePathFunction;
    bindingContext.$root.appWheelNav.initPercent = 0.1;
    bindingContext.$root.appWheelNav.navAngle = 270;
		bindingContext.$root.appWheelNav.wheelRadius = bindingContext.$root.appWheelNav.wheelRadius * 0.83;
		bindingContext.$root.appWheelNav.cssMode = true;
		bindingContext.$root.appWheelNav.markerEnable = true;
		bindingContext.$root.appWheelNav.markerPathFunction = markerPath().DropMarker;

		/**
		 * An array to hold the wheelNav options
		 * @type {Array}
		 */
		var wheelNavOptions = [];

		/** Divide the max search radius by 1000 and push the index into the wheelNavOptions array */
		for (var i=1,j=bindingContext.$root.appConstants.SEARCH_RADIUS_MAX / 1000;i<=j;i++) {
			wheelNavOptions.push(i.toString());
		}

		bindingContext.$root.appWheelNav.createWheel(wheelNavOptions);

		/** Create fucntions for each wheelNav options, fired on click and touchend */
		for (i=0,j=wheelNavOptions.length;i<j;i++) {
			createNavigateFunction(i);
		} 

		/**
		 * Create Navigate Function
		 * @param  {number} index Index of the wheelNav option
		 */
		function createNavigateFunction(index) {
			bindingContext.$root.appWheelNav.navItems[index].navigateFunction = function() { bindingContext.$root.searchRadius((index + 1) * 1000)};
		}

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

		/** Grab the current value of the binding */
   	var searchRadius = ko.unwrap(valueAccessor()) / 1000 - 1;

   	/** Set the wheelNav option */
		bindingContext.$root.appWheelNav.navigateWheel(searchRadius);
             
	}
};

/**
 * Knockout Custom Compass Binding
 * @type {Object}
 * @external 'ko.bindingHandlers'
 * @see {@link http://knockoutjs.com/documentation/custom-bindings.html}
 */
ko.bindingHandlers.compass = {

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
		 * Compass Watch
		 * @param  {number} heading
		 * @external 'Compass.watch'
		 * @see {@link https://github.com/ai/compass.js}
		 */
		Compass.watch(function (heading) {

			/**
			 * Show the element
			 * @external '$().show'
			 * @see {@link http://api.jquery.com/show/}
			 */
			$(element).show();

			/**
			 * Set CSS transform rotation
			 * @external '$().css'
			 * @see {@link http://api.jquery.com/css/}
			 */
		  $(element).css({
		  	'-webkit-transform': 'rotate(' + (-heading) + 'deg)',
		  	'-moz-transform': 'rotate(' + (-heading) + 'deg)',
		  	'-ms-transform': 'rotate(' + (-heading) + 'deg)',
		  	'-o-transform': 'rotate(' + (-heading) + 'deg)',
		  	'transform': 'rotate(' + (-heading) + 'deg)'
		  });

		});

	}	
};

/**
 * Knockout Custom Viewport Width Binding
 * @type {Object}
 * @external 'ko.bindingHandlers'
 * @see {@link http://knockoutjs.com/documentation/custom-bindings.html}
 */
ko.bindingHandlers.viewportWidth = {

	/**
	 * Init: Called when the binding is first applied.
	 * @param  {Object} element         DOM element involved in this binding
	 * @param  {Function} valueAccessor Function to get the current model property of this binding
	 * @param  {Object} allBindings     Object used to access all model values bound to this DOM element
	 * @param  {Object} viewModel       Access the view model
	 * @param  {Object} bindingContext  Holds the binding context available to this DOM elements bindings
	 */
	init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {

		/** Set the viewport width on load */
		bindingContext.$root.appViewportWidth($(window).width());	

		/** 
		 * When the browser window is resized, set the binding to the windows width in pixels 
		 * @external '$().resize'
		 * @see {@link https://api.jquery.com/resize/} 
		 */
		$(window).resize(function() {
			bindingContext.$root.appViewportWidth($(this).width());
		});
	}
};

/**
 * Knockout Custom Prevent SwipeTap Binding.
 * @type {Object}
 * @external 'ko.bindingHandlers'
 * @see {@link http://knockoutjs.com/documentation/custom-bindings.html}
 */
ko.bindingHandlers.preventSwipeTap = {

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
		 * When the touchmove event is fired on the element, set the binding to true
		 * @param {string}
		 * @param {function}
		 * @external '$().on'
		 * @see {@link http://api.jquery.com/on/}
		 */
		$(element).on("touchmove", function(){
			bindingContext.$root.appSwiping(true);
		});

		/** 
		 * When the touchstart event is fired on the element, set the binding to false 
		 * @param {string}
		 * @param {function}
		 * @external '$().on'
		 * @see {@link http://api.jquery.com/on/}
		 */
		$(element).on("touchstart", function(){
	  	bindingContext.$root.appSwiping(false);
		});

	}	
};

/**
 * Knockout Custom Hover State Binding
 * @type {Object}
 * @external 'ko.bindingHandlers'
 * @see {@link http://knockoutjs.com/documentation/custom-bindings.html}
 */
ko.bindingHandlers.hover = { 

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
		 * When the mouseover event is fired on the element, add the 'hover' CSS class from the element
		 * @param {string}
		 * @param {function}
		 * @external '$().on'
		 * @see {@link http://api.jquery.com/on/}
		 */
		$(element).on("mouseover", function(){
			$(element).addClass('hover');
		});

		/** 
		 * When the mouseout event is fired on the element, remove the 'hover' CSS class from the element
		 * @param {string}
		 * @param {function}
		 * @external '$().on'
		 * @see {@link http://api.jquery.com/on/}
		 */
		$(element).on("mouseout", function(){
	  	$(element).removeClass('hover');
		});

	}	
};

/**
 * Apply Knockout Bindings
 * @param {Object}
 * @external 'ko.applyBindings'
 * @see {@link http://knockoutjs.com/documentation/observables.html}
 */
ko.applyBindings(new ViewModel());
