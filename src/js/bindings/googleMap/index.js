/**
 * @file Knockout Google Map Binding. Initializes and updates a Google map instance.
 */

import ko from 'knockout'
import googleMapConfig from '../../config/googleMapConfig'
import clearMarkers from './clearMarkers'
import handleNearbySearchResult from './handleNearbySearchResult'

ko.bindingHandlers.map = {

	/**
	 * Init: Called when the binding is first applied.
	 * @param  {Object} element         DOM element involved in this binding
	 * @param  {Function} valueAccessor Function to get the current model property of this binding
	 * @param  {Object} allBindings     Object used to access all model values bound to this DOM element
	 * @param  {Object} viewModel       Access the view model
	 * @param  {Object} viewModel  Holds the binding context available to this DOM elements bindings
	 */
  init: function(element, valueAccessor, allBindings, viewModel) {

    /**
     * Instantiate a new Google Map object
     * @type {Object}
     * @external 'new google.maps.Map'
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference?hl=en#Map}
     */
    viewModel.map = new google.maps.Map(element, googleMapConfig);

	},

	/**
	 * Update: Called when the binding is first applied and again whenever any observables change
	 * @param  {Object} element         DOM element involved in this binding
	 * @param  {Function} valueAccessor Function to get the current model property of this binding
	 * @param  {Object} allBindings     Object used to access all model values bound to this DOM element
	 * @param  {Object} viewModel       Access the view model
	 * @param  {Object} viewModel  Holds the binding context available to this DOM elements bindings
	 */
	update: function(element, valueAccessor, allBindings, viewModel) {

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
  	if (viewModel.mapMarkers()) {
  		clearMarkers(viewModel);
  	}

		/**
		 * Google Maps places search request object
		 * @type {Object}
		 */
    var request = {
    	location: viewModel.mapLatLang,
    	radius: value.searchRadius(),
    	types: []
    };

    /** Show the map loader */
    viewModel.mapLoadingVisibility(true);

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
    var mapPlaces = new google.maps.places.PlacesService(viewModel.map);

    /**
     * Search nearby places
     * @external 'nearbySearch()'
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference?hl=en#PlacesService}
     */
    mapPlaces.nearbySearch(request, function(results, status) {
      handleNearbySearchResult(results, status, viewModel)
    });
  }
};