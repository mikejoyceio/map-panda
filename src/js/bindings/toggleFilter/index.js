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
  init: function($element, valueAccessor, allBindings, viewModel) {

    /**
     * @type {Boolean}
     */
    let isMobile = false;

    $element.addEventListener('click', function() {

      /** If mobile is set to true, return the function to prevent the event firing on touchscreens */
      if (isMobile) return

      eventFunction();
    });

    $element.addEventListener('touchend', function() {

      /** Set the isMobile variable to true */
      isMobile = true;

      eventFunction();
    });

    function eventFunction() {

      const $input = $element.parentElement.querySelector('input')

      /** Toggle search filter visibility */
      viewModel.searchFilterVisibility(!viewModel.searchFilterVisibility());

      /** If the search filter visibility is true */
      if (viewModel.searchFilterVisibility()) {

        /** If the event didn't come from a touchscreen device, focus the text input */
        if (!isMobile) {
          setTimeout(function() {
            $input.focus();
          }, 1000);
        }

      } else {

        /** Remove focus from text input (closes the keyboard on mobiles and tablets) */
        $input.blur();

        /** Reset text input value */
        $input.value = ''

        /** Loop through each place in the place list and unhide it */
        for (let i=0, j=viewModel.placeList().length; i<j; i++) {
          viewModel.placeList()[i].isHidden(false);
        }
      }
    }
  }
};
