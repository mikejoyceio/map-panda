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
	debug: false
};

(function(global) {

	// View Model 
	var ViewModel = function() {

		// Save a pointer reference to 'this'
		var self = this;

		this.appName = "App Name";
		this.contentName = "Content Name";
		this.mapInfo = ko.observable(false);
		this.placeList = ko.observableArray([]); 
		this.searchQuery = ko.observable();
		this.searchRadius = ko.observable('5000');
		this.rangeSlider = $('#rangeSlider');

		placesData.forEach(function(placeItem) {
			self.placeList.push(new Place(placeItem));
		});

		this.currentPlace = ko.observable( this.placeList()[0] );

		this.selectPlace = function(place) {
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

		$(rangeSlider).ionRangeSlider({
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

	// KO Custom Binding
	ko.bindingHandlers.map = {

	  init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {

	    var mapOptions = {
	      zoom: 13,
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
			 
			      var infowindow = new google.maps.InfoWindow({
			        map: global.map,
			        position: global.latLang,
			        center: global.latLang,
			        content: 'Location found using HTML5.'
			      });

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

			    var content = 'Error: The Geolocation service failed.';

			  } else {

			    var content = 'Error: Your browser doesn\'t support geolocation.';

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

		  	if (value.currentPlace().isActive()) {

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
			    		for (var i=0; i < results.length; i++) {
			    			global.places.push(results[i]);
			    		}
			    		setPlaces();
			    	} else if (status === google.maps.places.PlacesServiceStatus.ERROR) {
			    		log(status+' There was a problem contacting the Google servers.');
			    		log(status);
			    	} else if (status === google.maps.places.PlacesServiceStatus.INVALID_REQUEST) {
			    		log(status+' This request was invalid.');
			    		log(status);
			    	} else if (status === google.maps.places.PlacesServiceStatus.OVER_QUERY_LIMIT) {
			    		log(status+' The webpage has gone over its request quota.');
			    	} else if (status === google.maps.places.PlacesServiceStatus.REQUEST_DENIED) {
			    		log(status+' The webpage is not allowed to use the PlacesService.');
			    	} else if (status === google.maps.places.PlacesServiceStatus.UNKNOWN_ERROR) {
			    		log(status+' The PlacesService request could not be processed due to a server error. The request may succeed if you try again.');
			    	} else if (status === google.maps.places.PlacesServiceStatus.ZERO_RESULTS) {
			    		log(status+' No result was found for this request.');
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

					if ($("#infoModal"+data.id).length === 0) {
						$('body').append('<div id="infoModal'+data.id+'" class="info-modal modal"></div>');	
					}

				   google.maps.event.addListener(data.marker, 'click', function() {

				   		global.map.panTo(data.position);
				    
					    if ($("#infoModal"+data.id).children().length === 0) {

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
											rating: typeof place.rating !== 'undefined' ? place.rating : 'no rating'
										};

								 		$('#infoModal'+data.id).append(
								 			'<div class="modal-header">' +
								 				'<div class="top-bar">' +
								 					'<span id="closeInfoModal'+placeInfo.id+'" class="close-modal">' + 
														'<span class="icon fa-stack fa-sml">' +
															'<i class="icon-outer fa fa-circle-thin fa-stack-2x"></i>' +
															'<i class="icon-inner fa fa-close fa-stack-1x fa-inverse"></i>' +
														'</span>' +
								 					'</span>' +
								 				'</div>'+
								 				'<div class="image" style="background-image:url('+placeInfo.photo+')">' +
								 				'<div class="bottom-bar">' +
								 					'<div class="place-rating">'+placeInfo.rating+'</div>' +
								 				'</div>' +
								 			'</div>' +
								 			'<div class="modal-content">' +
								 				'<div class="">' +
								 				'</div>' +
								 				'<div class="info">' +
								 					'<p class="place-name">'+placeInfo.name+'</p>' +
								 					'<p class="place-address">'+placeInfo.vicinity+'</p>' +
								 					'<p class="place-phone">'+placeInfo.phone+'</p>' +
								 				'</div>' +
								 			'</div>' +
								 			'<div class="modal-footer">' +
								 				'<a href="#" class="button-foursquare">' +
								 					'<span class="icon fa fa-foursquare"></span>' +
								 					'<span>View in Foursquare</span>' +
								 				'</a>' +
								 			'</div>'
								 		);

								 		$(document).on('click', '#closeInfoModal'+placeInfo.id, function() {
								 			$("#infoModal"+placeInfo.id).hide();
								 		});

								  } else {

								  	log('Place details error'+status);

								  }
								}

								$(".info-modal").hide();
								$("#infoModal"+data.id).show();

							} else {
								
								$(".info-modal").hide(); 
								$("#infoModal"+data.id).show();

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

		}

	}

	// Apply Knockout Bindings
	ko.applyBindings(new ViewModel());

	// I'm lazy :)
	function log(data) {
		 return console.log(data);	
	}

})(globals);
