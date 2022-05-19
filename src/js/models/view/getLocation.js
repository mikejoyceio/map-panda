/**
 * @file Grab the user's current location
 */

function getLocation(viewModel) {

  /** Try HTML5 Geolocation */
  if(navigator.geolocation) {

    /** Hide the landing action */
    viewModel.appLandingActionVisibility(false);

    /** Hide the landing info */
    viewModel.appLandingInfoVisibility(false);

    /** Show landing loading animation */
    viewModel.appLandingLoadingVisibility(true);

    /**
     * Get current position with HTML Geolocation
     * @external 'navigator.geolocation.getCurrentPosition'
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition}
     */
    navigator.geolocation.getCurrentPosition(function (position) {

        /** Update the current latitude & longitude */
        viewModel.mapCurrentLat(position.coords.latitude);
        viewModel.mapCurrentLng(position.coords.longitude);

        /** Set the location on the map */
        viewModel.setLocation();

        setTimeout(function() {

          /** Hide the landing */
          viewModel.appLandingVisbility(false);

          /** Hide the landing loading animation */
          viewModel.appLandingLoadingVisibility(false);
        }, 5000);

    }, viewModel.handleNoGeolocation, { maximumAge:0, timeout:10000, enableHighAccuracy: true });

  } else {

    /** Browser doesn't support Geolocation */
    viewModel.handleNoGeolocation(false);

  }
}

export default getLocation;
