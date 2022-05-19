/**
 * @file Knockout Custom Filter Binding
 */

import ko from 'knockout'

/**
 * @external 'ko.bindingHandlers'
 * @see {@link http://knockoutjs.com/documentation/custom-bindings.html}
 */
ko.bindingHandlers.filter = {
  init: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {

    /** Bind to the input value */
    ko.bindingHandlers.value.init(element, valueAccessor, allBindingsAccessor);

    $(element).keyup(filter);

    function filter() {

      const query = $(element).val();

    	/** Loop through each place in the place list and compare the string */
    	for (let i=0, j=bindingContext.$root.placeList().length; i<j; i++) {
    		compareString(query, bindingContext.$root.placeList()[i].name().toLowerCase(), bindingContext.$root.placeList()[i]);
    	}

    	/** Loop through each place in the place list, store a count, and if each place is hidden, show 'No Results' */
    	let count = 0;

    	for (let i=0, j=bindingContext.$root.placeList().length; i<j; i++) {
    		if (bindingContext.$root.placeList()[i].isHidden()) {
    			count++;
    		}

    		if (count === bindingContext.$root.placeList().length) {
    			bindingContext.$root.searchQueryNoResults(true);
    		} else {
    			bindingContext.$root.searchQueryNoResults(false);
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
          bindingContext.$root.searchClearFilterVisibility(true);

          /** Else if there is no match, hide the place type and show the clear filter button */
        } else {
          placeObject.isHidden(true);
          bindingContext.$root.searchClearFilterVisibility(true);
        }
      }

      /** If the search query is an exact match, select the place type, else show all place types if the search query is empty */
      if (value.indexOf(placeName) === 0 && value.length === placeName.length) {
        bindingContext.$root.selectPlace(placeObject);
        bindingContext.$root.searchClearFilterVisibility(true);

        /** Else if the text input is empty show all place types and hide the clear filter button */
      } else if (value.length === 0) {
        placeObject.isHidden(false);
        bindingContext.$root.searchClearFilterVisibility(false);
      }
    }
  },
  update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
    ko.bindingHandlers.value.update(element, valueAccessor)
  }
};
