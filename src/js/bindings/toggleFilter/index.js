/**
 * @file Knockout Custom Toggle Filter Binding. Toggle the visibility of the search filter on mobiles & tablets.
 * @version 1.0
 * @author Mike Joyce [hello@mikejoyce.io]
 */

import ko from 'knockout'

/**
 * ToggleFilter
 * @type {Object}
 * @external 'ko.bindingHandlers'
 * @see {@link http://knockoutjs.com/documentation/custom-bindings.html}
 */
ko.bindingHandlers.toggleFilter = {

  /**
   * Init: Called when the binding is first applied.
   * @param  {Object} element         DOM element involved in this binding
   * @param  {Function} valueAccessor Function to get the current model property of this binding
   * @param  {Object} allBindings     Object used to access all model values bound to this DOM element
   * @param  {Object} viewModel       Access the view model
   * @param  {Object} bindingContext  Holds the binding context available to this DOM elements bindings
   */
  init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {

    /**
     * isMobile. Used to prevent click events firing on touchscreen devices
     * @type {Boolean}
     */
    var isMobile = false;

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
      bindingContext.$root.searchFilterVisibility(!bindingContext.$root.searchFilterVisibility());

      /** If the search filter visibility is true */
      if (bindingContext.$root.searchFilterVisibility()) {

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
        for (var i=0,j=bindingContext.$root.placeList().length;i<j;i++) {
          bindingContext.$root.placeList()[i].isHidden(false);
        }

      }
    }

  }
};
