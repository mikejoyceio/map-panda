/**
 * @file Knockout Custom Notification Binding. Creates user notifications.
 * @version 1.0
 * @author Mike Joyce [hello@mikejoyce.io]
 */

import ko from 'knockout'

/**
 * Notification
 * @type {Object}
 * @external 'ko.bindingHandlers'
 * @see {@link http://knockoutjs.com/documentation/custom-bindings.html}
 */
ko.bindingHandlers.notification = {

  /**
   * Update: Called when the binding is first applied and again whenever any observables change
   * @param  {Object} element         DOM element involved in this binding
   * @param  {Function} valueAccessor Function to get the current model property of this binding
   * @param  {Object} allBindings     Object used to access all model values bound to this DOM element
   * @param  {Object} viewModel       Access the view model
   * @param  {Object} bindingContext  Holds the binding context available to this DOM elements bindings
   */
  update: function(element, valueAccessor, allBindingsAccessor, viewModel) {

    var value = valueAccessor();

    /**
     * The notifcation binding can be passed a string or an object with properties
     * @type {[type]}
     */
    var options = typeof value == 'object' ? value : { message: value };

    /**
     * Notication message
     * @type {string}
     */
    var message = ko.utils.unwrapObservable(options.message);

    /**
     * Notification default fade out duration
     * @type {number}
     */
    var duration = options.duration !== undefined ? ko.utils.unwrapObservable(options.duration) : 5000;

    /**
     * Notification fade out duration
     * @type {number}
     */
    var fadeoutDuration = options.fadeoutDuration !== undefined ? ko.utils.unwrapObservable(options.fadeoutDuration) : 200;

    /**
     * Notifcation hide
     * @type {boolean}
     */
    var hide = options.hide !== undefined ? ko.utils.unwrapObservable(options.hide) : true;

    /**
     * Notification show
     * @type {boolean}
     */
    var fade = options.fade !== undefined ? ko.utils.unwrapObservable(options.fade) : true;

    /** Set the value of the message */
    if (message === null || message === undefined) {
      message = "";
    }

    /**
     * Set the notification message
     * @external '$().html'
     * @see {@link http://api.jquery.com/html/}
     */
    $(element).html(message);

    /**
     * Clear any outstanding timeouts
     * @external 'clearTimeout'
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/clearTimeout}
     */
    clearTimeout(element.notificationTimer);

    if (message == '') {

    /**
     * Hide the notification
     * @external '$().hide'
     * @see {@link http://api.jquery.com/hide/}
     */
      $(element).hide();
      return;
    }

    /**
     * If there are any animations running, stop them and show the notification, otherwise show it
     * @external '$().stop'
     * @see {@link https://api.jquery.com/stop/}
     */
    $(element).stop(true, true).show();

    if (!hide) {

      /**
       * Run a timeout to hide the notification
       * @external 'setTimeout'
       * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setTimeout#Callback_arguments}
       */
      element.notificationTimer = setTimeout(function() {

        if (fade) {

          /**
           * Fade the notification out
           * @external '$().fadeOut'
           * @see {@link http://api.jquery.com/fadeout/}
           */
          jQuery(element).fadeOut(fadeoutDuration, function() {
            options.message('');

          });

        } else {

          /**
           * Hide the notification
           * @external '$().hide'
           * @see {@link http://api.jquery.com/hide/}
           */
          jQuery(element).hide();
          options.message('');

        }
      }, duration);

    }
  }
};
