/**
 * @file Knockout Custom Prevent SwipeTap Binding.
 * Prevent tap events from trigging functions when the user is swiping on a touch screen device.
 */

import ko from 'knockout'

/**
 * @external 'ko.bindingHandlers'
 * @see {@link http://knockoutjs.com/documentation/custom-bindings.html}
 */
ko.bindingHandlers.preventSwipeTap = {
  init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {

    /**
     * When the touchmove event is fired on the element, set the binding to true
     * @param {string}
     * @param {function}
     * @external '$().on'
     * @see {@link http://api.jquery.com/on/}
     */
    $(element).on('touchmove', function(){
      bindingContext.$root.appSwiping(true);
    });

    /**
     * When the touchstart event is fired on the element, set the binding to false
     * @param {string}
     * @param {function}
     * @external '$().on'
     * @see {@link http://api.jquery.com/on/}
     */
    $(element).on('touchstart', function(){
      bindingContext.$root.appSwiping(false);
    });
  }
};
