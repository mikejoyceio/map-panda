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
  init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {

    /**
     * When the mouseover event is fired on the element, add the 'hover' CSS class from the element
     * @param {string}
     * @param {function}
     * @external '$().on'
     * @see {@link http://api.jquery.com/on/}
     */
    $(element).on('mouseover', function(){
      $(element).addClass('menu__list-item--hover');
    });

    /**
     * When the mouseout event is fired on the element, remove the 'hover' CSS class from the element
     * @param {string}
     * @param {function}
     * @external '$().on'
     * @see {@link http://api.jquery.com/on/}
     */
    $(element).on('mouseout', function(){
      $(element).removeClass('menu__list-item--hover');
    });
  }
};
