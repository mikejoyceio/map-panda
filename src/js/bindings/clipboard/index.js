/**
 * @file Knockout clipboard binding
 */

import ko from 'knockout'
import Clipboard  from 'clipboard'

/**
 * @external 'ko.bindingHandlers'
 * @see {@link http://knockoutjs.com/documentation/custom-bindings.html}
 */
ko.bindingHandlers.clipboard = {
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
      bindingContext.$root.modalOverlayGroupButtons('button-group--two')

      /**
       * Clipboard
       * @type {Object}
       * @external 'Clipboard'
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
        var appVersion = navigator.appVersion.indexOf('Mac');

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
      bindingContext.$root.modalOverlayGroupButtons('button-group--one')

    }
  }
};
