/**
 * @file Knockout Custom Compass Binding.
 * Initializes a small map compass for supported devices.
 */

import ko from 'knockout'
import { Compass } from 'compass.js'

/**
 * @external 'ko.bindingHandlers'
 * @see {@link http://knockoutjs.com/documentation/custom-bindings.html}
 */
ko.bindingHandlers.compass = {
  init: function($element) {

    /**
     * @param  {number} heading
     * @external 'Compass.watch'
     * @see {@link https://github.com/ai/compass.js}
     */
    Compass.watch(function (heading) {
      $element.style.display = 'show';

      /** Set CSS transform rotation (rotates the compass) */
      // $(element).css({
      //   '-webkit-transform': 'rotate(' + (-heading) + 'deg)',
      //   '-moz-transform': 'rotate(' + (-heading) + 'deg)',
      //   '-ms-transform': 'rotate(' + (-heading) + 'deg)',
      //   '-o-transform': 'rotate(' + (-heading) + 'deg)',
      //   'transform': 'rotate(' + (-heading) + 'deg)'
      // });
    });
  }
};
