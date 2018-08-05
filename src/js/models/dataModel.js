/**
 * @file Data Model
 * @version 1.0
 * @author Mike Joyce [hello@mikejoyce.io]
 */

/**
 * Data Model
 * @type {Object}
 */
var dataModel = {};

/**
 * ES6 Promises Polyfill
 * @type {object}
 * @external 'ES6Promise.Promise;'
 * @see {@link https://github.com/jakearchibald/es6-promise}
 */
var Promise = Promise || ES6Promise.Promise;

/**
 * Places Array
 * @type {Array.<Object>}
 */
dataModel.places = [
	{

		/**
		 * Place Name
		 * @type {String}
		 */
		name: 'Airports',

		/**
		 * Place Description
		 * @type {String}
		 */
		description: 'description',

		/**
		 * Place Type. Set to a supported value for the types property in the Google Places API
		 * @type {String}
		 * @see {@link https://developers.google.com/places/supported_types}
		 */
		type: 'airport',

		/**
		 * Place Icon. Set to a Font Awesome CSS class.
		 * @type {String}
		 * @see {@link https://fortawesome.github.io/Font-Awesome/icons/}
		 */
		icon: 'fa-plane',

		/**
		 * Marker Icon. Set to Font Awesome SVG marker.
		 * @type {Object}
		 * @see {@link https://github.com/mikejoyceio/fontawesome-markers}
		 */
		marker: { path: fontawesome.markers.PLANE,
								fillColor: '#2c3e50',
								fillOpacity: 1,
								scale: 0.31,
								strokeColor: '#ffffff',
								strokeWeight: 1 }
	},
	{
		name: 'Amusement Parks',
		description: 'description',
		type: 'amusement_park',
		icon: 'fa-ticket',
		marker: { path: fontawesome.markers.TICKET,
								fillColor: '#2c3e50',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#ffffff',
								strokeWeight: 0.5 }
	},
	{
		name: 'Art Galleries',
		description: 'description',
		type: 'art_gallery',
		icon: 'fa-paint-brush',
		marker: { path: fontawesome.markers.PAINT_BRUSH,
								fillColor: '#2c3e50',
								fillOpacity: 1,
								scale: 0.28,
								strokeColor: '#ffffff',
								strokeWeight: 0.5 }
	},
	{
		name: 'ATMs',
		description: 'description',
		type: 'atm',
		icon: 'fa-credit-card',
		marker: { path: fontawesome.markers.CREDIT_CARD,
								fillColor: '#2c3e50',
								fillOpacity: 1,
								scale: 0.28,
								strokeColor: '#ffffff',
								strokeWeight: 0.1 }
	},
	{
		name: 'Banks',
		description: 'description',
		type: 'bank',
		icon: 'fa-university',
		marker: { path: fontawesome.markers.UNIVERSITY,
								fillColor: '#2c3e50',
								fillOpacity: 1,
								scale: 0.28,
								strokeColor: '#ffffff',
								strokeWeight: 0.5 }
	},
	{
		name: 'Bars',
		description: 'description',
		type: 'bar',
		icon: 'fa-beer',
		marker: { path: fontawesome.markers.BEER,
								fillColor: '#966F33',
								fillOpacity: 1,
								scale: 0.28,
								strokeColor: '#ffffff',
								strokeWeight: 1 }
	},
	{
		name: 'Bicycle Stores',
		description: 'description',
		type: 'bicycle_store',
		icon: 'fa-bicycle',
		marker: { path: fontawesome.markers.BICYCLE,
								fillColor: '#2c3e50',
								fillOpacity: 1,
								scale: 0.35,
								strokeColor: '#ffffff',
								strokeWeight: 0.5 }
	},
	{
		name: 'Book Stores',
		description: 'description',
		type: 'book_store',
		icon: 'fa-book',
		marker: { path: fontawesome.markers.BOOK,
								fillColor: '#966F33',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#ffffff',
								strokeWeight: 0.3 }
	},
	{
		name: 'Bus Stations',
		description: 'description',
		type: 'bus_station',
		icon: 'fa-bus',
		marker: { path: fontawesome.markers.BUS,
								fillColor: '#2c3e50',
								fillOpacity: 1,
								scale: 0.28,
								strokeColor: '#ffffff',
								strokeWeight: 0.5 }
	},
	{
		name: 'Cafes',
		description: 'description',
		type: 'cafe',
		icon: 'fa-coffee',
		marker: { path: fontawesome.markers.COFFEE,
								fillColor: '#966F33',
								fillOpacity: 1,
								scale: 0.28,
								strokeColor: '#ffffff',
								strokeWeight: 1 }
	},
	{
		name: 'Car Parks',
		description: 'description',
		type: 'parking',
		icon: 'fa-car',
		marker: { path: fontawesome.markers.CAR,
								fillColor: '#2c3e50',
								fillOpacity: 1,
								scale: 0.28,
								strokeColor: '#ffffff',
								strokeWeight: 1 }
	},
	{
		name: 'Car Repair',
		description: 'description',
		type: 'car_repair',
		icon: 'fa-wrench',
		marker: { path: fontawesome.markers.WRENCH,
								fillColor: '#7f8c8d',
								fillOpacity: 1,
								scale: 0.34,
								strokeColor: '#ffffff',
								strokeWeight: 1 }
	},
	{
		name: 'Car Washes',
		description: 'description',
		type: 'car_wash',
		icon: 'fa-tint',
		marker: { path: fontawesome.markers.TINT,
								fillColor: '#2980b9',
								fillOpacity: 1,
								scale: 0.28,
								strokeColor: '#ffffff',
								strokeWeight: 1 }
	},
	{
		name: 'Department Stores',
		description: 'description',
		type: 'department_store',
		icon: 'fa-building-o',
		marker: { path: fontawesome.markers.BUILDING_O,
								fillColor: '#95a5a6',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#ffffff',
								strokeWeight: 0 }
	},
	{
		name: 'Doctors',
		description: 'description',
		type: 'doctor',
		icon: 'fa-stethoscope',
		marker: { path: fontawesome.markers.STETHOSCOPE,
								fillColor: '#e74c3c',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#ffffff',
								strokeWeight: 0.1 }
	},
	{
		name: 'Electricians',
		description: 'description',
		type: 'electrician',
		icon: 'fa-flash',
		marker: { path: fontawesome.markers.FLASH,
								fillColor: '#f1c40f',
								fillOpacity: 1,
								scale: 0.32,
								strokeColor: '#ffffff',
								strokeWeight: 0.1 }
	},
	{
		name: 'Electronic Stores',
		description: 'description',
		type: 'electronics_store',
		icon: 'fa-laptop',
		marker: { path: fontawesome.markers.LAPTOP,
								fillColor: '#2c3e50',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#ffffff',
								strokeWeight: 0.1 }
	},
	{
		name: 'Fire Stations',
		description: 'description',
		type: 'fire_station',
		icon: 'fa-fire-extinguisher',
		marker: { path: fontawesome.markers.FIRE_EXTINGUISHER,
								fillColor: '#e74c3c',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#ffffff',
								strokeWeight: 0.5 }
	},
	{
		name: 'Groceries',
		description: 'description',
		type: 'grocery_or_supermarket',
		icon: 'fa-shopping-cart',
		marker: { path: fontawesome.markers.SHOPPING_CART,
								fillColor: '#95a5a6',
								fillOpacity: 1,
								scale: 0.28,
								strokeColor: '#ffffff',
								strokeWeight: 0.1 }
	},
	{
		name: 'Hairdressers',
		description: 'description',
		type: 'hair_care',
		icon: 'fa-scissors',
		marker: { path: fontawesome.markers.SCISSORS,
								fillColor: '#2c3e50',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#ffffff',
								strokeWeight: 0.1 }
	},
	{
		name: 'Hospitals',
		description: 'description',
		type: 'hospital',
		icon: 'fa-h-square',
		marker: { path: fontawesome.markers.H_SQUARE,
								fillColor: '#e74c3c',
								fillOpacity: 1,
								scale: 0.28,
								strokeColor: '#ffffff',
								strokeWeight: 0.1 }
	},
	{
		name: 'Jewelry Stores',
		description: 'description',
		type: 'jewelry_store',
		icon: 'fa-diamond',
		marker: { path: fontawesome.markers.DIAMOND,
								fillColor: '#8e44ad',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#ffffff',
								strokeWeight: 0.1 }
	},
	{
		name: 'Lawyers',
		description: 'description',
		type: 'lawyer',
		icon: 'fa-legal',
		marker: { path: fontawesome.markers.LEGAL,
								fillColor: '#966F33',
								fillOpacity: 1,
								scale: 0.28,
								strokeColor: '#ffffff',
								strokeWeight: 0.1 }
	},
	{
		name: 'Locksmiths',
		description: 'description',
		type: 'locksmith',
		icon: 'fa-key',
		marker: { path: fontawesome.markers.KEY,
								fillColor: '#2c3e50',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#ffffff',
								strokeWeight: 0.1 }
	},
	{
		name: 'Lodgings',
		description: 'description',
		type: 'lodging',
		icon: 'fa-bed',
		marker: { path: fontawesome.markers.HOTEL,
								fillColor: '#2c3e50',
								fillOpacity: 1,
								scale: 0.27,
								strokeColor: '#ffffff',
								strokeWeight: 0.1 }
	},
	{
		name: 'Movie Theaters',
		description: 'description',
		type: 'movie_theater',
		icon: 'fa-film',
		marker: { path: fontawesome.markers.FILM,
								fillColor: '#2c3e50',
								fillOpacity: 1,
								scale: 0.28,
								strokeColor: '#ffffff',
								strokeWeight: 0.1 }
	},
	{
		name: 'Moving Companies',
		description: 'description',
		type: 'moving_company',
		icon: 'fa-truck',
		marker: { path: fontawesome.markers.TRUCK,
								fillColor: '#2c3e50',
								fillOpacity: 1,
								scale: 0.28,
								strokeColor: '#ffffff',
								strokeWeight: 0.1 }
	},
	{
		name: 'Night Clubs',
		description: 'description',
		type: 'night_club',
		icon: 'fa-glass',
		marker: { path: fontawesome.markers.GLASS,
								fillColor: '#2c3e50',
								fillOpacity: 1,
								scale: 0.27,
								strokeColor: '#ffffff',
								strokeWeight: 0.1 }
	},
	{
		name: 'Parks',
		description: 'description',
		type: 'park',
		icon: 'fa-tree',
		marker: { path: fontawesome.markers.TREE,
								fillColor: '#27ae60',
								fillOpacity: 1,
								scale: 0.28,
								strokeColor: '#ffffff',
								strokeWeight: 0.1 }
	},
	{
		name: 'Pharmacies',
		description: 'description',
		type: 'pharmacy',
		icon: 'fa-medkit',
		marker: { path: fontawesome.markers.MEDKIT,
								fillColor: '#e74c3c',
								fillOpacity: 1,
								scale: 0.28,
								strokeColor: '#ffffff',
								strokeWeight: 0.1 }
	},
	{
		name: 'Restaurants',
		description: 'description',
		type: 'restaurant',
		icon: 'fa-cutlery',
		marker: { path: fontawesome.markers.CUTLERY,
								fillColor: '#7f8c8d',
								fillOpacity: 1,
								scale: 0.28,
								strokeColor: '#ffffff',
								strokeWeight: 0.1 }
	},
	{
		name: 'Stadiums',
		description: 'description',
		type: 'stadium',
		icon: 'fa-trophy',
		marker: { path: fontawesome.markers.TROPHY,
								fillColor: '#34495e',
								fillOpacity: 1,
								scale: 0.27,
								strokeColor: '#ffffff',
								strokeWeight: 0.1 }
	},
	{
		name: 'Subway Stations',
		description: 'description',
		type: 'pharmacy',
		icon: 'fa-subway',
		marker: { path: fontawesome.markers.SUBWAY,
								fillColor: '#2c3e50',
								fillOpacity: 1,
								scale: 0.28,
								strokeColor: '#ffffff',
								strokeWeight: 0.1 }
	},
	{
		name: 'Taxi Stands',
		description: 'description',
		type: 'taxi_stand',
		icon: 'fa-taxi',
		marker: { path: fontawesome.markers.TAXI,
								fillColor: '#2c3e50',
								fillOpacity: 1,
								scale: 0.28,
								strokeColor: '#ffffff',
								strokeWeight: 0.1 }
	},
	{
		name: 'Train Stations',
		description: 'description',
		type: 'train_station',
		icon: 'fa-train',
		marker: { path: fontawesome.markers.TRAIN,
								fillColor: '#2c3e50',
								fillOpacity: 1,
								scale: 0.28,
								strokeColor: '#ffffff',
								strokeWeight: 0.1 }
	},
	{
		name: 'Travel Agencies',
		description: 'description',
		type: 'travel_agency',
		icon: 'fa-map-signs',
		marker: { path: fontawesome.markers.MAP_SIGNS,
								fillColor: '#966F33',
								fillOpacity: 1,
								scale: 0.28,
								strokeColor: '#ffffff',
								strokeWeight: 0.1 }
	},
	{
		name: 'Universities',
		description: 'description',
		type: 'university',
		icon: 'fa-mortar-board',
		marker: { path: fontawesome.markers.MORTAR_BOARD,
								fillColor: '#2c3e50',
								fillOpacity: 1,
								scale: 0.28,
								strokeColor: '#ffffff',
								strokeWeight: 0.1 }
	},
	{
		name: 'Vets',
		description: 'description',
		type: 'veterinary_care',
		icon: 'fa-paw',
		marker: { path: fontawesome.markers.PAW,
								fillColor: '#966F33',
								fillOpacity: 1,
								scale: 0.28,
								strokeColor: '#ffffff',
								strokeWeight: 0.1 }
	}
]

