/**
 * Knockout Custom Clipboard Binding
 * @type {Object}
 * @external 'ko.bindingHandlers'
 * @see {@link http://knockoutjs.com/documentation/custom-bindings.html}
 */
ko.bindingHandlers.clipboard = {

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
     * Check for mobile devices
     * @type {RegExp}
     * @external 'navigator.userAgent'
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/navigator}
     */
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

    /** If isMobile is false */
    if (!isMobile) {

      /** Show the modal overlay copy button */
      bindingContext.$root.modalOverlayCopyButtonVisibility(true);

      /** Set the modal overlay group group buttons CSS class to two */
      bindingContext.$root.modalOverlayGroupButtons('two')

      /**
       * Clipboard
       * @type {Object}
       * @external 'new Clipboard'
       * @see {@link http://zenorocha.github.io/clipboard.js/}
       */
      var clipboard = new Clipboard(element);

      /**
       * Clipboard Success
       * @external '$().on'
       * @see {@link http://api.jquery.com/on/}
       */
      clipboard.on('success', function(e) {
        bindingContext.$root.modalOverlayMessage('Copied!');
        bindingContext.$root.modalOverlayMessageVisibility(true);
        setTimeout(function() {
          bindingContext.$root.modalOverlayMessageVisibility(false);
        }, 1000);
      });

      /**
       * Clipboard Error
       * @external '$().on'
       * @see {@link http://api.jquery.com/on/}
       */
      clipboard.on('error', function(e) {

        /**
         * App Version
         * @type {string}
         */
        var appVersion = navigator.appVersion.indexOf("Mac");

        /** Check the operating system */
        if (appVersion!=-1) {

          /** Set the overlay message text for Mac */
          bindingContext.$root.modalOverlayMessage('Press ⌘+C to copy');
        } else {

          /** Set the overlay message text for all other operating systems */
          bindingContext.$root.modalOverlayMessage('Press Ctrl+C to copy');
        }

        /** Show the overlay message */
        bindingContext.$root.modalOverlayMessageVisibility(true);

        /** After a short timeout, hide the overlay message */
        setTimeout(function() {
          bindingContext.$root.modalOverlayMessageVisibility(false);
        }, 2000);

      });

    } else {

      /** Hide the modal overlay copy button */
      bindingContext.$root.modalOverlayCopyButtonVisibility(false);

      /** Set the modal overlay group buttons CSS class to one */
      bindingContext.$root.modalOverlayGroupButtons('one')

    }
  }
};
