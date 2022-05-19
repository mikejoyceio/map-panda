/**
 * @file Knockout Google Map Binding.
 * Initializes and updates a Google map instance.
 */

import ko from 'knockout'
import googleMapConfig from '@config/googleMap'
import clearMarkers from './clearMarkers'
import handleNearbySearchResult from './handleNearbySearchResult'

/**
 * @external 'ko.bindingHandlers'
 * @see {@link http://knockoutjs.com/documentation/custom-bindings.html}
 */
ko.bindingHandlers.map = {
  init: function(element, valueAccessor, allBindings, viewModel) {

    /**
     * Instantiate a new Google Map object
     * @type {Object}
     * @external 'new google.maps.Map'
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference?hl=en#Map}
     */
    viewModel.map = new google.maps.Map(element, googleMapConfig);

	},
	update: function(element, valueAccessor, allBindings, viewModel) {

  	const value = valueAccessor();

		/** If the currentPlace isn't active, return the function */
		if (!value.currentPlace().isActive()) {
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
    const request = {
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
    const mapPlaces = new google.maps.places.PlacesService(viewModel.map);

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
