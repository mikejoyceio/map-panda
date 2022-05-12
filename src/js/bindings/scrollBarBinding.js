/**
 * @file Knockout Custom Scroll Bar Binding.
 * @version 1.0
 * @author Mike Joyce [hello@mikejoyce.io]
 */

import ko from 'knockout'
import mCustomScrollbar from 'malihu-custom-scrollbar-plugin'

/**
 * ScrollBar
 * @type {Object}
 * @external 'ko.bindingHandlers'
 * @see {@link http://knockoutjs.com/documentation/custom-bindings.html}
 */
ko.bindingHandlers.scrollBar = {

  /**
   * Update: Called when the binding is first applied and again whenever any observables change
   * @param  {Object} element         DOM element involved in this binding
   * @param  {Function} valueAccessor Function to get the current model property of this binding
   * @param  {Object} allBindings     Object used to access all model values bound to this DOM element
   * @param  {Object} viewModel       Access the view model
   * @param  {Object} bindingContext  Holds the binding context available to this DOM elements bindings
   */
  update: function(element, valueAccessor, allBindingsAccessor) {

    /**
     * Viewport Width
     * @type {number}
     */
    var viewportWidth = ko.unwrap(valueAccessor());

    /** If the viewport width is greater than 1024px instantiate the custom scrollbar, else destroy it */
    if (viewportWidth > 1024) {

      /**
       * M Custom Scrollbar
       * @external '$().mCustomScrollbar'
       * @see {@link http://manos.malihu.gr/jquery-custom-content-scroller/}
       */
      $(element).mCustomScrollbar({
        keyboard: { scrollType: 'stepped' },
        mouseWheel: { scrollAmount: 10 }
      });

    } else {
      $(element).mCustomScrollbar('destroy');
    }
  }
};
