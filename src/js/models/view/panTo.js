/**
 * @file Pan to and center the map to the current location
 */

/**
 * @external '.panTo()'
 * @see {@link https://developers.google.com/maps/documentation/javascript/reference?hl=en#Map}
 */
function panTo(viewModel) {
  viewModel.map.panTo(viewModel.mapLatLang);
}

export default panTo;
