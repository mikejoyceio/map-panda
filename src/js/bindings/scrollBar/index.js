/**
 * @file Knockout Custom Scroll Bar Binding.
 */

import ko from 'knockout'
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';

/**
 * @external 'ko.bindingHandlers'
 * @see {@link http://knockoutjs.com/documentation/custom-bindings.html}
 */
ko.bindingHandlers.scrollBar = {
  update: function(element, valueAccessor) {

    /**
     * Viewport Width
     * @type {number}
     */
    const viewportWidth = ko.unwrap(valueAccessor());
    let ps;

    /** If the viewport width is greater than 1024px instantiate the custom scrollbar, else destroy it */
    if (viewportWidth > 1024) {
      ps = new PerfectScrollbar(element);
    } else {
      ps.destroy();
      ps = null;
    }
  }
};
