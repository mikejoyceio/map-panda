/**
 * @file Knockout Custom Range Slider Binding. Initializes the custom range slider and updates it's value.
 * @version 1.0
 * @author Mike Joyce [hello@mikejoyce.io]
 */

import ko from 'knockout'

/**
 * RangeSlider
 * @type {Object}
 * @external 'ko.bindingHandlers'
 * @see {@link http://knockoutjs.com/documentation/custom-bindings.html}
 */
ko.bindingHandlers.rangeSlider = {

  /**
   * Init: Called when the binding is first applied.
   * @param  {Object} element         DOM element involved in this binding
   * @param  {Function} valueAccessor Function to get the current model property of this binding
   * @param  {Object} allBindings     Object used to access all model values bound to this DOM element
   * @param  {Object} viewModel       Access the view model
   * @param  {Object} bindingContext  Holds the binding context available to this DOM elements bindings
   */
  init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {

    $(element)
      .attr('min', bindingContext.$root.appConstants.SEARCH_RADIUS_MIN)
      .attr('max', bindingContext.$root.appConstants.SEARCH_RADIUS_MAX)
      .attr('step', bindingContext.$root.appConstants.SEARCH_RADIUS_MIN)

    /** Bind to the input value */
    ko.bindingHandlers.value.init(element, valueAccessor, allBindings);
  },

  /**
   * Update: Called when the binding is first applied and again whenever any observables change
   * @param  {Object} element         DOM element involved in this binding
   * @param  {Function} valueAccessor Function to get the current model property of this binding
   * @param  {Object} allBindings     Object used to access all model values bound to this DOM element
   * @param  {Object} viewModel       Access the view model
   * @param  {Object} bindingContext  Holds the binding context available to this DOM elements bindings
   */
  update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {

    $(element).val(ko.unwrap(valueAccessor()))

    /** Update the input value */
    ko.bindingHandlers.value.update(element, valueAccessor)

  }
};
