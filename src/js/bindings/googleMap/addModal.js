/**
 * @file Add map modal
 */

/**
 * @param {Object} data place data
 */
function addModal(data, viewModel) {

  /**
   * Show Modal on map marker click
   * @param {Object} data.marker
   * @param {string} event
   * @param {function} handler
   * @external 'google.maps.event.addListener'
   * @see {@link https://developers.google.com/maps/documentation/javascript/events}
   */
  google.maps.event.addListener(data.marker, 'click', function() {

    /** Show the modal */
    viewModel.modalVisibilty(true);

    /** Hide the modal photo */
    viewModel.modalInfoImageVisibility(false);

    /** Hide the modal overlay */
    viewModel.modalOverlayVisibility(false);

    /** Hide Uber estimate */
    viewModel.modalUberEstimateVisibility(false);

    /** Show Modal loading animation */
    viewModel.modalLoading(true);

    /**
     * Google Maps places search request object
     * @type {Object}
     */
    const request = {
      placeId: data.placeId
    };

    /**
     * Instatiate a Google Maps Places Service object
     * @type {Object}
     * @external 'new google.maps.places.PlacesService'
     * @see {@link https://developers.google.com/maps/documentation/javascript/places#place_searches}
     */
    const service = new google.maps.places.PlacesService(viewModel.map);

    /**
     * Request place details
     * @external 'getDetails'
     * @see {@link https://developers.google.com/maps/documentation/javascript/places#place_details_requests}
     */
    service.getDetails(request, placeDetailsCallback);

    /**
     * Google Maps places search callback function
     * @param  {Object} place
     * @param  {Object} status
     * @see {@link https://developers.google.com/maps/documentation/javascript/places#place_details_responses}
     */
    function placeDetailsCallback(place, status) {

      /**
       * Set a reference to Google Maps Service Status object
       * @type {Object}
       * @external 'google.maps.places.PlacesServiceStatus'
       * @see {@link https://developers.google.com/maps/documentation/javascript/reference?hl=en#PlacesServiceStatus}
       */
      const statusCode = google.maps.places.PlacesServiceStatus;

      /** If the statusCode is OK, set the Info Window content */
      if (status == statusCode.OK) {

        /**
         * Place Info. Create an object to hold data for the place.
         * @type {Object}
         */
        const placeInfo = {
          id: place.id,
          name: place.name,
          address: place.formatted_address,
          website: typeof place.website !== 'undefined' ? place.website : false,
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
          phone: typeof place.formatted_phone_number !== 'undefined' ? place.formatted_phone_number : 'No Number',
          phoneCall: typeof place.formatted_phone_number !== 'undefined' ? place.formatted_phone_number.replace(/ /g, '') : false,
          photo: typeof place.photos !== 'undefined' ? "url('"+place.photos[0].getUrl({'maxWidth': 300, 'maxHeight': 300})+"')" : 'url('+viewModel.appConstants.DEFAULT_IMAGE_LARGE+')',
          rating: typeof place.rating !== 'undefined' ? 'rating--0'+Math.round(place.rating) : 'rating--00',
          price: typeof place.price_level !== 'undefined' ? 'price--0'+place.price_level : 'price-00'
        };

        /** Update the place name */
        viewModel.modalInfoName(placeInfo.name);

        /** Update the place address */
        viewModel.modalInfoAddress(placeInfo.address);

        /** Update the place website */
        viewModel.modalInfoWebsite(placeInfo.website);

        /** Update the place latitude */
        viewModel.modalInfoLat(placeInfo.lat);

        /** Update the place longitude */
        viewModel.modalInfoLng(placeInfo.lng);

        /** Update the place phone number */
        viewModel.modalInfoPhone(placeInfo.phone);

        /** Update the place html 'tel:' link */
        viewModel.modalInfoPhoneCall(placeInfo.phoneCall);

        /** Update the place image */
        viewModel.modalInfoImage(placeInfo.photo);

        /** Update the place price */
        viewModel.modalInfoPrice(placeInfo.price);

        /** Update the place rating */
        viewModel.modalInfoRating(placeInfo.rating);

        /** Search Foursquare venues */
        viewModel.searchFoursquare();

        /** Request and Uber ride price estimate */
        viewModel.getUberRideEstimate();

        setTimeout(function() {
          /** Hide the Modal loading animation */
          viewModel.modalLoading(false);
          /** Show the place image */
          viewModel.modalInfoImageVisibility(true);
        }, 1000);

      /** The Places Details request failed */
      } else {

        /** If the appDebug variable is set to true, console log the error */
        if (viewModel.appDebug) console.log(status);

      }
    }

  });

}

export default addModal;
