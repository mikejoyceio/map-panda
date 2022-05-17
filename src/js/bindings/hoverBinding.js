/**
 * @file Knockout Custom Hover State Binding.
 * Add/remove and 'active' CSS class on mouseover/mouseout,
 * which prevents issues with hover states getting 'stuck' on touchscreen devices.
 * @version 1.0
 * @author Mike Joyce [hello@mikejoyce.io]
 */

import ko from 'knockout'

/**
 * Hover
 * @type {Object}
 * @external 'ko.bindingHandlers'
 * @see {@link http://knockoutjs.com/documentation/custom-bindings.html}
 */
ko.bindingHandlers.hover = {

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
