
// Data Model

var dataModel = {};

/* Places Data
 * - Name: The name of the place
 * - Description: A short description of the place
 * - Type: The has to be from the Google Places API
 * - Icon: Font Awesome CSS class
 * - Marker: Font Awesome SVG map marker
 */

dataModel.places = [
	{
		name: 'Airports',
		description: 'description text',
		type: 'airport', 
		icon: 'fa-plane',
		marker: { path: fontawesome.markers.PLANE,
								fillColor: '#34495e',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#f9f9f9',
								strokeWeight: 1 }
	},
	{
		name: 'Amusement Parks',
		description: 'description text',
		type: 'amusement_park',
		icon: 'fa-ticket',
		marker: { path: fontawesome.markers.TICKET,
								fillColor: '#2980b9',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#f9f9f9',
								strokeWeight: 1 }
	},	{
		name: 'Art Galleries',
		description: 'description text',
		type: 'art_gallery',
		icon: 'fa-paint-brush',
		marker: { path: fontawesome.markers.PAINT_BRUSH,
								fillColor: '#2980b9',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#f9f9f9',
								strokeWeight: 1 }
	},
	{
		name: 'ATMs',
		description: 'description text',
		type: 'atm',
		icon: 'fa-credit-card',
		marker: { path: fontawesome.markers.CREDIT_CARD,
								fillColor: '#4183D7',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#ffffff',
								strokeWeight: 0.2 }
	},
	{
		name: 'Banks',
		description: 'description text',
		type: 'bank',
		icon: 'fa-university',
		marker: { path: fontawesome.markers.UNIVERSITY,
								fillColor: '#4183D7',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#ffffff',
								strokeWeight: 0.2 }
	},
	{
		name: 'Bars',
		description: 'description text',
		type: 'bar',
		icon: 'fa-beer',
		marker: { path: fontawesome.markers.BEER,
								fillColor: '#966F33',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#ffffff',
								strokeWeight: 1 }
	},
	{
		name: 'Bicycle Stores',
		description: 'description text',
		type: 'bicycle_store',
		icon: 'fa-bicycle',
		marker: { path: fontawesome.markers.BICYCLE,
								fillColor: '#966F33',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#ffffff',
								strokeWeight: 1 }
	},
	{
		name: 'Book Stores',
		description: 'description text',
		type: 'book_store',
		icon: 'fa-book',
		marker: { path: fontawesome.markers.BOOK,
								fillColor: '#966F33',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#ffffff',
								strokeWeight: 1 }
	},
	{
		name: 'Bus Stations',
		description: 'description text',
		type: 'bus_station',
		icon: 'fa-bus',
		marker: { path: fontawesome.markers.BUS,
								fillColor: '#3A539B',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#f9f9f9',
								strokeWeight: 1 }
	},
	{
		name: 'Cafes',
		description: 'description text',
		type: 'cafe',
		icon: 'fa-coffee',
		marker: { path: fontawesome.markers.COFFEE,
								fillColor: '#966F33',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#ffffff',
								strokeWeight: 1 }
	},
	{
		name: 'Car Parks',
		description: 'description text',
		type: 'parking',
		icon: 'fa-car',
		marker: { path: fontawesome.markers.CAR,
								fillColor: '#966F33',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#ffffff',
								strokeWeight: 1 }
	},
	{
		name: 'Car Repair',
		description: 'description text',
		type: 'car_repair',
		icon: 'fa-wrench',
		marker: { path: fontawesome.markers.WRENCH,
								fillColor: '#966F33',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#ffffff',
								strokeWeight: 1 }
	},
	{
		name: 'Car Washes',
		description: 'description text',
		type: 'car_wash',
		icon: 'fa-tint',
		marker: { path: fontawesome.markers.TINT,
								fillColor: '#966F33',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#ffffff',
								strokeWeight: 1 }
	},
	{
		name: 'Department Stores',
		description: 'description text',
		type: 'department_store',
		icon: 'fa-building-o',
		marker: { path: fontawesome.markers.BUILDING_O,
								fillColor: '#e74c3c',
								fillOpacity: 1,
								scale: 0.4,
								strokeColor: '#ffffff',
								strokeWeight: 0.4 }
	},
	{
		name: 'Doctors',
		description: 'description text',
		type: 'doctor',
		icon: 'fa-stethoscope',
		marker: { path: fontawesome.markers.STETHOSCOPE,
								fillColor: '#e74c3c',
								fillOpacity: 1,
								scale: 0.4,
								strokeColor: '#ffffff',
								strokeWeight: 0.4 }
	},
	{
		name: 'Electricians',
		description: 'description text',
		type: 'electrician',
		icon: 'fa-flash',
		marker: { path: fontawesome.markers.FLASH,
								fillColor: '#e74c3c',
								fillOpacity: 1,
								scale: 0.4,
								strokeColor: '#ffffff',
								strokeWeight: 0.4 }
	},
	{
		name: 'Electronic Stores',
		description: 'description text',
		type: 'electronics_store',
		icon: 'fa-tv',
		marker: { path: fontawesome.markers.TV,
								fillColor: '#e74c3c',
								fillOpacity: 1,
								scale: 0.4,
								strokeColor: '#ffffff',
								strokeWeight: 0.4 }
	},
	{
		name: 'Fire Stations',
		description: 'description text',
		type: 'fire_station',
		icon: 'fa-fire-extinguisher',
		marker: { path: fontawesome.markers.FIRE_EXTINGUISHER,
								fillColor: '#e74c3c',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#ffffff',
								strokeWeight: 1 }
	},	
	{
		name: 'Groceries',
		description: 'description text',
		type: 'grocery_or_supermarket',
		icon: 'fa-shopping-cart',
		marker: { path: fontawesome.markers.SHOPPING_CART,
								fillColor: '#7f8c8d',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#ffffff',
								strokeWeight: 0.2 }
	},
	{
		name: 'Hairdressers',
		description: 'description text',
		type: 'hair_care',
		icon: 'fa-scissors',
		marker: { path: fontawesome.markers.SCISSORS,
								fillColor: '#e74c3c',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#ffffff',
								strokeWeight: 1 }
	},
	{
		name: 'Hospitals',
		description: 'description text',
		type: 'hospital',
		icon: 'fa-h-square',
		marker: { path: fontawesome.markers.H_SQUARE,
								fillColor: '#e74c3c',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#f9f9f9',
								strokeWeight: 1 }
	},
	{
		name: 'Jewelry Stores',
		description: 'description text',
		type: 'jewelry_store',
		icon: 'fa-diamond',
		marker: { path: fontawesome.markers.DIAMOND,
								fillColor: '#9b59b6',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#ffffff',
								strokeWeight: 1 }
	},
	{
		name: 'Lawyers',
		description: 'description text',
		type: 'lawyer',
		icon: 'fa-legal',
		marker: { path: fontawesome.markers.LEGAL,
								fillColor: '#404040',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#ffffff',
								strokeWeight: 1 }
	},
	{
		name: 'Locksmiths',
		description: 'description text',
		type: 'locksmith',
		icon: 'fa-key',
		marker: { path: fontawesome.markers.KEY,
								fillColor: '#404040',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#ffffff',
								strokeWeight: 1 }
	},
	{
		name: 'Lodgings',
		description: 'description text',
		type: 'lodging',
		icon: 'fa-bed',
		marker: { path: fontawesome.markers.HOTEL,
								fillColor: '#3A539B',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#f9f9f9',
								strokeWeight: 1 }
	},
	{
		name: 'Movie Theaters',
		description: 'description text',
		type: 'movie_theater',
		icon: 'fa-film',
		marker: { path: fontawesome.markers.FILM,
								fillColor: '#22313F',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#ffffff',
								strokeWeight: 0 }
	},
	{
		name: 'Moving Companies',
		description: 'description text',
		type: 'moving_company',
		icon: 'fa-truck',
		marker: { path: fontawesome.markers.TRUCK,
								fillColor: '#34495e',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#ffffff',
								strokeWeight: 1 }
	},
	{
		name: 'Night Clubs',
		description: 'description text',
		type: 'night_club',
		icon: 'fa-glass',
		marker: { path: fontawesome.markers.GLASS,
								fillColor: '#22313F',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#ffffff',
								strokeWeight: 0 }
	},
	{
		name: 'Parks',
		description: 'description text',
		type: 'park',
		icon: 'fa-tree',
		marker: { path: fontawesome.markers.TREE,
								fillColor: '#27ae60',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#ffffff',
								strokeWeight: 1 }
	},
	{
		name: 'Pharmacies',
		description: 'description text',
		type: 'pharmacy',
		icon: 'fa-medkit',
		marker: { path: fontawesome.markers.MEDKIT,
								fillColor: '#e74c3c',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#ffffff',
								strokeWeight: 0.4 }
	},
	{
		name: 'Restaurants',
		description: 'description text',
		type: 'restaurant',
		icon: 'fa-cutlery',
		marker: { path: fontawesome.markers.CUTLERY,
								fillColor: '#d35400',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#ffffff',
								strokeWeight: 1 }
	},
	{
		name: 'Subway Stations',
		description: 'description text',
		type: 'pharmacy',
		icon: 'fa-subway',
		marker: { path: fontawesome.markers.SUBWAY,
								fillColor: '#34495e',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#ffffff',
								strokeWeight: 1 }
	},
	{
		name: 'Taxi Stands',
		description: 'description text',
		type: 'taxi_stand',
		icon: 'fa-taxi',
		marker: { path: fontawesome.markers.TAXI,
								fillColor: '#34495e',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#ffffff',
								strokeWeight: 1 }
	},
	{
		name: 'Train Stations',
		description: 'description text',
		type: 'train_station',
		icon: 'fa-train',
		marker: { path: fontawesome.markers.TRAIN,
								fillColor: '#34495e',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#ffffff',
								strokeWeight: 1 }
	},
	{
		name: 'Travel Agencies',
		description: 'description text',
		type: 'travel_agency',
		icon: 'fa-map-signs',
		marker: { path: fontawesome.markers.MAP_SIGNS,
								fillColor: '#34495e',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#ffffff',
								strokeWeight: 1 }
	},
	{
		name: 'Universities',
		description: 'description text',
		type: 'university',
		icon: 'fa-mortar-board',
		marker: { path: fontawesome.markers.MORTAR_BOARD,
								fillColor: '#34495e',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#ffffff',
								strokeWeight: 1 }
	},
	{
		name: 'Vets',
		description: 'description text',
		type: 'veterinary_care',
		icon: 'fa-paw',
		marker: { path: fontawesome.markers.PAW,
								fillColor: '#966F33',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#ffffff',
								strokeWeight: 1 }
	}
]

