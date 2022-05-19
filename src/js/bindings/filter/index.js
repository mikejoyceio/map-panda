/**
 * @file Knockout Custom Filter Binding
 */

import ko from 'knockout'

/**
 * @external 'ko.bindingHandlers'
 * @see {@link http://knockoutjs.com/documentation/custom-bindings.html}
 */
ko.bindingHandlers.filter = {
  init: function($element, valueAccessor, allBindingsAccessor, viewModel) {

    /** Bind to the input value */
    ko.bindingHandlers.value.init($element, valueAccessor, allBindingsAccessor);

    $element.addEventListener('keyup', filter);

    function filter() {

      const query = $element.value;

    	/** Loop through each place in the place list and compare the string */
    	for (let i=0, j=viewModel.placeList().length; i<j; i++) {
    		compareString(query, viewModel.placeList()[i].name().toLowerCase(), viewModel.placeList()[i]);
    	}

    	/** Loop through each place in the place list, store a count, and if each place is hidden, show 'No Results' */
    	let count = 0;

    	for (let i=0, j=viewModel.placeList().length; i<j; i++) {
    		if (viewModel.placeList()[i].isHidden()) {
    			count++;
    		}

    		if (count === viewModel.placeList().length) {
    			viewModel.searchQueryNoResults(true);
    		} else {
    			viewModel.searchQueryNoResults(false);
    		}
    	}
    }

    /**
     * Compare String
     * @param  {string} value
     * @param  {string} placeName
     * @param  {Object} placeObject
     */
    function compareString(value, placeName, placeObject) {

      /** Loop through the length of the search query string */
      for (let i=0, j=value.length; i<j; i++) {

        /** If characters match in order, show the place type, else hide it */
        if (placeName.indexOf(value) !== -1 && placeName.charAt(i) === value.charAt(i)) {
          placeObject.isHidden(false);
          viewModel.searchClearFilterVisibility(true);

          /** Else if there is no match, hide the place type and show the clear filter button */
        } else {
          placeObject.isHidden(true);
          viewModel.searchClearFilterVisibility(true);
        }
      }

      /** If the search query is an exact match, select the place type, else show all place types if the search query is empty */
      if (value.indexOf(placeName) === 0 && value.length === placeName.length) {
        viewModel.selectPlace(placeObject);
        viewModel.searchClearFilterVisibility(true);

        /** Else if the text input is empty show all place types and hide the clear filter button */
      } else if (value.length === 0) {
        placeObject.isHidden(false);
        viewModel.searchClearFilterVisibility(false);
      }
    }
  },
  update: function($element, valueAccessor, allBindings, viewModel, bindingContext) {
    ko.bindingHandlers.value.update($element, valueAccessor)
  }
};
