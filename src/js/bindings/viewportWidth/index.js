/**
 * @file Knockout Custom Viewport Width Binding.
 * Keeps track of the browser viewport width.
 */

import ko from 'knockout'

/**
 * @external 'ko.bindingHandlers'
 * @see {@link http://knockoutjs.com/documentation/custom-bindings.html}
 */
ko.bindingHandlers.viewportWidth = {
  init: function($element, valueAccessor, allBindings, viewModel) {
    viewModel.appViewportWidth(window.innerWidth);

    window.addEventListener('resize', function() {
      viewModel.appViewportWidth(window.innerWidth);
    });
  }
};
