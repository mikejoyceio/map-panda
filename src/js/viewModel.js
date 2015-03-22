
// View Model
var ViewModel = function() {

	this.firstName = ko.observable('Mike');
	this.lastName = ko.observable('Joyce');

	this.fullName = ko.computed(function() {
		return this.firstName() + " " + this.lastName();
	}, this);

}

// Apply Knockout Bindings
ko.applyBindings(new ViewModel());