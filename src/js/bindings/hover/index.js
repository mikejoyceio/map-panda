/**
 * @file Knockout Custom Hover State Binding.
 * Add/remove and 'active' CSS class on mouseover/mouseout,
 * which prevents issues with hover states getting 'stuck' on touchscreen devices.
 */

import ko from 'knockout'

/**
 * @external 'ko.bindingHandlers'
 * @see {@link http://knockoutjs.com/documentation/custom-bindings.html}
 */
ko.bindingHandlers.hover = {
  init: function($element) {
    $element.addEventListener('mouseover', function(event) {
      $element.classList.add('menu__list-item--hover');
    });

    $element.addEventListener('mouseout', function() {
      $element.classList.remove('menu__list-item--hover');
    });
  }
};
