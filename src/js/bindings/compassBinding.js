/**
 * Knockout Custom Compass Binding. Initializes a small map compass for supported devices.
 * @type {Object}
 * @external 'ko.bindingHandlers'
 * @see {@link http://knockoutjs.com/documentation/custom-bindings.html}
 */
ko.bindingHandlers.compass = {

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
     * Compass Watch
     * @param  {number} heading
     * @external 'Compass.watch'
     * @see {@link https://github.com/ai/compass.js}
     */
    Compass.watch(function (heading) {

      /**
       * Show the element
       * @external '$().show'
       * @see {@link http://api.jquery.com/show/}
       */
      $(element).show();

      /**
       * Set CSS transform rotation (rotates the compass)
       * @external '$().css'
       * @see {@link http://api.jquery.com/css/}
       */
      $(element).css({
        '-webkit-transform': 'rotate(' + (-heading) + 'deg)',
        '-moz-transform': 'rotate(' + (-heading) + 'deg)',
        '-ms-transform': 'rotate(' + (-heading) + 'deg)',
        '-o-transform': 'rotate(' + (-heading) + 'deg)',
        'transform': 'rotate(' + (-heading) + 'deg)'
      });

    });

  }
};
