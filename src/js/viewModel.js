// Globals
var map;
var latLang;
var places = [];
var markers = [];
var debug = false;

// View Model 
var ViewModel = function() {

	// Save a pointer reference to 'this'
	var self = this;

	this.appName = "App Name";
	this.contentName = "Content Name";
	this.info = ko.observable(false);
	this.placeList = ko.observableArray([]); 
	this.searchQuery = ko.observable();
	this.searchRadius = ko.observable('5000');

	placesData.forEach(function(placeItem) {
		this.placeList.push(new Place(placeItem));
	}, this);

	this.currentPlace = ko.observable( this.placeList()[0] );

	this.selectPlace = function(place) {
		self.currentPlace(place);
		for(i=0;i<self.placeList().length;i++) {
			self.placeList()[i].isActive(false);
			self.info(false);
		}
		place.isActive(!place.isActive());
		self.info(true);
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
		map.panTo(latLang);
	}

	this.zoomIn = function() {
		var currentZoomLevel = map.getZoom();
		if(currentZoomLevel != 21){
		map.setZoom(currentZoomLevel + 1);}
	}

	this.zoomOut = function() {
		var currentZoomLevel = map.getZoom();
		if(currentZoomLevel != 0){
		map.setZoom(currentZoomLevel - 1);}
	}

	this.clearSearch = function() {
		for (i=0;i<self.placeList().length;i++) {
			self.placeList()[i].isHidden(false);
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

// KO Custom Binding
ko.bindingHandlers.map = {


  init: function(element, valueAccessor, allBindings) {

    var mapOptions = {
      zoom: 13,
      styles: [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2e5d4"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#c5dac6"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{"featureType":"road","elementType":"all","stylers":[{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#c5c6c6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#e4d7c6"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fbfaf7"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"color":"#acbcc9"}]}]
    };

    map = new google.maps.Map(element, mapOptions);


	  // Try HTML5 geolocation
	  if(navigator.geolocation) {
	    navigator.geolocation.getCurrentPosition(function(position) {
	
	      latLang = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	 
	      var infowindow = new google.maps.InfoWindow({
	        map: map,
	        position: latLang,
	        center: latLang,
	        content: 'Location found using HTML5.'
	      });

	      map.setCenter(latLang);

		    var marker = new google.maps.Marker({
		    	position: latLang,
		    	map: map,
		    	icon: { path: fontawesome.markers.MAP_MARKER,
								fillColor: '#ffff00',
								fillOpacity: 1,
								scale: 1/4,
								strokeColor: '#bd8d2c',
								strokeWeight: 1},
		    	title: "You are here!"
		    });

		    marker.setAnimation(google.maps.Animation.BOUNCE);

		  }, function() {
		      handleNoGeolocation(true);
		   	 });
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
			    map: map,
			    position: new google.maps.LatLng(60, 105),
			    content: content
			  };

			  var infowindow = new google.maps.InfoWindow(options);
			  map.setCenter(options.position);
			}

	},

	update: function(element, valueAccessor, allBindings) {
	  	
	  	var value = valueAccessor();

	    var request = {
	    	location: latLang,
	    	radius: value.searchRadius(),
	    	types: []
	    }

	    request.types.push(value.currentPlace().type());

	    var infoWindow = new google.maps.InfoWindow();
	    var mapPlaces = new google.maps.places.PlacesService(map);
	    mapPlaces.nearbySearch(request, callback);

	    function callback(results, status) {
	    	if (status === google.maps.places.PlacesServiceStatus.OK) {
	    		clearMarkers();
	    		places.length = 0;
	    		if(!debug) {
	    			log(results);
	    		}
	    		for (var i=0; i < results.length; i++) {
	    			places.push(results[i]);
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

		    for (var i=0; i < places.length; i++) {

		    	if(!debug) {
		    		log(places[i].types[0]);
		    	}

		    	markers[i] = new google.maps.Marker({
		    		map: map,
		    		position: places[i].geometry.location,
		    		icon: value.currentPlace().marker()
		    	});

		    	markers[i].setMap(map);

		    	var placeData = {
		    		marker: markers[i],
		    		id: places[i].id,
		    		placeId: places[i].place_id,
		    		name: places[i].name,
		    		vicinity: places[i].vicinity,
		    		rating: places[i].rating,
		    		photo: typeof places[i].photos !== 'undefined'
		    					 ? places[i].photos[0].getUrl({'maxWidth': 100, 'maxHeight': 100})
		    					 : 'nophoto.jpg'
		    	}

		    	addInfoWindow(placeData);
		    	addModal(placeData);

		    }

		 }

		 function addInfoWindow(data) {

		   	google.maps.event.addListener(data.marker, 'mouseover', function() {

		    	infoWindow.setContent(
		    		'<div class="info-window">' +
		    		'<h5>'+data.name+'</h5>' +
		    		'<img src="'+data.photo+'">' +
		    		'<button id="openModal'+data.id+'">Button</button>' +
		    		'</div>'
		    	);

		    	infoWindow.open(map, this);

		    });
		 }

		 function addModal(data) {

		 	if ($("#modal"+data.id).length === 0) {

		 		$('body').append('<div id="modal'+data.id+'" class="modal"></div>');	

		 		$(document).on('click', '#openModal'+data.id, function() {
		    
			    if ($("#modal"+data.id).children().length === 0) {

			 			var request = { 
					  	placeId: data.placeId
						};

						var service = new google.maps.places.PlacesService(map);
						service.getDetails(request, callback);

						function callback(place, status) {

						  if (status == google.maps.places.PlacesServiceStatus.OK) {

						  	var placeInfo = {
									id: place.id,
									name: place.name,
									vicinity: place.vicinity,
									phone: typeof place.formatted_phone_number !== 'undefined' ? place.formatted_phone_number : 'no number',
									photo: typeof place.photos !== 'undefined' ? place.photos[0].getUrl({'maxWidth': 300, 'maxHeight': 300}) : 'nophoto.jpg',
									rating: typeof place.rating !== 'undefined' ? place.rating : 'no rating'
								}	

						 		$('#modal'+data.id).append(
						 			'<span id="closeModal'+placeInfo.id+'">close</span>' +
						 			'<h4>'+placeInfo.name+'</h4>' +
						 			'<div class="address">'+placeInfo.vicinity+'</div>' +
						 			'<div class="phone">'+placeInfo.phone+'</div>' +
						 			'<div class="rating">'+placeInfo.rating+'</div>' +
						 			'<img class="photo" src="'+placeInfo.photo+'">' 
						 		);

						 		$(document).on('click', '#closeModal'+placeInfo.id, function() {
						 			$("#modal"+placeInfo.id).hide();
						 		});

						  } else {

						  	log('Place details error'+status);

						  }
						}

						$("#modal"+data.id).show();

					} else {
						 
						$("#modal"+data.id).show();

						}

		  	});

		 	}


		 }

		 function clearMarkers() {

			for (var i=0; i < markers.length; i++) {

				markers[i].setMap(null);

			}

			markers.length = 0;

		 }

	}

}

// Apply Knockout Bindings
ko.applyBindings(new ViewModel());

// I'm lazy :)
function log(data) {
	 return console.log(data);	
}
