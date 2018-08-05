/**
 * @file Knockout Custom Prevent SwipeTap Binding.
 * Prevent tap events from trigging functions when the user is swiping on a touch screen device.
 * @version 1.0
 * @author Mike Joyce [hello@mikejoyce.io]
 */

/**
 * PreventSwipeTap
 * @type {Object}
 * @external 'ko.bindingHandlers'
 * @see {@link http://knockoutjs.com/documentation/custom-bindings.html}
 */
ko.bindingHandlers.preventSwipeTap = {

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
     * When the touchmove event is fired on the element, set the binding to true
     * @param {string}
     * @param {function}
     * @external '$().on'
     * @see {@link http://api.jquery.com/on/}
     */
    $(element).on('touchmove', function(){
      bindingContext.$root.appSwiping(true);
    });

    /**
     * When the touchstart event is fired on the element, set the binding to false
     * @param {string}
     * @param {function}
     * @external '$().on'
     * @see {@link http://api.jquery.com/on/}
     */
    $(element).on('touchstart', function(){
      bindingContext.$root.appSwiping(false);
    });

  }
};
