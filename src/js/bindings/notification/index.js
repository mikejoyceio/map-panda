/**
 * @file Knockout Custom Notification Binding.
 * Creates user notifications.
 */

import ko from 'knockout'

/**
 * @external 'ko.bindingHandlers'
 * @see {@link http://knockoutjs.com/documentation/custom-bindings.html}
 */
ko.bindingHandlers.notification = {
  update: function($element, valueAccessor) {
    const value = valueAccessor();

    /**
     * The notifcation binding can be passed a string or an object with properties
     * @type {Object|string}
     */
    const options = typeof value == 'object' ? value : { message: value };

    /**
     * Notication message
     * @type {string}
     */
    let message = ko.utils.unwrapObservable(options.message);

    /**
     * Notification default fade out duration
     * @type {number}
     */
    const duration = options.duration !== undefined ? ko.utils.unwrapObservable(options.duration) : 5000;

    /**
     * Notification fade out duration
     * @type {number}
     */
    const fadeoutDuration = options.fadeoutDuration !== undefined ? ko.utils.unwrapObservable(options.fadeoutDuration) : 200;

    /**
     * Notifcation hide
     * @type {boolean}
     */
    const hide = options.hide !== undefined ? ko.utils.unwrapObservable(options.hide) : true;

    /**
     * Notification show
     * @type {boolean}
     */
    const fade = options.fade !== undefined ? ko.utils.unwrapObservable(options.fade) : true;

    /** Set the value of the message */
    if (message === null || message === undefined) {
      message = "";
    }

    /** Set the notification message */
    $element.textContent = message;

    /**
     * Clear any outstanding timeouts
     * @external 'clearTimeout'
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/clearTimeout}
     */
    clearTimeout($element.notificationTimer);

    if (message == '') {

      /** Hide the notification */
      $element.style.display = 'none';

      return;
    }

    /** Show the notifcation */
    $element.style.display = 'block';
    $element.style.opacity = 1;

    if (!hide) {

      /**
       * Run a timeout to hide the notification
       * @external 'setTimeout'
       * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setTimeout#Callback_arguments}
       */
      $element.notificationTimer = setTimeout(function() {

        if (fade) {

          /** Fade the notification out and reset the message */
          $element.style.opacity = 0;

          setTimeout(function() {
            options.message('')
          }, 1000)

        } else {

          /** Hide the notification and reset the message*/
          $element.style.display = 'none';
          options.message('')

        }
      }, duration);
    }
  }
};
