
// View Model

/**
 * @file overview : Map project for Udacity's FEND
 * @author : contact@mikejoyce.io (Mike Joyce)
 */

/* TODO:
 * - Add javascript promise polypill
 * - Add help panel
 */

// View Model 
var ViewModel = function() {

	// Invoke strict mode
	'use strict';

	// Set a pointer reference to 'this'
	var self = this;

	// App Observables
	this.appDebug = false;		
	this.appName = "Map Panda";
	this.appDescription = "Description";
	this.appSwiping = ko.observable(false);
	this.appViewportWidth = ko.observable();
	this.appWheelNav = null;

	// App Constants
	this.appConstants = {
		SEARCH_RADIUS_MIN: 1000,
		SEARCH_RADIUS_MAX: 10000,
		FOURSQUARE_URL: 'https://foursquare.com/v/'
	}

	// Notifcation Observables
	this.notificationFadeDuration = ko.observable(1000);
	this.notificationKeepAlive = ko.observable(false);
	this.notificationMessage = ko.observable();

	// Map Observables
	this.map = null;	
	this.mapCurrentLat = ko.observable();
	this.mapCurrentLng = ko.observable();
	this.mapInfo = ko.observable(false);
	this.mapLoaderVisibility = ko.observable(false);
	this.mapMarkers = ko.observableArray();
	this.mapLatLang = null;
	this.mapPlaces = ko.observableArray();

	// Modal Observables
	this.modalVisibilty = ko.observable(false);
	this.modalLoading = ko.observable(true);
	this.modalFoursquareURL = ko.observable();
	this.modalFoursquareVisibility = ko.observable(false);
	this.modalInfoAddress = ko.observable();
	this.modalInfoLat = ko.observable();
	this.modalInfoLng = ko.observable();
	this.modalInfoName = ko.observable();
	this.modalInfoPhone = ko.observable();
	this.modalInfoPhoneCall = ko.observable();
	this.modalInfoPhoto = ko.observable();
	this.modalInfoPhotoVisibility = ko.observable(false);
	this.modalInfoPrice = ko.observable();
	this.modalInfoRating = ko.observable();
	this.modalInfoWebsite = ko.observable();
	this.modalOverlayCopyButtonVisibility = ko.observable();
	this.modalOverlayGroupButtons = ko.observable();
	this.modalOverlayMessage = ko.observable();
	this.modalOverlayMessageVisibility = ko.observable(false);
	this.modalOverlayVisibility = ko.observable(false);
	this.modalUberDeepLink = ko.observable(false);
	this.modalUberEstimate = ko.observable();
	this.modalUberEstimateVisibility = ko.observable(false);
	this.modalUberLoading = ko.observable(false);

	// Place List Observable
	this.placeList = ko.observableArray([]); 

	// Search Observables
	this.searchQuery = ko.observable();
	this.searchRadius = ko.observable(5000);

	// Place Constructor
	var Place = function(data) {
		this.name = ko.observable(data.name);
		this.description = ko.observable(data.description);
		this.type = ko.observable(data.type);	
		this.icon = ko.observable(data.icon);
		this.marker = ko.observable(data.marker);
		this.isActive = ko.observable(false);
		this.isHidden = ko.observable(false);
	}

	// Loop through each place object in the dataModel.places array
	dataModel.places.forEach(function(placeItem) {
		self.placeList.push(new Place(placeItem));
	});

	// Set the current place
	this.currentPlace = ko.observable( this.placeList()[0] );

	// Select the current place
	this.selectPlace = function(place) {

		// If the user is swiping, prevent place from being selected
		if (self.appSwiping()) {
			return;
		}

		self.notificationKeepAlive(false);
		self.notificationFadeDuration(0);
		self.currentPlace(place);

		for(i=0;i<self.placeList().length;i++) {
			self.placeList()[i].isActive(false);
			self.mapInfo(false);
		}

		place.isActive(!place.isActive());
		self.mapInfo(true);
	}

	// Filter place types in the place list
	this.search = function(value) {
	 for (i=0;i<self.placeList().length;i++) {
	 	self.placeList()[i].isHidden(false);
	 	if (value.toLowerCase() === self.placeList()[i].name().toLowerCase()) {
	 		self.selectPlace(self.placeList()[i]);
	 	} else if (value.length === 0) {
	 		self.placeList()[i].isHidden(false);
	 	} else {
	 		self.placeList()[i].isHidden(true);
	 	}
	 }
	}
	this.searchQuery.subscribe(this.search);

	// Clear the filter
	this.clearSearch = function() {
		for (i=0;i<self.placeList().length;i++) {
			self.placeList()[i].isHidden(false);
		}
	}

	// Pan to the current location on the map
	this.mapPanTo = function() {
		self.map.panTo(self.mapLatLang);
	}

	// Zoom the map in
	this.mapZoomIn = function() {
		var currentZoomLevel = self.map.getZoom();
		if(currentZoomLevel != 21){
		self.map.setZoom(currentZoomLevel + 1);}
	}

	// Zoom the map out
	this.mapZoomOut = function() {
		var currentZoomLevel = self.map.getZoom();
		if(currentZoomLevel != 0){
		self.map.setZoom(currentZoomLevel - 1);}
	}

	// Close modal 
 	this.closeModal = function() {
 		self.modalVisibilty(false);
 		self.modalInfoPhotoVisibility(false);
 		self.modalFoursquareVisibility(false);
 		self.modalUberEstimateVisibility(false);
 	} 

 	// Open modal overlay
 	this.openModalOverlay = function() {
 		self.modalOverlayVisibility(true);
 	}

 	// Close modal overlay
 	this.closeModalOverlay = function() {
 		self.modalOverlayVisibility(false);
 	}

	this.searchFoursquare = function() {

		var request = {
			venueLat: self.modalInfoLat(),
			venueLng: self.modalInfoLng(),
			venueName: self.modalInfoName()
		}

	  var response = dataModel.foursquare(request);

	  response.then(function(data) {
			if (data.response.venues.length > 0) {		
				self.modalFoursquareURL(self.appConstants.FOURSQUARE_URL + data.response.venues[0]['id']);
		  	self.modalFoursquareVisibility(true);
			}	else {
				self.modalFoursquareURL('#');
				self.modalFoursquareVisibility(false);
			}
	  }, function(xhrObj) {
	  	console.log(xhrObj);
	  });

	}

	this.getUberRideEstimate = function() {
		self.modalUberLoading(true);
		self.modalUberEstimateVisibility(false);

		var request = {
			startLat: self.mapCurrentLat(),
			startLng: self.mapCurrentLng(),
			endLat: self.modalInfoLat(),
			endLng: self.modalInfoLng() 
		}

		var response = dataModel.uber(request);

		response.then(function(data) {
			var uberEstimate;

			data['prices'].length > 0 ? uberEstimate = data['prices'][0]['estimate'] : uberEstimate = 'Unavailable';

			self.modalUberEstimate(uberEstimate);

			uberEstimate !== 'Unavailable' ? self.modalUberDeepLink(true) : self.modalUberDeepLink(false);

			self.modalUberLoading(false);
			self.modalUberEstimateVisibility(true);
		}, function(xhrObj) {
			console.log(xhrObj);
		});

	};

	this.uberRideRequest = function() {
		var uberDeepLink;

		uberDeepLink = 'https://m.uber.com/sign-up?';
		uberDeepLink += 'client_id=' + 't4nJf4oEHYCwFZ_TvGsnIDc_raF7rFOn';
		uberDeepLink += 'pickup_latitude=' + self.mapCurrentLat();
		uberDeepLink += 'pickup_longitude=' + self.mapCurrentLng();
		uberDeepLink += 'dropoff_latitude=' + self.modalInfoLat();
		uberDeepLink += 'dropoff_longitude=' + self.modalInfoLng();
		uberDeepLink += 'dropoff_nickname=' + self.modalInfoName();

		if (self.modalUberDeepLink()) {
			window.open(uberDeepLink);
		} else {
			return false
		}

	}

}

