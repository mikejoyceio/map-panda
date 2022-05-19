/**
 * @file Search Foursquare Venues
 */

 import dataModel from '../data'

 function searchFoursquare(viewModel) {

   /**
    * API Request
    * @type {Object}
    */
   const request = {
     venueLat: viewModel.modalInfoLat(),
     venueLng: viewModel.modalInfoLng(),
     venueName: viewModel.modalInfoName()
   }

   /**
    * Make a Foursquare API request
    * @see dataModel.foursquare
    */
   const response = dataModel.foursquare(request);

   /**
    * Handle the response
    * @param {Object}
    * @external '.then'
    * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then}
    */
   response.then(function(data) {
     if (data.response.venues.length > 0) {

       /** Set the Foursquare button URL */
       viewModel.modalFoursquareURL(viewModel.appConstants.FOURSQUARE_URL + data.response.venues[0]['id']);

       /** Show the Foursquare button */
       viewModel.modalFoursquareVisibility(true);

     } else {

       /** Set the Foursquare URL blank */
       viewModel.modalFoursquareURL('#');

       /** Hide the Foursquare button */
       viewModel.modalFoursquareVisibility(false);
     }

     /**
      * Request failed
      * @param  {Object} xhrObj
      */
   }, function(xhrObj) {

       /** If the appDebug variable is set to true, console.log the error */
       if (viewModel.appDebug) console.log(xhrObj);

       /** Set the Foursquare URL blank */
       viewModel.modalFoursquareURL('#');

       /** Hide the Foursquare button */
       viewModel.modalFoursquareVisibility(false);
   });
 }

 export default searchFoursquare;
