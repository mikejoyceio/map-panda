/**
 * @file Knockout Custom Toggle Filter Binding.
 * Toggle the visibility of the search filter on mobiles & tablets.
 */

import ko from 'knockout'

/**
 * @external 'ko.bindingHandlers'
 * @see {@link http://knockoutjs.com/documentation/custom-bindings.html}
 */
ko.bindingHandlers.toggleFilter = {
  init: function(element, valueAccessor, allBindings, viewModel) {

    /**
     * isMobile. Used to prevent click events firing on touchscreen devices
     * @type {Boolean}
     */
    const isMobile = false;

    /**
     * On element click
     * @param {string}
     * @param {function}
     * @external '$().on'
     * @see {@link http://api.jquery.com/on/}
     */
    $(element).on('click', function() {

      /** If mobile is set to true, return the function to prevent the event firing on touchscreens */
      if (isMobile) return

      /** Call eventFunction */
      eventFunction();
    });

    /**
     * On element touchend
     * @param {string}
     * @param {function}
     * @external '$().on'
     * @see {@link http://api.jquery.com/on/}
     */
    $(element).on('touchend', function() {

      /** Set the isMobile variable to true */
      isMobile = true;

      /** Call eventFunction */
      eventFunction();
    });

    function eventFunction() {

      /** Toggle search filter visibility */
      viewModel.searchFilterVisibility(!viewModel.searchFilterVisibility());

      /** If the search filter visibility is true */
      if (viewModel.searchFilterVisibility()) {

        /** If the event didn't come from a touchscreen device, focus the text input */
        if (!isMobile) {
          setTimeout(function() {
            $(element).parent().find('input').focus();
          }, 1000);
        }

      } else {

        /**
         * Remove focus from text input (closes the keyboard on mobiles and tablets)
         * @external '.parent()'
         * @see {@link https://api.jquery.com/parent/}
         * @external '.find()'
         * @see {@link https://api.jquery.com/find/}
         * @external '.blur()'
         * @see {@link https://api.jquery.com/blur/}
         */
        $(element).parent().find('input').blur();

        /**
         * Reset text input value
         * @external '.parent()'
         * @see {@link https://api.jquery.com/parent/}
         * @external '.find()'
         * @see {@link https://api.jquery.com/find/}
         * @external '.val()'
         * @see {@link http://api.jquery.com/val/}
         */
        $(element).parent().find('input').val('');

        /** Loop through each place in the place list and unhide it */
        for (let i=0, j=viewModel.placeList().length; i<j; i++) {
          viewModel.placeList()[i].isHidden(false);
        }
      }
    }
  }
};
