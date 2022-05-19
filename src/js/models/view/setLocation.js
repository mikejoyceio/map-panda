/**
 * @file Set the user's current location on the map.
 */

import { RichMarker } from 'js-rich-marker'
import dataModel from '../data'

function setLocation(viewModel) {

  /** Set the map's current LatLng */
  viewModel.mapLatLang = new google.maps.LatLng(viewModel.mapCurrentLat(), viewModel.mapCurrentLng());

  /** Center map on current LatLng */
  viewModel.map.setCenter(viewModel.mapLatLang);

  /** Check if localStorage is available in the browser */
  if (viewModel.checkLocalStorage()) {

    /** Save current Latitude and Longitude values to localStorage via dataModel helper methods */
    dataModel.set('lat', viewModel.mapCurrentLat());
    dataModel.set('lng', viewModel.mapCurrentLng());
  }

  /**
  * Add a custom HTML current position marker to the map
  * @external 'new RichMarker'
  * @see {@link https://github.com/mikejoyceio/js-rich-marker}
  */
  const marker = new RichMarker({
    position: viewModel.mapLatLang,
    map: viewModel.map,
    flat: true,
    content: '<div class="map__current-location">' +
           '<div class="map__current-location-animation"></div>' +
        '</div>'
  });
}

export default setLocation;