// Foursquare Data
dataModel.foursquare = function(request) {

	var foursquareAPI = 'https://api.foursquare.com/v2/venues/search?ll='+request.venueLat+','+request.venueLng+'&query='+request.venueName+'&intent=match&client_id=T3NSPSCOLUQ5R0OGEZCKUX0MOEUOEPW1HGFXYOF3ZKCYDQXD&client_secret=J2LN1WHKPT2MAQAP3POZP1REU2AWLYGM3S24B0DSLHZNHKJR&v=20151230&m=foursquare';
	var response = {};

	$.ajax({
		url: foursquareAPI,
		async: false,
		dataType: 'json',
		success: function(data) {
			if (data.response.venues.length > 0) {
				response.name = data.response.venues[0]['name'];
				response.url = 'https://foursquare.com/v/'+data.response.venues[0]['id'];			
			}	else {
				response = false;
			}
		}
	});

	return response;

}

// Uber Data 
dataModel.uber = function(request) {

	var uberAPI = 'https://api.uber.com/v1/estimates/price';
	var uberClientId = 't4nJf4oEHYCwFZ_TvGsnIDc_raF7rFOn';
	var uberServerToken = 'YXPNrYuvPMqZT5LYF_xIWzjs-yxFQfCRSLbve56l';

	return Promise.resolve($.ajax({
		url: uberAPI,
		headers: {
			Authorization: "Token "	+ uberServerToken
		},
		data: {
			start_latitude: request.startLat,
			start_longitude: request.startLng,
			end_latitude: request.endLat,
			end_longitude: request.endLng
		}
	}));

}
