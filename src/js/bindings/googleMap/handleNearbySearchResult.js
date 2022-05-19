/**
 * @file Handle Google Places nearby search callback results
 */

import clearMarkers from './clearMarkers'
import setPlaces from './setPlaces'
import handleNearbySearchError from './handleNearbySearchError'

/**
 * Google Maps PlacesService callback function
 * @param  {Array.<Object>} results
 * @param  {Object} status
 * @see {@link https://developers.google.com/maps/documentation/javascript/places#place_search_responses}
 */
function handleNearbySearchResult(results, status, viewModel) {

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
    clearMarkers(viewModel);

    /** Reset the places array length to 0 */
    viewModel.mapPlaces().length = 0;

    /** Hide user notification messages */
    viewModel.notificationKeepAlive(false);
    viewModel.notificationFadeDuration(0);

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
    viewModel.mapPlaces(mapPlaces)

    /** Set Place Markers, Info Windows and Modals	 */
    setPlaces(viewModel);

    /** Hide the map loading animation */
    setTimeout(function() {
      viewModel.mapLoadingVisibility(false);
    }, 1000);

  } else {

    /**
     * Callback Error Handling. Error status and messages are passed the the handleNearbySearchError function.
     * @see 'handleNearbySearchError()'
     */
    switch (status) {

      case statusCode.ERROR:
        handleNearbySearchError(viewModel, status+' There was a problem contacting the Google servers.', 'Connection error');
        break;
      case statusCode.INVALID_REQUEST:
        handleNearbySearchError(viewModel, status+' This request was invalid.', 'Error. Please try again.');
        break;
      case statusCode.OVER_QUERY_LIMIT:
        handleNearbySearchError(viewModel, status+' The webpage has gone over its request quota.', 'Slow down!');
        break;
      case statusCode.REQUEST_DENIED:
        handleNearbySearchError(viewModel, status+' This webpage is not allowed to use the PlacesService.', 'Error. Please try again.');

        /** Show reload app button */
        self.appReloadVisbility(true);

        break;
      case statusCode.UNKNOWN_ERROR:
        handleNearbySearchError(viewModel, status+' The PlacesService request could not be processed due to a server error. The request may succeed if you try again.', 'Server Error. Please try again.');
        break;
      case statusCode.ZERO_RESULTS:
        handleNearbySearchError(viewModel, status+' No result was found for this request.', 'No Results');
        break;
      default:
        handleNearbySearchError(viewModel, 'Unknown error', 'Error. Please try again.');

        /** Show reload app button */
        self.appReloadVisbility(true);

    }
  }
}

export default handleNearbySearchResult;
