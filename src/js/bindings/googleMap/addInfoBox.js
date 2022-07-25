/**
 * @file Add custom Google Map info box
 */

import { InfoBox } from 'google-maps-infobox'

function addInfoBox(data, viewModel) {

  const infoBoxContent =
    `<div class="info-box__content">
        <div class="info-box__title">${data.name}</div>
        <div class="info-box__image" style="background-image: url(${data.photo});"></div>
        <div class="info-box__rating rating rating--0${data.rating}">
          <span class="rating__star rating__star--01"></span>
          <span class="rating__star rating__star--02"></span>
          <span class="rating__star rating__star--03"></span>
          <span class="rating__star rating__star--04"></span>
          <span class="rating__star rating__star--05"></span>
        </div>
        <i class="info-box__icon fa ${data.icon}></i>
      </div>`;

  const infoBoxOptions = {
    boxClass: 'info-box',
    content: infoBoxContent,
    alignBottom: true,
    disableAutoPan: false,
    maxWidth: 0,
    pixelOffset: new google.maps.Size(-105, -30),
    zIndex: null,
    boxStyle: {
      opacity: 0.9,
      width: '230px'
     },
    closeBoxURL: "",
    infoBoxClearance: new google.maps.Size(1, 1),
    isHidden: false,
    pane: 'floatPane',
    enableEventPropagation: false
  };

  /**
   * Instantiate an new infoBox
   * @type {Object}
   * @external 'new InfoBox'
   * @see {@link http://google-maps-utility-library-v3.googlecode.com/svn/trunk/infobox/docs/examples.html}
   */
  const infoBox = new InfoBox(infoBoxOptions);

  /**
   * Show Info Box on marker mouseover
   * @param {Object} data.marker
   * @param {string} event
   * @param {function} handler
   * @external 'google.maps.event.addListener'
   * @see {@link https://developers.google.com/maps/documentation/javascript/events}
   */
  google.maps.event.addListener(data.marker, 'mouseover', function() {
    infoBox.open(viewModel.map, this);
  });

  /**
   * Hide Info Box on marker mouseout
   * @param {Object} data.marker
   * @param {string} event
   * @param {function} handler
   * @external 'google.maps.event.addListener'
   * @see {@link https://developers.google.com/maps/documentation/javascript/events}
   */
  google.maps.event.addListener(data.marker, 'mouseout', function() {
    infoBox.close(viewModel.map, this);
  });
}

export default addInfoBox;
