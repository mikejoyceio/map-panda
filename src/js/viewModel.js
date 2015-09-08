/**
 * @file overview : 
 * @author : contact@mikejoyce.io (Mike Joyce)
 */

// Global namespace
var globals = {
	map: '',
	latLang: '',
	places: [],
	markers: [],
	debug: true
};

(function(global) {

	// View Model 
	var ViewModel = function() {

		// Save a pointer reference to 'this'
		var self = this;

		this.appName = "App Name";
		this.contentName = "Content Name";
		this.notificationMessage = ko.observable('');
		this.notificationKeepAlive = ko.observable(false);
		this.notificationFadeDuration = ko.observable(1000);
		this.mapInfo = ko.observable(false);
		this.placeList = ko.observableArray([]); 
		this.searchQuery = ko.observable();
		this.searchRadius = ko.observable(5000);
		this.modalVisibilty = ko.observable(false);
		this.modalLoading = ko.observable(true);
		this.infoPhoto = ko.observable();
		this.infoRating = ko.observable();
		this.infoName = ko.observable();
		this.infoVicinity = ko.observable();
		this.infoPhone = ko.observable();

		placesData.forEach(function(placeItem) {
			self.placeList.push(new Place(placeItem));
		});

		this.currentPlace = ko.observable( this.placeList()[0] );

		this.selectPlace = function(place) {
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

		this.panTo = function() {
			global.map.panTo(global.latLang);
		}

		this.zoomIn = function() {
			var currentZoomLevel = global.map.getZoom();
			if(currentZoomLevel != 21){
			global.map.setZoom(currentZoomLevel + 1);}
		}

		this.zoomOut = function() {
			var currentZoomLevel = global.map.getZoom();
			if(currentZoomLevel != 0){
			global.map.setZoom(currentZoomLevel - 1);}
		}

		this.clearSearch = function() {
			for (i=0;i<self.placeList().length;i++) {
				self.placeList()[i].isHidden(false);
			}
		}
	 
	 	this.closeModal = function() {
	 		self.modalVisibilty(false);
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
		
			      global.latLang = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
			 
			      // var infowindow = new google.maps.InfoWindow({
			      //   map: global.map,
			      //   position: global.latLang,
			      //   center: global.latLang,
			      //   content: 'Location found using HTML5.'
			      // });

			      global.map.setCenter(global.latLang);

				    var marker = new google.maps.Marker({
				    	position: global.latLang,
				    	map: global.map,
				    	icon: { path: fontawesome.markers.MAP_MARKER,
										fillColor: '#ed5565',
										fillOpacity: 1,
										scale: 1/4,
										strokeColor: '#ed5565',
										strokeWeight: 1 },
				    	title: "You are here!"
				    });

				    marker.setAnimation(google.maps.Animation.BOUNCE);


			  }, function() {
		  		// Browser supports Geolocation but hasn't been enabled
		      handleNoGeolocation(true);
			}, 
				// Enable high accuracy 
				{maximumAge:600000, timeout:5000, enableHighAccuracy: true});
			  
			} else {
		    // Browser doesn't support Geolocation
		    handleNoGeolocation(false);
			}

			function handleNoGeolocation(errorFlag) {

			  if (errorFlag) {

					if (global.debug) console.log('Error: The Geolocation service failed.');
					bindingContext.$root.notificationKeepAlive(true);
					bindingContext.$root.notificationMessage('Error: The Geolocation service failed.');

			  } else {

					if (global.debug) console.log('Error: Your browser doesn\'t support geolocation.');
					bindingContext.$root.notificationKeepAlive(true);
					bindingContext.$root.notificationMessage('Error: Your browser doesn\'t support geolocation.');

			  }

			  var options = {
			    map: global.map,
			    position: new google.maps.LatLng(60, 105),
			    content: content
			  };

			  var infowindow = new google.maps.InfoWindow(options);
			  map.setCenter(options.position);
			}

		},

		update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
		  
	  	var value = valueAccessor();

	  	if (global.markers) {
	  		for (var i=0; i < global.markers.length; i++) {
					global.markers[i].setMap(null);
				}
				global.markers.length = 0;
	  	}

	  	if (value.currentPlace().isActive()) {

	  		var performSearch = function() {

			    var request = {
			    	location: global.latLang,
			    	radius: value.searchRadius(),
			    	types: []
			    };

			    request.types.push(value.currentPlace().type());

			    var infoWindow = new google.maps.InfoWindow();
			    var mapPlaces = new google.maps.places.PlacesService(global.map);
			    mapPlaces.nearbySearch(request, callback);

			    function callback(results, status) {
			    	if (status === google.maps.places.PlacesServiceStatus.OK) {
			    		clearMarkers();
			    		global.places.length = 0;
			    		bindingContext.$root.notificationKeepAlive(false);
			    		bindingContext.$root.notificationFadeDuration(0);
			    		for (var i=0; i < results.length; i++) {
			    			global.places.push(results[i]);
			    		}	
			    		setPlaces();
			    	} else if (status === google.maps.places.PlacesServiceStatus.ERROR) {
			    		if (global.debug) console.log(status+' There was a problem contacting the Google servers.');
			    		bindingContext.$root.notificationKeepAlive(true);
			    		bindingContext.$root.notificationMessage('There was a problem contacting the Google servers.');
			    	} else if (status === google.maps.places.PlacesServiceStatus.INVALID_REQUEST) {
			    		if (global.debug) console.log(status+' This request was invalid.');
			    		bindingContext.$root.notificationKeepAlive(true);
			    		bindingContext.$root.notificationMessage('The request was invalid');
			    	} else if (status === google.maps.places.PlacesServiceStatus.OVER_QUERY_LIMIT) {
			    		if (global.debug) console.log(status+' The webpage has gone over its request quota.');
			    		bindingContext.$root.notificationKeepAlive(true);
			    		bindingContext.$root.notificationMessage('This webpage has gone over its request quota.')
			    	} else if (status === google.maps.places.PlacesServiceStatus.REQUEST_DENIED) {
			    		if (global.debug) console.log(status+' This webpage is not allowed to use the PlacesService.')
			    		bindingContext.$root.notificationKeepAlive(true);
			    		bindingContext.$root.notificationMessage('This webpage is not allowed to use the PlacesService.')
			    	} else if (status === google.maps.places.PlacesServiceStatus.UNKNOWN_ERROR) {
			    		if (global.debug) console.log(status+' The PlacesService request could not be processed due to a server error. The request may succeed if you try again.')
			    		bindingContext.$root.notificationKeepAlive(true);
			    		bindingContext.$root.notificationMessage('Server Error. Please try again.')
			    	} else if (status === google.maps.places.PlacesServiceStatus.ZERO_RESULTS) {
			    		if (global.debug) console.log(status+' No result was found for this request.');
			    		bindingContext.$root.notificationKeepAlive(true);
			    		bindingContext.$root.notificationMessage('No results.');
			    	} else {
			    		if (global.debug) console.log('Error');
					   	bindingContext.$root.notificationKeepAlive(true);
			    		bindingContext.$root.notificationMessage('Error');	    		
			    	}
			    }

			    function setPlaces() {

				    for (var i=0; i < global.places.length; i++) {

				    	global.markers[i] = new google.maps.Marker({
				    		map: global.map,
				    		position: global.places[i].geometry.location,
				    		icon: value.currentPlace().marker()
				    	});

				    	global.markers[i].setMap(global.map);

				    	var placeData = {
				    		marker: global.markers[i],
				    		id: global.places[i].id,
				    		placeId: global.places[i].place_id,
				    		name: global.places[i].name,
				    		vicinity: global.places[i].vicinity,
				    		rating: global.places[i].rating,
				    		position: global.places[i].geometry.location,
				    		photo: typeof global.places[i].photos !== 'undefined'
				    					 ? global.places[i].photos[0].getUrl({'maxWidth': 100, 'maxHeight': 100})
				    					 : 'nophoto.jpg'
				    	}

				    	addInfoWindow(placeData);
				    	addInfoModal(placeData);

				    }

				    var bounds = new google.maps.LatLngBounds();
				    for(i=0; i<global.markers.length; i++) {
				    	bounds.extend(global.markers[i].getPosition());
				    }
				    global.map.fitBounds(bounds);

				 	}

					function addInfoWindow(data) {

					 	google.maps.event.addListener(data.marker, 'mouseover', function() {

					  	infoWindow.setContent(
					  		'<div class="info-window">' +
					  		'<h5>'+data.name+'</h5>' +
					  		'<img src="'+data.photo+'">' +
					  		'</div>'
					  	);

					  	infoWindow.open(global.map, this);

					  });

					  google.maps.event.addListener(data.marker, 'mouseout', function() {
					  	infoWindow.close(global.map, this);
					  });

					}

					function addInfoModal(data) {

						google.maps.event.addListener(data.marker, 'click', function() {

							global.map.panTo(data.position);

							bindingContext.$root.modalVisibilty(true);
							bindingContext.$root.modalLoading(true);

							var request = { 
					  		placeId: data.placeId
							};

							var service = new google.maps.places.PlacesService(global.map);
							service.getDetails(request, callback);

							function callback(place, status) {

							  if (status == google.maps.places.PlacesServiceStatus.OK) {

							  	var placeInfo = {
										id: place.id,
										name: place.name,
										vicinity: place.vicinity,
										phone: typeof place.formatted_phone_number !== 'undefined' ? place.formatted_phone_number : 'no number',
										photo: typeof place.photos !== 'undefined' ? place.photos[0].getUrl({'maxWidth': 300, 'maxHeight': 300}) : 'dist/images/default.png',
										rating: typeof place.rating !== 'undefined' ? place.rating : '-'
									};

									bindingContext.$root.infoPhoto("url('"+placeInfo.photo+"')");
									bindingContext.$root.infoRating(placeInfo.rating);
									bindingContext.$root.infoName(placeInfo.name);
									bindingContext.$root.infoVicinity(placeInfo.vicinity);
									bindingContext.$root.infoPhone(placeInfo.phone);
									bindingContext.$root.modalLoading(false);

							  } else {

						  		if (global.debug) console.log(status);

							  }
							}

						});

					}

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
		update: function(element, valueAccessor, allBindingsAccessor, viewModel) {
			var rawValue = valueAccessor(),
				//notification can be passed an object with properties 'message', 'duration', 'fadeoutDuration', 'hide', 'fade', and 'callback', or it can be given just a string
				options = typeof rawValue == 'object' ? rawValue : {message: rawValue},
				message = ko.utils.unwrapObservable(options.message),
				duration = options.duration !== undefined ? ko.utils.unwrapObservable(options.duration) : 5000, //5 seconds is default fade out
				fadeoutDuration = options.fadeoutDuration !== undefined ? ko.utils.unwrapObservable(options.fadeoutDuration) : 200, //default is 200 ms
				hide = options.hide !== undefined ? ko.utils.unwrapObservable(options.hide) : true, //default is to hide it
				fade = options.fade !== undefined ? ko.utils.unwrapObservable(options.fade) : true, //default is to fade it out in presence of jquery
	            callback = options.callback !== undefined ? ko.utils.unwrapObservable(options.callback) : function() {},
				jQueryExists = typeof jQuery != 'undefined';

			//set the element's text to the value of the message
			if (message === null || message === undefined)
				message = "";

			element.innerHTML = message;

			//clear any outstanding timeouts
			clearTimeout(element.notificationTimer);

			if (message == '') {
				element.style.display = 'none';
				return;
			}

			//if there are any animations going on, stop them and show the element. otherwise just show the element
			if (jQueryExists)
				jQuery(element).stop(true, true).show();
			else
				element.style.display = '';

			if (!hide) {
				//run a timeout to make it disappear
				element.notificationTimer = setTimeout(function() {
					//if jQuery is there, run the fadeOut, otherwise do old-timey js
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
		update: function(element, valueAccessor) {
			var value = valueAccessor();
			if (global.debug) console.log(ko.unwrap(value));
			ko.bindingHandlers.value.update(element, valueAccessor)
		}
	};

	// KO Custom Binding for Modal
	ko.bindingHandlers.modal = {
		update: function(element, valueAccessor) {
			var values = valueAccessor();
			var visibility = values.visibility();
			var loading = values.loading();

			if (visibility) {
				$(element).show();
			} else {
				$(element).hide();
			}

			if (loading) {
				//$(element).children();
			} else {
				//$(element).children().fadeIn();
			}

		}
	}

	// Apply Knockout Bindings
	ko.applyBindings(new ViewModel());

})(globals);
