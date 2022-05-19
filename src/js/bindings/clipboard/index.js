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
  init: function(element, valueAccessor, allBindings, viewModel) {

    /**
     * Check for mobile devices
     * @type {RegExp}
     * @external 'navigator.userAgent'
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/navigator}
     */
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

    /** If isMobile is false */
    if (!isMobile) {

      /** Show the modal overlay copy button */
      viewModel.modalOverlayCopyButtonVisibility(true);

      /** Set the modal overlay group group buttons CSS class to two */
      viewModel.modalOverlayGroupButtons('button-group--two')

      /**
       * Clipboard
       * @type {Object}
       * @external 'Clipboard'
       * @see {@link http://zenorocha.github.io/clipboard.js/}
       */
      const clipboard = new Clipboard(element);

      /**
       * Clipboard Success
       * @external '$().on'
       * @see {@link http://api.jquery.com/on/}
       */
      clipboard.on('success', function(e) {
        viewModel.modalOverlayMessage('Copied!');
        viewModel.modalOverlayMessageVisibility(true);
        setTimeout(function() {
          viewModel.modalOverlayMessageVisibility(false);
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
        const appVersion = navigator.appVersion.indexOf('Mac');

        /** Check the operating system */
        if (appVersion!=-1) {

          /** Set the overlay message text for Mac */
          viewModel.modalOverlayMessage('Press ⌘+C to copy');
        } else {

          /** Set the overlay message text for all other operating systems */
          viewModel.modalOverlayMessage('Press Ctrl+C to copy');
        }

        /** Show the overlay message */
        viewModel.modalOverlayMessageVisibility(true);

        /** After a short timeout, hide the overlay message */
        setTimeout(function() {
          viewModel.modalOverlayMessageVisibility(false);
        }, 2000);

      });

    } else {

      /** Hide the modal overlay copy button */
      viewModel.modalOverlayCopyButtonVisibility(false);

      /** Set the modal overlay group buttons CSS class to one */
      viewModel.modalOverlayGroupButtons('button-group--one')
    }
  }
};
