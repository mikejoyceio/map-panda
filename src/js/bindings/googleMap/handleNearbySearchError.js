/**
 * @file Handle Google Places nearby search callback error
 */

/**
  * This function will create both a developer-friendly error message for debugging purposes and a more readable,
  * user-friendly error message for the user.
  * @param  {string} statusMessage       Developer-friendly error message
  * @param  {string} notificationMessage User-friendly notification message
  */
function handleNearbySearchError(viewModel, statusMessage, notificationMessage) {

  /** If the appDebug variable is set to true, console log the error */
  if (viewModel.appDebug) console.log(statusMessage);

  /** Show the user notification message */
  viewModel.mapLoadingVisibility(false);
  viewModel.notificationKeepAlive(true);
  viewModel.notificationMessage(notificationMessage);

}

export default handleNearbySearchError;
