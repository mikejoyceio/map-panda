/**
 * @file Knockout Custom Range Slider Binding.
 * Initializes the custom range slider and updates it's value.
 */

import ko from 'knockout'

/**
 * @external 'ko.bindingHandlers'
 * @see {@link http://knockoutjs.com/documentation/custom-bindings.html}
 */
ko.bindingHandlers.rangeSlider = {
  init: function(element, valueAccessor, allBindings, viewModel) {

    $(element)
      .attr('min', viewModel.appConstants.SEARCH_RADIUS_MIN)
      .attr('max', viewModel.appConstants.SEARCH_RADIUS_MAX)
      .attr('step', viewModel.appConstants.SEARCH_RADIUS_MIN)

    /** Bind to the input value */
    ko.bindingHandlers.value.init(element, valueAccessor, allBindings);
  },
  update: function(element, valueAccessor) {

    $(element).val(ko.unwrap(valueAccessor()))

    /** Update the input value */
    ko.bindingHandlers.value.update(element, valueAccessor)
  }
};
