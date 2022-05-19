/**
 * @file Select Google Map place
 */

function selectPlace(viewModel, place) {

  /**
   * If the user is swiping on a touch screen, return the function to prevent the place type from being selected
   * @see 'ko.bindingHandlers.preventSwipeTap'
   */
  if (viewModel.appSwiping()) {
    return;
  }

  /** Hide the Notification Message */
  viewModel.notificationKeepAlive(false);
  viewModel.notificationFadeDuration(0);

  /** Set the Current Place value */
  viewModel.currentPlace(place);

  /** Deselect each Place List item hide Map Info */
  for (var i=0,j=viewModel.placeList().length;i<j;i++) {
    viewModel.placeList()[i].isActive(false);
    viewModel.mapInfoVisibility(false);
  }

  /** Set the Current Place to active */
  place.isActive(!place.isActive());

  /** Show Map Info */
  viewModel.mapInfoVisibility(true);
}

export default selectPlace;
