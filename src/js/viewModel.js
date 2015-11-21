
// View Model

/**
 * @file overview : Map project for Udacity's FEND
 * @author : contact@mikejoyce.io (Mike Joyce)
 */

/* TODO:
 * - Add javascript promise polypill
 * - Add help panel
 */

// Global Namespace
var globals = {
	map: '',
	latLang: '',
	places: [],
	markers: [],
	debug: true,
	wheelNav: ''
};

// Encapsulate the ViewModel
(function(global) {

	// View Model 
	var ViewModel = function() {

		// Save a pointer reference to 'this'
		var self = this;

		// App Observables
		this.appName = "App Name";
		this.appDescription = "App Description";

		// Notifcation Observables
		this.notificationMessage = ko.observable('');
		this.notificationKeepAlive = ko.observable(false);
		this.notificationFadeDuration = ko.observable(1000);

		// Map Observables
		this.mapInfo = ko.observable(false);
		this.mapLoaderVisibility = ko.observable(false);
		this.mapCurrentLat = ko.observable();
		this.mapCurrentLng = ko.observable();

		// Place List Observable
		this.placeList = ko.observableArray([]); 

		// Search Observables
		this.searchQuery = ko.observable();
		this.searchRadius = ko.observable(5000);

		// Modal Observables
		this.modalVisibilty = ko.observable(false);
		this.modalOverlayVisibility = ko.observable(false);
		this.modalOverlayMessage = ko.observable();
		this.modalOverlayMessageVisibility = ko.observable(false);
		this.modalOverlayCopyButtonVisibility = ko.observable();
		this.modalOverlayGroupButtons = ko.observable();
		this.modalLoading = ko.observable(true);
		this.modalInfoPhoto = ko.observable();
		this.modalInfoPhotoVisibility = ko.observable(false);
		this.modalInfoPrice = ko.observable();
		this.modalInfoRating = ko.observable('one');
		this.modalInfoName = ko.observable();
		this.modalInfoAddress = ko.observable();
		this.modalInfoWebsite = ko.observable();
		this.modalInfoLat = ko.observable();
		this.modalInfoLng = ko.observable();
		this.modalInfoPhone = ko.observable();
		this.modalInfoPhoneCall = ko.observable();
		this.modalFoursquareVisibility = ko.observable(false);
		this.modalFoursquareURL = ko.observable();
		this.modalUberEstimate = ko.observable();
		this.modalUberEstimateVisibility = ko.observable(false);
		this.modalUberDeepLink = ko.observable(false);
		this.modalUberLoading = ko.observable(false);

		// Loop through each place object in the dataModel.places array
		dataModel.places.forEach(function(placeItem) {
			self.placeList.push(new Place(placeItem));
		});

		// Set the current place
		this.currentPlace = ko.observable( this.placeList()[0] );

		var dragging = false;

		$("body").on("touchmove", function(){
  		dragging = true;
		});

		$("body").on("touchstart", function(){
    	dragging = false;
		});

		// Select the current place
		this.selectPlace = function(place) {

			if (dragging) 
				return;

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
		this.panTo = function() {
			global.map.panTo(global.latLang);
		}

		// Zoom the map in
		this.zoomIn = function() {
			var currentZoomLevel = global.map.getZoom();
			if(currentZoomLevel != 21){
			global.map.setZoom(currentZoomLevel + 1);}
		}

		// Zoom the map out
		this.zoomOut = function() {
			var currentZoomLevel = global.map.getZoom();
			if(currentZoomLevel != 0){
			global.map.setZoom(currentZoomLevel - 1);}
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
					self.modalFoursquareURL('https://foursquare.com/v/'+data.response.venues[0]['id']);
			  	self.modalFoursquareVisibility(true);
				}	else {
					self.modalFoursquareURL('#');
					self.modalFoursquareVisibility(false);
				}
		  }, function(xhrObj) {
		  	console.log(xhrObj);
		  });

		}

		this.uberRideEstimate = function() {
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

	// KO Custom Binding for Map
	ko.bindingHandlers.map = {

		// Init function - ran once
	  init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {

	    var mapOptions = {
	      zoom: 15,
	      zoomControl: false,
	      mapTypeControl: false,
	      streetViewControl: false,
	      panControl: false,
	      styles: [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2e5d4"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#c5dac6"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{"featureType":"road","elementType":"all","stylers":[{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#c5c6c6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#e4d7c6"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fbfaf7"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"color":"#acbcc9"}]}]
	    };

	    global.map = new google.maps.Map(element, mapOptions);

		  // Try HTML5 geolocation
		  if(navigator.geolocation) {
		    navigator.geolocation.getCurrentPosition(function(position) {

		    		// Update the current lat / long
		    		bindingContext.$root.mapCurrentLat(position.coords.latitude);
		    		bindingContext.$root.mapCurrentLng(position.coords.longitude);
		
						// Instantiate a new Google Map object	
			      global.latLang = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);	

		    		// Center map on current location
			      global.map.setCenter(global.latLang);

			      // Add a custom HTML current position marker to the map
				    var marker = new RichMarker({
				    	position: global.latLang,
				    	map: global.map,
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

			  	// If the global.debug variable is set to true, console.log the error
					if (global.debug) console.log('Error: Geolocation service failed.');

					// Show the user notification message 
					bindingContext.$root.notificationKeepAlive(true);
					bindingContext.$root.notificationMessage('Geolocation failed.');

			  } else {

			  	// If the global.debug variable is set to true, console.log the error
					if (global.debug) console.log('Error: Browser doesn\'t support geolocation.');

					// Show the user notification message 
					bindingContext.$root.notificationKeepAlive(true);
					bindingContext.$root.notificationMessage('Gelocation unsupported');

			  }

			}

		},

		// Update function - ran every times an observable changes
		update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
		  
	  	var value = valueAccessor();

	  	// If the markers array contains values, clear them from the map
	  	if (global.markers) {
	  		for (var i=0; i < global.markers.length; i++) {
					global.markers[i].setMap(null);
				}
				global.markers.length = 0;
	  	}

	  	// If the current place is active, perform a search
	  	if (value.currentPlace().isActive()) {

	  		var performSearch = function() {

	  			// Google Maps places search request object
			    var request = {
			    	location: global.latLang,
			    	radius: value.searchRadius(),
			    	types: []
			    };

			    // Push the current place type into the request object types array
			    request.types.push(value.currentPlace().type());

			    // // Instatiate a new Google Maps info window
			    // var infoBox = new InfoBox();

			    // Instantiate a new places service object
			    var mapPlaces = new google.maps.places.PlacesService(global.map);

			    // Set a variable to hold error messages for debugging purposes
			    var statusMessage;

			    // Set a variable to hold error messages visible to the user
			    var notificationMessage;

			    // Search nearby places
			    mapPlaces.nearbySearch(request, callback);

			    // Google Maps places search callback function
			    function callback(results, status) {

			    	if (status === google.maps.places.PlacesServiceStatus.OK) {

			    		bindingContext.$root.mapLoaderVisibility(true);

			    		// Clear all markers from the map
			    		clearMarkers();

			    		// Set the places array length to 0
			    		global.places.length = 0;

			    		// Hide user notification messages
			    		bindingContext.$root.notificationKeepAlive(false);
			    		bindingContext.$root.notificationFadeDuration(0);

			    		// Loop through the results and push intot the places array
			    		for (var i=0; i < results.length; i++) {
			    			global.places.push(results[i]);
			    		}	

			    		// Set place markers, info windows and modals	
			    		setPlaces();

			    		// Hide the map loading animation
		    			setTimeout(function() {
		    				bindingContext.$root.mapLoaderVisibility(false);
		    			}, 1000);

			    	/* Callback Error Handling
						 * Error status and messages will be passed the the callbackError function.
						 */

			    	} else if (status === google.maps.places.PlacesServiceStatus.ERROR) {
			    		statusMessage = status+' There was a problem contacting the Google servers.';
			    		notificationMessage = 'Connection error';
			    		callbackError(statusMessage, notificationMessage);
			    	} else if (status === google.maps.places.PlacesServiceStatus.INVALID_REQUEST) {
			    		statusMessage = status+' This request was invalid.';
			    		notificationMessage = 'Error. Please try again.';
			    		callbackError(statusMessage, notificationMessage);
			    	} else if (status === google.maps.places.PlacesServiceStatus.OVER_QUERY_LIMIT) {
				    	statusMessage = status+' The webpage has gone over its request quota.';
			    		notificationMessage = 'Slow down!';
			    		callbackError(statusMessage, notificationMessage);		    		
			    	} else if (status === google.maps.places.PlacesServiceStatus.REQUEST_DENIED) {
			    		statusMessage = status+' This webpage is not allowed to use the PlacesService.';
			    		notificationMessage = 'Error. Please try again.';
			    		callbackError(statusMessage, notificationMessage);	
			    	} else if (status === google.maps.places.PlacesServiceStatus.UNKNOWN_ERROR) {
			    		statusMessage = status+' The PlacesService request could not be processed due to a server error. The request may succeed if you try again.';
			    		notificationMessage = 'Server Error. Please try again.';
			    		callbackError(statusMessage, notificationMessage);	
			    	} else if (status === google.maps.places.PlacesServiceStatus.ZERO_RESULTS) { 
			    		statusMessage = status+' No result was found for this request.';
			    		notificationMessage = 'No Results';
			    		callbackError(statusMessage, notificationMessage);	
			    	} else {
			    		callbackError('Unknown error', 'Error. Please try again.');
			    	}
			    }


			    /* Callback Error Function
			     * This function will create both an error message for debugging purposes and a
					 * more readable, jargon-free error message for the user.
			     */
			    function callbackError(statusMessage, notificationMessage) {

			    	// If the global.debug variable is set to true, console log the error
			    	if (global.debug) console.log(statusMessage);

			    	// Show the user notification message
				    bindingContext.$root.mapLoaderVisibility(false);
				   	bindingContext.$root.notificationKeepAlive(true);
		    		bindingContext.$root.notificationMessage(notificationMessage);	  	    	

			    }

			    // Set places function
			    function setPlaces() {

			    	// Loop thought the places array
				    for (var i=0; i < global.places.length; i++) {

				    	// Create a marker and set marker's icon
				    	global.markers[i] = new google.maps.Marker({
				    		map: global.map,
				    		position: global.places[i].geometry.location,
				    		icon: value.currentPlace().marker()
				    	});

				    	// Add the marker to the map
				    	global.markers[i].setMap(global.map);

				    	// Create an object to hold data for the place
				    	var placeData = {
				    		marker: global.markers[i],
				    		id: global.places[i].id,
				    		placeId: global.places[i].place_id,
				    		name: global.places[i].name,
				    		icon: value.currentPlace().icon(),
				    		vicinity: global.places[i].vicinity,
				    		rating: typeof global.places[i].rating !== 'undefined' ? Math.round(global.places[i].rating) : 0,
				    		position: global.places[i].geometry.location,
				    		photo: typeof global.places[i].photos !== 'undefined'
				    					 ? global.places[i].photos[0].getUrl({'maxWidth': 100, 'maxHeight': 100})
				    					 : 'dist/images/default-small.png'
				    	}

				    	// Add an Info Box
				    	addInfoBox(placeData);

				    	// Add a Modal
				    	addModal(placeData);

				    }

				    // Automagically zoom the map in / out to show all the markers 
				    var bounds = new google.maps.LatLngBounds();
				    for(i=0; i<global.markers.length; i++) {
				    	bounds.extend(global.markers[i].getPosition());
				    }
				    global.map.fitBounds(bounds);

				 	}

				 	// Add Info Box function
					function addInfoBox(data) {

						var content = '<div class="info-box-content">' + 
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

						var infoBoxOptions = {
							boxClass: 'info-box',
							content: content,
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

						var infoBox = new InfoBox(infoBoxOptions);

						// Add event listener to show Info Box on marker mouseover
					 	google.maps.event.addListener(data.marker, 'mouseover', function() {
					 		infoBox.open(global.map, this);
					  });

					 	// Add event listener to hide Info Box on marker mouseout
					  google.maps.event.addListener(data.marker, 'mouseout', function() {
					  	infoBox.close(global.map, this);
					  });

					}

					// Add Modal function
					function addModal(data) {

						// Add event listener to show Modal on marker click
						google.maps.event.addListener(data.marker, 'click', function() {

							// Reset the marker icons
							for (i=0; i < global.markers.length; i++) {
								global.markers[i].setIcon(value.currentPlace().marker());
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
							// global.map.panTo(data.position);

							// Show the modal
							bindingContext.$root.modalVisibilty(true);

							// Hide the modal photo
							bindingContext.$root.modalInfoPhotoVisibility(false);

							// Hide the modal overlay
							bindingContext.$root.modalOverlayVisibility(false);

							// Hide Uber estimate
							bindingContext.$root.modalUberEstimateVisibility(false);
							
							// Show the modal loading animation
							bindingContext.$root.modalLoading(true);

							// Google Maps places search request object 
							var request = { 
					  		placeId: data.placeId
							};

							// Instatiate a Google Maps Places Service object
							var service = new google.maps.places.PlacesService(global.map);
							service.getDetails(request, callback);

							// Google Maps places search callback function
							function callback(place, status) {

								// If the request if OK, set the Info Window content
							  if (status == google.maps.places.PlacesServiceStatus.OK) {
		
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

									bindingContext.$root.modalInfoName(placeInfo.name);
									bindingContext.$root.modalInfoAddress(placeInfo.address);
									bindingContext.$root.modalInfoWebsite(placeInfo.website);
									bindingContext.$root.modalInfoLat(placeInfo.lat);							
									bindingContext.$root.modalInfoLng(placeInfo.lng);
									bindingContext.$root.modalInfoPhone(placeInfo.phone);
									bindingContext.$root.modalInfoPhoneCall(placeInfo.phoneCall);									
									bindingContext.$root.modalInfoPhoto(placeInfo.photo);
									bindingContext.$root.modalInfoPrice(placeInfo.price);
									bindingContext.$root.modalInfoRating(placeInfo.rating);

									// Search Foursquare
									bindingContext.$root.searchFoursquare();

									// Uber ride estimate 
									bindingContext.$root.uberRideEstimate();

									setTimeout(function() {
										bindingContext.$root.modalLoading(false);
										bindingContext.$root.modalInfoPhotoVisibility(true);
									}, 1000);

								// If the request failed, console log the error if the global.debug variable is set to true
							  } else {

						  		if (global.debug) console.log(status);

							  }
							}

						});

					}

					// Clear map markers function
					function clearMarkers() {
						for (var i=0; i < global.markers.length; i++) {
							global.markers[i].setMap(null);
						}
						global.markers.length = 0;
					}

				} 
				performSearch();

			}

		} 

	};

	// KO Custom Binding for Notifications
	ko.bindingHandlers.notification = {

		// Update function - ran everytime an observable changes
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
			if (jQueryExists)
				jQuery(element).stop(true, true).show();
			else
				element.style.display = '';

			if (!hide) {

				// Run a timeout to make it disappear
				element.notificationTimer = setTimeout(function() {

					// If jQuery is there, run the fadeOut, otherwise do old-timey js
					if (jQueryExists) {
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
					} else {
						element.style.display = 'none';
	          callback();
					}
				}, duration);
			} else {
	      callback();
			}
		}
	};

	// KO Custom Binding for Range Slider
	ko.bindingHandlers.rangeSlider = {

		// Init function - ran once
		init: function(element, valueAccessor, allBindingsAccessor) {
			$(element).ionRangeSlider({
			    min: 1000,
			    max: 10000,
			    from: 5000,
			    step: 1000,
			    postfix: ' km',
			    hide_min_max: true,
			    prettify_enabled: true,
			    prettify: function(num) {
			    	return num / 1000;
			    }
			});
			ko.bindingHandlers.value.init(element, valueAccessor, allBindingsAccessor);
		},

		// Update function - ran everytime an observable is updated
		update: function(element, valueAccessor) {
			var value = valueAccessor();
			if (global.debug) console.log(ko.unwrap(value));

			var rangeSlider = $(element).data('ionRangeSlider');

			rangeSlider.update({
				from: ko.unwrap(value)
			});

			ko.bindingHandlers.value.update(element, valueAccessor)
		}
	};

	// KO Custom Binding for Scroll Bar
	ko.bindingHandlers.scrollBar = {

		// Init function - ran once
		init: function(element, valueAccessor, allBindingsAccessor) {

			// Check for mobile devices
			var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

			// If the device not a mobile device, instatiate the custom scroll bar
			if (!isMobile) {
				$(element).mCustomScrollbar({
					keyboard:{scrollType:"stepped"},
					mouseWheel:{scrollAmount:10}
				});
			}
		}
	};

	// KO Custom Binding for Clipboard
	ko.bindingHandlers.clipboard = {

		// Init function - ran once
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

	// KO Custom Binding for WheelNav
	ko.bindingHandlers.wheelNav = {

		// Init function - ran once
		init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
			global.wheelNav = new wheelnav(element.id);
      global.wheelNav.slicePathFunction = slicePath().DonutSlice;
 			global.wheelNav.sliceInitPathFunction = global.wheelNav.slicePathFunction;
      global.wheelNav.initPercent = 0.1;
      global.wheelNav.navAngle = 270;
			global.wheelNav.wheelRadius = global.wheelNav.wheelRadius * 0.83;
			global.wheelNav.cssMode = true;
			global.wheelNav.markerEnable = true;
			global.wheelNav.markerPathFunction = markerPath().DropMarker;
      global.wheelNav.createWheel(['1','2','3','4','5','6','7','8','9','10']);
      global.wheelNav.navItems[0].navigateFunction = function () { bindingContext.$root.searchRadius(1000) };
      global.wheelNav.navItems[1].navigateFunction = function () { bindingContext.$root.searchRadius(2000) };
      global.wheelNav.navItems[2].navigateFunction = function () { bindingContext.$root.searchRadius(3000) };
      global.wheelNav.navItems[3].navigateFunction = function () { bindingContext.$root.searchRadius(4000) };
      global.wheelNav.navItems[4].navigateFunction = function () { bindingContext.$root.searchRadius(5000) };
      global.wheelNav.navItems[5].navigateFunction = function () { bindingContext.$root.searchRadius(6000) };
    	global.wheelNav.navItems[6].navigateFunction = function () { bindingContext.$root.searchRadius(7000) };
   	 	global.wheelNav.navItems[7].navigateFunction = function () { bindingContext.$root.searchRadius(8000) };
   	 	global.wheelNav.navItems[8].navigateFunction = function () { bindingContext.$root.searchRadius(9000) };
   	  global.wheelNav.navItems[9].navigateFunction = function () { bindingContext.$root.searchRadius(10000) };
		},

		update: function(element, valueAccessor) {

     	var searchRadius = ko.unwrap(valueAccessor()) / 1000 - 1;

			global.wheelNav.navigateWheel(searchRadius);
               
		}
	};

	// KO Custom Binding for Compass
	ko.bindingHandlers.compass = {

		// Init function - ran once
		init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {

			Compass.watch(function (heading) {
				$(element).show();
			  $(element).css('-webkit-transform', 'rotate(' + (-heading) + 'deg)');
			});

		}	
	};

	// Apply Knockout Bindings
	ko.applyBindings(new ViewModel());

})(globals);
