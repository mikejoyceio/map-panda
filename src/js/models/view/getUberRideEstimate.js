/**
 * @file Get an Uber Ride Estimate
 */

import dataModel from '../data'

function getUberRideEstimate(viewModel) {

  /** Hide the loading animation */
	viewModel.modalUberLoading(true);

	/** Hide the price estimate */
	viewModel.modalUberEstimateVisibility(false);

	/**
	 * API Request
	 * @type {Object}
	 */
	const request = {
		startLat: viewModel.mapCurrentLat(),
		startLng: viewModel.mapCurrentLng(),
		endLat: viewModel.modalInfoLat(),
		endLng: viewModel.modalInfoLng()
	}

	/**
	 * Make an Uber API request
	 * @see dataModel.uber
	 */
	const response = dataModel.uber(request);

  /**
   * Handle the response
   * @param {Object}
   * @external '.then'
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then}
   */
	response.then(function(data) {

		/**
		 * Uber Estimate
		 * @type {string}
		 */
		let uberEstimate;

		/** If the array contatains prices estimates, grab the cheapest */
		data['prices'].length > 0 ? uberEstimate = data['prices'][0]['estimate'] : uberEstimate = 'Unavailable';

		/** Set the estimate price in the modal */
		viewModel.modalUberEstimate(uberEstimate);

		/** If a price estimate exists, add Uber deep link */
		uberEstimate !== 'Unavailable' ? viewModel.modalUberDeepLink(true) : viewModel.modalUberDeepLink(false);

		/** Hide the loading animation */
		viewModel.modalUberLoading(false);

		/** Show the price estimate */
		viewModel.modalUberEstimateVisibility(true);

		/**
		 * Request failed
		 * @param  {Object} xhrObj
		 */
	}, function(xhrObj) {

			/** If the appDebug variable is set to true, console.log the error */
			if (viewModel.appDebug) console.log(xhrObj);

			/** Hide the loading animation */
			viewModel.modalUberLoading(false);

			/** Set the estimate price as 'unavailable' */
			viewModel.modalUberEstimate('Unavailable');

			/** Hide the price estimate */
			viewModel.modalUberEstimateVisibility(true);
	});

}

export default getUberRideEstimate;
