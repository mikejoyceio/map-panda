/**
 * @file Zoom the map out
 */

/**
 * @external 'getZoom()'
 * @see {@link https://developers.google.com/maps/documentation/javascript/reference#Map}
 */
function zoomOut(viewModel) {
  var currentZoomLevel = viewModel.map.getZoom();

  if (currentZoomLevel != 0) {
    viewModel.map.setZoom(currentZoomLevel - 1);
  }
}

export default zoomOut;
