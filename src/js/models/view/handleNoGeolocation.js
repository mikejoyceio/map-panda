/**
 * @file Handle no Geo-location
 */

function handleNoGeolocation(viewModel, error) {

  /** Show the landing action */
	viewModel.appLandingActionVisibility(true);

	/** Show the landing info */
	viewModel.appLandingInfoVisibility(true);

	/** Hide landing loading animation */
	viewModel.appLandingLoadingVisibility(false);

  switch (error.code) {
    case error.PERMISSION_DENIED:

			/** If the appDebug variable is set to true, console.log the error */
			if (viewModel.appDebug) console.log('User denied the request for Geolocation.');

			/** Show the user notification message  */
			viewModel.notificationKeepAlive(true);
			viewModel.notificationMessage('Please share your location');

			break;
    case error.POSITION_UNAVAILABLE:

			/** If the appDebug variable is set to true, console.log the error */
			if (viewModel.appDebug) console.log('Location information is unavailable.');

			/** Show the user notification message  */
			viewModel.notificationKeepAlive(true);
			viewModel.notificationMessage('Geolocation unavailable.');

			break;
    case error.TIMEOUT:

			/** If the appDebug variable is set to true, console.log the error */
			if (viewModel.appDebug) console.log('The request to get user location timed out.');

			/** Show the user notification message  */
			viewModel.notificationKeepAlive(true);
			viewModel.notificationMessage('Geolocation timed out.');

			/** Show reload app button */
			viewModel.appReloadVisbility(true);

			break;
    case error.UNKNOWN_ERROR:

			/** If the appDebug variable is set to true, console.log the error */
			if (viewModel.appDebug) console.log('An unknown error occurred.');

			/** Show the user notification message  */
			viewModel.notificationKeepAlive(true);
			viewModel.notificationMessage('Unknown error.');

			/** Show reload app button */
			viewModel.appReloadVisbility(true);

			break;
  }
}

export default handleNoGeolocation;
