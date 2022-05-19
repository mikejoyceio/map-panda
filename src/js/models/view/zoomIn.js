/**
 * @file Zoom the map in
 */

/**
 * @external 'getZoom()'
 * @see {@link https://developers.google.com/maps/documentation/javascript/reference#Map}
 */
function zoomIn(viewModel) {
  var currentZoomLevel = viewModel.map.getZoom();

  if (currentZoomLevel != 21) {
    viewModel.map.setZoom(currentZoomLevel + 1);
  }
}

export default zoomIn;
