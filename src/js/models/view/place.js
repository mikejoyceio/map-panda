/**
 * Place Constructor
 */

import ko from 'knockout';

/**
 * @param {Object} data
 * @constructor
 */
function place(data) {
	this.name = ko.observable(data.name);
	this.description = ko.observable(data.description);
	this.type = ko.observable(data.type);
	this.icon = ko.observable(data.icon);
	this.marker = ko.observable(data.marker);
	this.isActive = ko.observable(false);
	this.isHidden = ko.observable(false);
};

export default place;
