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
  init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {

    /** Set the viewport width on load */
    bindingContext.$root.appViewportWidth($(window).width());

    /**
     * When the browser window is resized, set the binding to the windows width in pixels
     * @external '$().resize'
     * @see {@link https://api.jquery.com/resize/}
     */
    $(window).resize(function() {
      bindingContext.$root.appViewportWidth($(this).width());
    });
  }
};
