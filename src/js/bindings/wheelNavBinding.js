/**
 * Knockout Custom WheelNav Binding. Initializes the wheel menu.
 * @type {Object}
 * @external 'ko.bindingHandlers'
 * @see {@link http://knockoutjs.com/documentation/custom-bindings.html}
 */
ko.bindingHandlers.wheelNav = {

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
     * WheelNav
     * @type {object}
     * @external 'new wheelNav'
     * @see {@link http://wheelnavjs.softwaretailoring.net/documentation.html}
     */
    bindingContext.$root.appWheelNav = new wheelnav(element.id);
    bindingContext.$root.appWheelNav.slicePathFunction = slicePath().DonutSlice;
    bindingContext.$root.appWheelNav.sliceInitPathFunction = bindingContext.$root.appWheelNav.slicePathFunction;
    bindingContext.$root.appWheelNav.initPercent = 0.1;
    bindingContext.$root.appWheelNav.navAngle = 270;
    bindingContext.$root.appWheelNav.wheelRadius = bindingContext.$root.appWheelNav.wheelRadius * 0.83;
    bindingContext.$root.appWheelNav.cssMode = true;
    bindingContext.$root.appWheelNav.markerEnable = true;
    bindingContext.$root.appWheelNav.markerPathFunction = markerPath().DropMarker;

    /**
     * An array to hold the wheelNav options
     * @type {Array}
     */
    var wheelNavOptions = [];

    /** Divide the max search radius by 1000 and push the index into the wheelNavOptions array */
    for (var i=1,j=bindingContext.$root.appConstants.SEARCH_RADIUS_MAX / 1000;i<=j;i++) {
      wheelNavOptions.push(i.toString());
    }

    bindingContext.$root.appWheelNav.createWheel(wheelNavOptions);

    /** Create fucntions for each wheelNav options, fired on click and touchend */
    for (i=0,j=wheelNavOptions.length;i<j;i++) {
      createNavigateFunction(i);
    }

    /**
     * Create Navigate Function
     * @param  {number} index Index of the wheelNav option
     */
    function createNavigateFunction(index) {
      bindingContext.$root.appWheelNav.navItems[index].navigateFunction = function() { bindingContext.$root.searchRadius((index + 1) * 1000)};
    }

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

    /** Grab the current value of the binding */
    var searchRadius = ko.unwrap(valueAccessor()) / 1000 - 1;

    /** Set the wheelNav option */
    bindingContext.$root.appWheelNav.navigateWheel(searchRadius);

  }
};
