/**
 * @file Clear Google Map markers
 */

function clearMarkers(viewModel) {

  /** Loop through each marker and set it to 'null' */
  for (let i=0, j=viewModel.mapMarkers().length; i<j; i++) {

  /**
   * @external 'setMap(null)'
   * @see {@link https://developers.google.com/maps/documentation/javascript/markers#remove}
   */
   viewModel.mapMarkers()[i].setMap(null);
  }

  /** Reset the mapMarkers array length to 0 */
  viewModel.mapMarkers().length = 0;
}

export default clearMarkers;