/**
 * Foursquare API Request
 * @param  {Object} request
 * @return {Object}
 */
dataModel.foursquare = function(request) {

	/**
	 * Foursquare API URL
	 * @type {String}
	 * @see {@link https://developer.foursquare.com/docs/venues/search}
	 */
	var foursquareAPI = 'https://api.foursquare.com/v2/venues/search';

	/**
	 * Return
	 * @external 'Promise.resolve'
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve}
	 * @external '$.ajax'
	 * @see {@link http://api.jquery.com/jquery.ajax/}
	 */
	return Promise.resolve($.ajax({
		url: foursquareAPI,
		dataType: 'json',
		data: {
			ll: request.venueLat+','+request.venueLng,
			query: request.venueName,
			intent: 'match',
			client_id: 'T3NSPSCOLUQ5R0OGEZCKUX0MOEUOEPW1HGFXYOF3ZKCYDQXD',
			client_secret: 'J2LN1WHKPT2MAQAP3POZP1REU2AWLYGM3S24B0DSLHZNHKJR',
			v: '20151230',
			m: 'foursquare'
		}
	}));

}

/**
 * Uber API Request
 * @param  {Object} request
 * @return {Object}
 */
dataModel.uber = function(request) {

	/**
	 * Uber API URL
	 * @type {String}
	 * @see {@link https://developer.uber.com/v1/endpoints/}
	 */
	var uberAPI = 'https://api.uber.com/v1/estimates/price';
	var uberClientId = 'sF0uXRb14_xpSGdnNlfl8KgOVSgt6IXt';
	var uberServerToken = 'AKvxnyDLDHBO86RoOC0vcMNTByH1BRHDgerhfNmh';

	/**
	 * Return
	 * @external 'Promise.resolve'
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve}
	 * @external '$.ajax'
	 * @see {@link http://api.jquery.com/jquery.ajax/}
	 */
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

/**
 * Get Local Storage Value
 * @param  {string} item Name of the item
 * @return {string}
 * @external 'localStorage.getItem()'
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem}
 */
dataModel.get = function(item) {
	return localStorage.getItem(item);
}

/**
 * Set Local Storage value
 * @param {string} item Name of the item
 * @param {string} value Value of the item
 * @external 'localStorage.setItem()'
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem}
 */
dataModel.set = function(item, value) {
	localStorage.setItem(item, value);
}
