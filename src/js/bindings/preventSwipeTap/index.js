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
  init: function($element, valueAccessor, allBindings, viewModel) {

    /** When the touchmove event is fired on the $element, set the binding to true */
    $element.addEventListener('touchmove', function(){
      viewModel.appSwiping(true);
    });

    /** When the touchstart event is fired on the $element, set the binding to false */
    $element.addEventListener('touchstart', function(){
      viewModel.appSwiping(false);
    });
  }
};
