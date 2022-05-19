/**
 * @file Request Uber Ride Deep Link
 */

function uberRideRequest(viewModel) {

  /**
   * Uber Deep Link
   * @type {string}
   * @see {@link https://developer.uber.com/v1/deep-linking/}
   */
  let uberDeepLink;

  uberDeepLink = viewModel.appConstants.UBER_URL;
  uberDeepLink += 'client_id=' + viewModel.appConstants.UBER_CLIENT_ID;
  uberDeepLink += 'pickup_latitude=' + viewModel.mapCurrentLat();
  uberDeepLink += 'pickup_longitude=' + viewModel.mapCurrentLng();
  uberDeepLink += 'dropoff_latitude=' + viewModel.modalInfoLat();
  uberDeepLink += 'dropoff_longitude=' + viewModel.modalInfoLng();
  uberDeepLink += 'dropoff_nickname=' + viewModel.modalInfoName();

  /** If modalUberDeepLink isn't empty, open the link */
  if (viewModel.modalUberDeepLink()) {
    window.open(uberDeepLink);
  }
}

export default uberRideRequest;
