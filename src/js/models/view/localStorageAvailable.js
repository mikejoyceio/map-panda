/**
 * @file Check local storage for latitude and longitude values and if
 *       they exist, check if the current latitude and longitude match.
 */

import dataModel from '../data'

function localStorageAvailable(viewModel) {

  /** localStorage Latitude and Longitude values aren't set */
  if (!dataModel.get('lat') && !dataModel.get('lat')) {

    /** Show the landing */
    viewModel.appLandingVisbility(true);

    /** Show the landing action */
    viewModel.appLandingActionVisibility(true);

    /** Show the landing info */
    viewModel.appLandingInfoVisibility(true);

  /** localStorage Latitude and Longitude values are set */
  } else {

    /** Hide the landing action */
    viewModel.appLandingActionVisibility(false);

    /** Hide the landing info */
    viewModel.appLandingInfoVisibility(false);

    /** Show landing loading animation */
    viewModel.appLandingLoadingVisibility(true);

    /** Grab the Latitude and Longitude values from localStorage via dataModel helper functions */
    viewModel.mapCurrentLat(parseFloat(dataModel.get('lat')));
    viewModel.mapCurrentLng(parseFloat(dataModel.get('lng')));

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
      if (viewModel.mapCurrentLat().toFixed(4) == position.coords.latitude.toFixed(4) && viewModel.mapCurrentLng().toFixed(4) == position.coords.longitude.toFixed(4)) {

        /** Set the users location on the map */
        viewModel.setLocation();

        setTimeout(function() {

          /** Hide the landing */
          viewModel.appLandingVisbility(false);
        }, 5000);

        /**
         * Else, the current location of has changed.
         */
      } else {

        setTimeout(function() {

          /** Show the landing action */
          viewModel.appLandingActionVisibility(true);

          /** Show the landing info */
          viewModel.appLandingInfoVisibility(true);

          /** Hide landing loading animation */
          viewModel.appLandingLoadingVisibility(false);
        }, 3000);

      }

    }, viewModel.handleNoGeolocation, { maximumAge:0, timeout:10000, enableHighAccuracy: true });

  }
}

export default localStorageAvailable;
