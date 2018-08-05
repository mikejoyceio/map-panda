/**
 * @file Knockout Custom Viewport Width Binding. Keeps track of the browser viewport width.
 * @version 1.0
 * @author Mike Joyce [hello@mikejoyce.io]
 */

/**
 * ViewportWidth
 * @type {Object}
 * @external 'ko.bindingHandlers'
 * @see {@link http://knockoutjs.com/documentation/custom-bindings.html}
 */
ko.bindingHandlers.viewportWidth = {

  /**
   * Init: Called when the binding is first applied.
   * @param  {Object} element         DOM element involved in this binding
   * @param  {Function} valueAccessor Function to get the current model property of this binding
   * @param  {Object} allBindings     Object used to access all model values bound to this DOM element
   * @param  {Object} viewModel       Access the view model
   * @param  {Object} bindingContext  Holds the binding context available to this DOM elements bindings
   */
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
