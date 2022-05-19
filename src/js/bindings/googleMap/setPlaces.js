/**
 * @file Set places on Google Map
 */

import addInfoBox from './addInfoBox'
import addModal from './addModal'

function setPlaces(viewModel) {

  /** Loop thought the places array */
  for (let i=0, j=viewModel.mapPlaces().length; i<j; i++) {

    /** Instantiate a new marker and set marker's icon */
    viewModel.mapMarkers()[i] = new google.maps.Marker({
      map: viewModel.map,
      position: viewModel.mapPlaces()[i].geometry.location,
      icon: viewModel.currentPlace().marker()
    });

    /** Add the marker to the map */
    viewModel.mapMarkers()[i].setMap(viewModel.map);

    /**
     * Place Data. Create an object to hold data for the place.
     * @type {Object}
     */
    const placeData = {
      marker: viewModel.mapMarkers()[i],
      id: viewModel.mapPlaces()[i].id,
      placeId: viewModel.mapPlaces()[i].place_id,
      name: viewModel.mapPlaces()[i].name,
      icon: viewModel.currentPlace().icon(),
      vicinity: viewModel.mapPlaces()[i].vicinity,
      rating: typeof viewModel.mapPlaces()[i].rating !== 'undefined' ? Math.round(viewModel.mapPlaces()[i].rating) : 0,
      position: viewModel.mapPlaces()[i].geometry.location,
      photo: typeof viewModel.mapPlaces()[i].photos !== 'undefined'
             ? viewModel.mapPlaces()[i].photos[0].getUrl({'maxWidth': 100, 'maxHeight': 100})
             : viewModel.appConstants.DEFAULT_IMAGE_SMALL
    }

    /** Add an Info Box for the place */
    addInfoBox(placeData, viewModel);

    /** Add a Modal for the place */
    addModal(placeData, viewModel);

  }

  /**
   * Automagically zoom the map in / out to show all the markers in the browser window
   * @external 'LatLngBounds()'
   * @see {@link https://developers.google.com/maps/documentation/javascript/reference?hl=en#LatLngBounds}
   */
  const bounds = new google.maps.LatLngBounds();

  for (let i=0; i<viewModel.mapMarkers().length; i++) {
    bounds.extend(viewModel.mapMarkers()[i].getPosition());
  }

  viewModel.map.fitBounds(bounds);
}

export default setPlaces;
