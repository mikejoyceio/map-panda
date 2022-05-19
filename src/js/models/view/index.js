/**
 * @file View Model
 */

 import ko from 'knockout'
 import checkLocalStorage from './checkLocalStorage'
 import clearFilter from './clearFilter'
 import closeModal from './closeModal'
 import constants from './constants'
 import dataModel from '../data'
 import getLocation from './getLocation'
 import getUberRideEstimate from './getUberRideEstimate'
 import handleNoGeolocation from './handleNoGeolocation'
 import localStorageAvailable from './localStorageAvailable'
 import panTo from './panTo'
 import place from './place'
 import searchFoursquare from './searchFoursquare'
 import selectPlace from './selectPlace'
 import setLocation from './setLocation'
 import uberRideRequest from './uberRideRequest'
 import zoomIn from './zoomIn'
 import zoomOut from './zoomOut'

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
const ViewModel = function() {

	/**
	 * Invoke strict mode
	 * @see {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Strict_mode}
	 */
	'use strict';

  /**
	 * Map - holds the Google map instance
	 * @type {Object}
	 */
	this.map = null;

  /**
	 * App Debug - set to true to console.log errors when debugging
	 * @type {boolean}
	 */
	this.appDebug = false;

  /**
	 * Map LatLng - stores the map's Latitude & Longitude
	 * @type {number}
	 */
	this.mapLatLang = null;

  /**
   *
   *  Observables
   *
   */

  /**
	 * App Constants
	 * @type {Object}
	 */
	this.appConstants = constants;

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
	dataModel.places.forEach((placeItem) => {
		this.placeList.push(new place(placeItem));
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
	this.selectPlace = (place) => {
    selectPlace(this, place);
  };

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
   *
   *  Functions
   *
   */

	this.clearFilter = (data, event) => {
    clearFilter(this, data, event);
	}

	this.panTo = () => {
    panTo(this);
	}

	this.zoomIn = () => {
    zoomIn(this);
	}

	this.zoomOut = () => {
    zoomOut(this)
	}

 	this.closeModal = () => {
    closeModal(this);
 	}

 	this.openModalOverlay = () => {
 		this.modalOverlayVisibility(true);
 	}

 	this.closeModalOverlay = () => {
 		this.modalOverlayVisibility(false);
 	}

 	this.reloadApp = function() {
 		document.location.reload(true);
 	}

	this.searchFoursquare = () => {
    searchFoursquare(this);
	}

	this.getUberRideEstimate = () => {
    getUberRideEstimate(this)
	};

	this.uberRideRequest = () => {
	  uberRideRequest(this);
	}

	this.getLocation = () => {
	  getLocation(this);
	}

	this.setLocation = () => {
    setLocation(this);
	}

 	this.handleNoGeolocation = (error) => {
    handleNoGeolocation(this, error);
	}

	this.localStorageAvailable = () => {
		localStorageAvailable(this);
	}

	this.localStorageUnavailable = () => {
		self.appLandingVisbility(true);
	}

	this.checkLocalStorage = checkLocalStorage;

	/**
	 * Init App. Initialize the application by checking if the Google Maps API is available
	 * and if localStorage is available or not.
	 */
	this.initApp = () => {

		/** Check if the Google Maps API is loaded and available to use */
    if (typeof google === 'object' && typeof google.maps === 'object') {

	    /** localStorage is available */
			if (this.checkLocalStorage()) {

				/** Call the LocalStorageAvailable function */
				this.localStorageAvailable();

			/** localStorage isn't available */
			} else {

				/** Call the LocalStorageUnavailable function */
				this.localStorageUnavailable();
			}

			/** Google Maps API isn't available */
  	} else {

			/** If the appDebug variable is set to true, console.log the error */
			if (this.appDebug) console.log('Google Maps API failed to load');

			/** Show the user notification message  */
			this.notificationKeepAlive(true);
			this.notificationMessage('Please check your connection');
  	}

	}

	this.initApp();
}

/**
 * Apply Knockout Bindings
 * @param {Object}
 * @external 'ko.applyBindings'
 * @see {@link http://knockoutjs.com/documentation/observables.html}
 */
ko.applyBindings(new ViewModel());