// KO Custom Google Map Binding
ko.bindingHandlers.map = {

	// Init - called when the binding is first applied 
  init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {

  	// Set a reference to the view model object
  	var viewModel = bindingContext.$root;

    var mapOptions = {
      zoom: 15,
      zoomControl: false,
      mapTypeControl: false,
      streetViewControl: false,
      panControl: false,
      styles: [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2e5d4"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#c5dac6"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{"featureType":"road","elementType":"all","stylers":[{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#c5c6c6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#e4d7c6"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fbfaf7"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"color":"#acbcc9"}]}]
    };

    viewModel.map = new google.maps.Map(element, mapOptions);

	  // Try HTML5 geolocation
	  if(navigator.geolocation) {
	    navigator.geolocation.getCurrentPosition(function(position) {

	    		// Update the current lat / long
	    		bindingContext.$root.mapCurrentLat(position.coords.latitude);
	    		bindingContext.$root.mapCurrentLng(position.coords.longitude);
	
					// Instantiate a new Google Map object	
		      viewModel.mapLatLang = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);	

	    		// Center map on current location
		      viewModel.map.setCenter(viewModel.mapLatLang);

		      // Add a custom HTML current position marker to the map
			    var marker = new RichMarker({
			    	position: viewModel.mapLatLang,
			    	map: viewModel.map,
			    	flat: true,
			    	content: '<div class="map-current-location"><div class="radial-pulse"></div></div>'
			    });

		  }, function() {
	  		// Browser supports Geo-location but hasn't been enabled
	      handleNoGeolocation(true);
		}, 
			// Enable high accuracy Geo-location
			{maximumAge:600000, timeout:5000, enableHighAccuracy: true});
		  
		} else {
	    // Browser doesn't support Geo-location
	    handleNoGeolocation(false);
		}

		// Handle no Geo-location
		function handleNoGeolocation(errorFlag) {

		  if (errorFlag) {

		  	// If the bindingContext.$root.appDebug variable is set to true, console.log the error
				if (bindingContext.$root.appDebug) console.log('Error: Geolocation service failed.');

				// Show the user notification message 
				bindingContext.$root.notificationKeepAlive(true);
				bindingContext.$root.notificationMessage('Geolocation failed.');

		  } else {

		  	// If the bindingContext.$root.appDebug variable is set to true, console.log the error
				if (bindingContext.$root.appDebug) console.log('Error: Browser doesn\'t support geolocation.');

				// Show the user notification message 
				bindingContext.$root.notificationKeepAlive(true);
				bindingContext.$root.notificationMessage('Gelocation unsupported');

		  }

		}

	},

	// Update - called once when the binding is first applied, and again when any observables that are accessed change 
	update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {

		// Set a reference to the observable objects bound to this binding
  	var value = valueAccessor();

  	// Set a reference to the view model object
  	var viewModel = bindingContext.$root;

		// Set a variable to hold error messages for debugging purposes
		var statusMessage;

		// Set a variable to hold error messages visible to the user
		var notificationMessage;

		// If the current place isn't active, return the function
		if(!value.currentPlace().isActive()) {
			return 
		}

  	// If the markers array contains values, clear them from the map
  	if (viewModel.mapMarkers()) {
  		clearMarkers();
  	}	

		// Google Maps places search request object
    var request = {
    	location: viewModel.mapLatLang,
    	radius: value.searchRadius(),
    	types: []
    };

    // Push the current place type into the request object types array
    request.types.push(value.currentPlace().type());

    // Instantiate a new places service object
    var mapPlaces = new google.maps.places.PlacesService(viewModel.map);

    // Search nearby places
    mapPlaces.nearbySearch(request, nearbySearchCallback);

    // Google Maps places search callback function
    function nearbySearchCallback(results, status) {

    	// Set a reference to Google Maps Service Status object
    	var statusCode = google.maps.places.PlacesServiceStatus;

    	// If the status is OK
    	if (status === statusCode.OK) {

    		// Show the map loader
    		viewModel.mapLoaderVisibility(true);

    		// Clear all markers from the map
    		clearMarkers();

    		// Set the places array length to 0
    		viewModel.mapPlaces().length = 0;

    		// Hide user notification messages
    		viewModel.notificationKeepAlive(false);
    		viewModel.notificationFadeDuration(0);

    		// Loop through the results and push intot the places array
    		for (var i=0; i < results.length; i++) {
    			viewModel.mapPlaces().push(results[i]);
    		}	

    		// Set place markers, info windows and modals	
    		setPlaces();

    		// Hide the map loading animation
  			setTimeout(function() {
  				viewModel.mapLoaderVisibility(false);
  			}, 1000);

    	/* Callback Error Handling
			 * Error status and messages will be passed the the callbackError function.
			 */
    	} else if (status === statusCode.ERROR) {
    		callbackError(status+' There was a problem contacting the Google servers.', 'Connection error');
    	} else if (status === statusCode.INVALID_REQUEST) {
    		callbackError(status+' This request was invalid.', 'Error. Please try again.');
    	} else if (status === statusCode.OVER_QUERY_LIMIT) {
    		callbackError(status+' The webpage has gone over its request quota.', 'Slow down!');		    		
    	} else if (status === statusCode.REQUEST_DENIED) {
    		callbackError(status+' This webpage is not allowed to use the PlacesService.', 'Error. Please try again.');	
    	} else if (status === statusCode.UNKNOWN_ERROR) {
    		callbackError(status+' The PlacesService request could not be processed due to a server error. The request may succeed if you try again.', 'Server Error. Please try again.');	
    	} else if (status === statusCode.ZERO_RESULTS) { 
    		callbackError(status+' No result was found for this request.', 'No Results');	
    	} else {
    		callbackError('Unknown error', 'Error. Please try again.');
    	}
    }

    // Set places function
    function setPlaces() {

    	// Loop thought the places array
	    for (var i=0; i < viewModel.mapPlaces().length; i++) {

	    	// Create a marker and set marker's icon
	    	viewModel.mapMarkers()[i] = new google.maps.Marker({
	    		map: viewModel.map,
	    		position: viewModel.mapPlaces()[i].geometry.location,
	    		icon: value.currentPlace().marker()
	    	});

	    	// Add the marker to the map
	    	viewModel.mapMarkers()[i].setMap(viewModel.map);

	    	// Create an object to hold data for the place
	    	var placeData = {
	    		marker: viewModel.mapMarkers()[i],
	    		id: viewModel.mapPlaces()[i].id,
	    		placeId: viewModel.mapPlaces()[i].place_id,
	    		name: viewModel.mapPlaces()[i].name,
	    		icon: value.currentPlace().icon(),
	    		vicinity: viewModel.mapPlaces()[i].vicinity,
	    		rating: typeof viewModel.mapPlaces()[i].rating !== 'undefined' ? Math.round(viewModel.mapPlaces()[i].rating) : 0,
	    		position: viewModel.mapPlaces()[i].geometry.location,
	    		photo: typeof viewModel.mapPlaces()[i].photos !== 'undefined'
	    					 ? viewModel.mapPlaces()[i].photos[0].getUrl({'maxWidth': 100, 'maxHeight': 100})
	    					 : 'dist/images/default-small.png'
	    	}

	    	// Add an Info Box
	    	addInfoBox(placeData);

	    	// Add a Modal
	    	addModal(placeData);

	    }

	    // Automagically zoom the map in / out to show all the markers 
	    var bounds = new google.maps.LatLngBounds();

	    for(i=0; i<viewModel.mapMarkers().length; i++) {
	    	bounds.extend(viewModel.mapMarkers()[i].getPosition());
	    }
	    viewModel.map.fitBounds(bounds);

	 	}

	 	// Add Info Box function
		function addInfoBox(data) {

			// InfoBox content
			var infoBoxContent = '<div class="info-box-content">' + 
											'<div class="info-box-title">'+data.name+'</div>' + 
											'<div class="info-box-image" style="background-image: url('+data.photo+');"></div>' + 
											'<div class="info-box-rating rating rating-0'+data.rating+'">' +
												'<span class="star star-01"></span>' +
												'<span class="star star-02"></span>' +
												'<span class="star star-03"></span>' +
												'<span class="star star-04"></span>' +
												'<span class="star star-05"></span>' +
											'</div>' +
											'<i class="info-box-icon fa '+data.icon+'"></i>' +
								 		'</div>';

			// InfoBox options
			var infoBoxOptions = {
				boxClass: 'info-box',
				content: infoBoxContent,
				alignBottom: true,
				disableAutoPan: false,
				maxWidth: 0,
				pixelOffset: new google.maps.Size(-105, -30),
				zIndex: null,
				boxStyle: { 
				  opacity: 0.75,
				  width: "230px"
				 },
				closeBoxURL: "",
				infoBoxClearance: new google.maps.Size(1, 1),
				isHidden: false,
				pane: "floatPane",
				enableEventPropagation: false
			};

			// Instantiate an new infoBox
			var infoBox = new InfoBox(infoBoxOptions);

			// Add event listener to show Info Box on marker mouseover
		 	google.maps.event.addListener(data.marker, 'mouseover', function() {
		 		infoBox.open(viewModel.map, this);
		  });

		 	// Add event listener to hide Info Box on marker mouseout
		  google.maps.event.addListener(data.marker, 'mouseout', function() {
		  	infoBox.close(viewModel.map, this);
		  });

		}

		// Add Modal function
		function addModal(data) {

			// Add event listener to show Modal on marker click
			google.maps.event.addListener(data.marker, 'click', function() {

				// Reset the marker icons
				for (i=0; i < viewModel.mapMarkers().length; i++) {
					viewModel.mapMarkers()[i].setIcon(value.currentPlace().marker());
				}

				// Set the selected marker icon
		 		data.marker.setIcon({ path: fontawesome.markers.CIRCLE,
					fillColor: '#ed5565',
					fillOpacity: 1,
					scale: 0.32,
					strokeColor: '#ffffff',
					strokeWeight: 3
				});

				// // Pan to the markers position on the map
				// viewModel.map.panTo(data.position);

				// Show the modal
				viewModel.modalVisibilty(true);

				// Hide the modal photo
				viewModel.modalInfoPhotoVisibility(false);

				// Hide the modal overlay
				viewModel.modalOverlayVisibility(false);

				// Hide Uber estimate
				viewModel.modalUberEstimateVisibility(false);
				
				// Show the modal loading animation
				viewModel.modalLoading(true);

				// Google Maps places search request object 
				var request = { 
		  		placeId: data.placeId
				};

				// Instatiate a Google Maps Places Service object
				var service = new google.maps.places.PlacesService(viewModel.map);
				service.getDetails(request, placeDetailsCallback);

				// Google Maps places search callback function
				function placeDetailsCallback(place, status) {

					// Set a reference to Google Maps Service Status object
    			var statusCode = google.maps.places.PlacesServiceStatus;

					// If the request if OK, set the Info Window content
				  if (status == statusCode.OK) {

				  	var placeInfo = {
							id: place.id,
							name: place.name,
							address: place.formatted_address,
							website: typeof place.website !== 'undefined' ? place.website : false,
							lat: place.geometry.location.lat(),
							lng: place.geometry.location.lng(),
							phone: typeof place.formatted_phone_number !== 'undefined' ? place.formatted_phone_number : 'No Number',
							phoneCall: typeof place.formatted_phone_number !== 'undefined' ? place.formatted_phone_number.replace(/ /g, '') : false,
							photo: typeof place.photos !== 'undefined' ? "url('"+place.photos[0].getUrl({'maxWidth': 300, 'maxHeight': 300})+"')" : 'url("dist/images/default-large.png")',
							rating: typeof place.rating !== 'undefined' ? 'rating-0'+Math.round(place.rating) : 'rating-00',
							price: typeof place.price_level !== 'undefined' ? 'price-0'+place.price_level : 'price-00'
						};

						viewModel.modalInfoName(placeInfo.name);
						viewModel.modalInfoAddress(placeInfo.address);
						viewModel.modalInfoWebsite(placeInfo.website);
						viewModel.modalInfoLat(placeInfo.lat);							
						viewModel.modalInfoLng(placeInfo.lng);
						viewModel.modalInfoPhone(placeInfo.phone);
						viewModel.modalInfoPhoneCall(placeInfo.phoneCall);									
						viewModel.modalInfoPhoto(placeInfo.photo);
						viewModel.modalInfoPrice(placeInfo.price);
						viewModel.modalInfoRating(placeInfo.rating);

						// Search Foursquare
						viewModel.searchFoursquare();

						// Grab Uber ride estimate 
						viewModel.getUberRideEstimate();

						setTimeout(function() {
							viewModel.modalLoading(false);
							viewModel.modalInfoPhotoVisibility(true);
						}, 1000);

					// If the request failed, console log the error if the bindingContext.$root.appDebug variable is set to true
				  } else {

			  		if (bindingContext.$root.appDebug) console.log(status);

				  }
				}

			});

		}

		// Clear map markers function
		function clearMarkers() {
			for (var i=0; i < viewModel.mapMarkers().length; i++) {
				viewModel.mapMarkers()[i].setMap(null);
			}
			viewModel.mapMarkers().length = 0;
		}

		/* Callback Error Function
     * This function will create both an error message for debugging purposes and a
		 * more readable, jargon-free error message for the user.
     */
    function callbackError(statusMessage, notificationMessage) {

    	// If the bindingContext.$root.appDebug variable is set to true, console log the error
    	if (bindingContext.$root.appDebug) console.log(statusMessage);

    	// Show the user notification message
	    viewModel.mapLoaderVisibility(false);
	   	viewModel.notificationKeepAlive(true);
  		viewModel.notificationMessage(notificationMessage);	  	    	

    }

	} 

};

// KO Custom Binding for Notifications
ko.bindingHandlers.notification = {

	// Update - called once when the binding is first applied, and again when any observables that are accessed change 
	update: function(element, valueAccessor, allBindingsAccessor, viewModel) {

		var rawValue = valueAccessor(),

		/* The Notification binding can be passed a string or an object with properties: 
		 * - message
		 * - duration (default fade out is 4 seconds)
		 * - fadeoutDuration (default duration is 200 miliseconds)
		 * - hide (hidden by default)
		 * - fade (fade out by default if jQuery is present)
		 * - callback 
		 */
		options = typeof rawValue == 'object' ? rawValue : {message: rawValue},
		message = ko.utils.unwrapObservable(options.message),
		duration = options.duration !== undefined ? ko.utils.unwrapObservable(options.duration) : 5000,
		fadeoutDuration = options.fadeoutDuration !== undefined ? ko.utils.unwrapObservable(options.fadeoutDuration) : 200,
		hide = options.hide !== undefined ? ko.utils.unwrapObservable(options.hide) : true, 
		fade = options.fade !== undefined ? ko.utils.unwrapObservable(options.fade) : true,
          callback = options.callback !== undefined ? ko.utils.unwrapObservable(options.callback) : function() {},
		jQueryExists = typeof jQuery != 'undefined';

		// Set the element's text to the value of the message
		if (message === null || message === undefined)
			message = "";

		element.innerHTML = message;

		// Clear any outstanding timeouts
		clearTimeout(element.notificationTimer);

		if (message == '') {
			element.style.display = 'none';
			return;
		}

		// If there are any animations going on, stop them and show the element, otherwise just show the element

		$(element).stop(true, true).show();

		if (!hide) {

			// Run a timeout to make it disappear
			element.notificationTimer = setTimeout(function() {

				// Run jQuery fadeOut
				if (fade)
					jQuery(element).fadeOut(fadeoutDuration, function() {
            options.message('');
            callback();
          });
				else {
					jQuery(element).hide();
					options.message('');
          callback();
				}
			}, duration);

		} else {
      callback();
		}
	}
};

// KO Custom Range Slider Binding
ko.bindingHandlers.rangeSlider = {

	// Init - called when the binding is first applied 
	init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {

  	// Set a reference to the view model object
  	var viewModel = bindingContext.$root;

		$(element).ionRangeSlider({
		    min: viewModel.appConstants.SEARCH_RADIUS_MIN,
		    max: viewModel.appConstants.SEARCH_RADIUS_MAX,
		    from: viewModel.appConstants.SEARCH_RADIUS_MAX / 2,
		    step: viewModel.appConstants.SEARCH_RADIUS_MIN,
		    postfix: ' km',
		    hide_min_max: true,
		    prettify_enabled: true,
		    prettify: function(num) {
		    	return num / 1000;
		    }
		});
		ko.bindingHandlers.value.init(element, valueAccessor, allBindings);
	},

	// Update - called once when the binding is first applied, and again when any observables that are accessed change 
	update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
		var value = valueAccessor();
		if (bindingContext.$root.appDebug) console.log(ko.unwrap(value));

		var rangeSlider = $(element).data('ionRangeSlider');

		rangeSlider.update({
			from: ko.unwrap(value)
		});

		ko.bindingHandlers.value.update(element, valueAccessor)
	}
};

// KO Custom Scroll Bar Binding
ko.bindingHandlers.scrollBar = {

	// Update - called once when the binding is first applied, and again when any observables that are accessed change 
	update: function(element, valueAccessor, allBindingsAccessor) {

		var viewportWidth = ko.unwrap(valueAccessor());

		// If the viewport width is greater than 1024px instantiate the custom scrollbar, else destroy it
		if (viewportWidth > 1024) {
			$(element).mCustomScrollbar({
				keyboard: { scrollType:'stepped' },
				mouseWheel: { scrollAmount:10 }
			});
		} else {
			$(element).mCustomScrollbar('destroy');
		}
	}
};

// KO Custom Clipboard Binding
ko.bindingHandlers.clipboard = {

	// Init - called when the binding is first applied 
	init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
	
		// Check for mobile devices
		var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;	

		if (!isMobile) {

			bindingContext.$root.modalOverlayCopyButtonVisibility(true);
			bindingContext.$root.modalOverlayGroupButtons('two')

			var clipboard = new Clipboard(element);	

			clipboard.on('success', function(e) {
				bindingContext.$root.modalOverlayMessage('Copied!');
				bindingContext.$root.modalOverlayMessageVisibility(true);
				setTimeout(function() {
					bindingContext.$root.modalOverlayMessageVisibility(false);					
				}, 1000);
			});

			clipboard.on('error', function(e) {
				if (navigator.appVersion.indexOf("Mac")!=-1) {
					bindingContext.$root.modalOverlayMessage('Press ⌘+C to copy');
				} else {
					bindingContext.$root.modalOverlayMessage('Press Ctrl+C to copy');	
				}
				bindingContext.$root.modalOverlayMessageVisibility(true);
				setTimeout(function() {
					bindingContext.$root.modalOverlayMessageVisibility(false);					
				}, 2000);
			});

		} else {
			bindingContext.$root.modalOverlayCopyButtonVisibility(false);
			bindingContext.$root.modalOverlayGroupButtons('one')
		}
	}	
};

// KO Custom WheelNav Binding
ko.bindingHandlers.wheelNav = {

	// Init - called when the binding is first applied 
	init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {

  	// Set a reference to the view model object
  	var viewModel = bindingContext.$root;

  	// An array to hold the wheelNav options
		var wheelNavOptions = [];

		viewModel.appWheelNav = new wheelnav(element.id);
    viewModel.appWheelNav.slicePathFunction = slicePath().DonutSlice;
		viewModel.appWheelNav.sliceInitPathFunction = viewModel.appWheelNav.slicePathFunction;
    viewModel.appWheelNav.initPercent = 0.1;
    viewModel.appWheelNav.navAngle = 270;
		viewModel.appWheelNav.wheelRadius = viewModel.appWheelNav.wheelRadius * 0.83;
		viewModel.appWheelNav.cssMode = true;
		viewModel.appWheelNav.markerEnable = true;
		viewModel.appWheelNav.markerPathFunction = markerPath().DropMarker;

		for (i=1;i <= viewModel.appConstants.SEARCH_RADIUS_MAX / 1000;i++) {
			wheelNavOptions.push(i.toString());
		}

		viewModel.appWheelNav.createWheel(wheelNavOptions);

		for (i=0;i < wheelNavOptions.length; i++) {
			createNavigateFunction(i);
		} 

		function createNavigateFunction(index) {
			viewModel.appWheelNav.navItems[index].navigateFunction = function() { bindingContext.$root.searchRadius((index + 1) * 1000)};
		}

	},

	// Update - called once when the binding is first applied, and again when any observables that are accessed change 
	update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {

		// Set a reference to the view model object
  	var viewModel = bindingContext.$root;

   	var searchRadius = ko.unwrap(valueAccessor()) / 1000 - 1;

		viewModel.appWheelNav.navigateWheel(searchRadius);
             
	}
};

// KO Custom Compass Binding
ko.bindingHandlers.compass = {

	// Init - called when the binding is first applied 
	init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {

		Compass.watch(function (heading) {
			$(element).show();
		  $(element).css({
		  	'-webkit-transform': 'rotate(' + (-heading) + 'deg)',
		  	'-moz-transform': 'rotate(' + (-heading) + 'deg)',
		  	'-ms-transform': 'rotate(' + (-heading) + 'deg)',
		  	'-o-transform': 'rotate(' + (-heading) + 'deg)',
		  	'transform': 'rotate(' + (-heading) + 'deg)'
		  });
		});

	}	
};

// KO Custom Viewport Width Binding 
ko.bindingHandlers.viewportWidth = {

	// Init - called when the binding is first applied 
	init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
		$(window).resize(function() {
			var viewportWidth = $(this).width();
			bindingContext.$root.appViewportWidth(viewportWidth);
		});
	}
};

// KO Custom Swipe Tap Binding
ko.bindingHandlers.preventSwipeTap = {

	// Init - called when the binding is first applied 
	init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {

		$(element).on("touchmove", function(){
			bindingContext.$root.appSwiping(true);
		});

		$(element).on("touchstart", function(){
	  	bindingContext.$root.appSwiping(false);
		});

	}	
};

// KO Custom Hover State Binding
ko.bindingHandlers.hover = { 

	// Init - called when the binding is first applied 
	init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {

		$(element).on("mouseover", function(){
			$(element).addClass('hover');
		});

		$(element).on("mouseout", function(){
	  	$(element).removeClass('hover');
		});

	}	
};

// Apply Knockout Bindings
ko.applyBindings(new ViewModel());

