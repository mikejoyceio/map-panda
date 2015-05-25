
// Data Model
var placesData = [
	{
		name: 'Cafes',
		description: 'description text',
		type: 'cafe', 
		icon: 'fa-star',
		marker: { path: fontawesome.markers.EXCLAMATION_CIRCLE,
								fillColor: '#ffff00',
								fillOpacity: 1,
								scale: 1/4,
								strokeColor: '#bd8d2c',
								strokeWeight: 1}
	},
	{
		name: 'Food',
		description: 'description text',
		type: 'food',
		icon: 'fa-plane',
		marker: { path: 'M 0,-24 6,-7 24,-7 10,4 15,21 0,11 -15,21 -10,4 -24,-7 -6,-7 z',
								fillColor: '#ffff00',
								fillOpacity: 1,
								scale: 1/4,
								strokeColor: '#bd8d2c',
								strokeWeight: 1}
	},
	{
		name: 'Bars',
		description: 'description text',
		type: 'bar',
		icon: 'fa-hospital-o',
		marker: { path: 'M 0,-24 6,-7 24,-7 10,4 15,21 0,11 -15,21 -10,4 -24,-7 -6,-7 z',
								fillColor: '#ffff00',
								fillOpacity: 1,
								scale: 1/4,
								strokeColor: '#bd8d2c',
								strokeWeight: 1}
	},
	{
		name: 'Takeaways',
		description: 'description text',
		type: 'meal_takeaway',
		icon: 'fa-beer',
		marker: { path: 'M 0,-24 6,-7 24,-7 10,4 15,21 0,11 -15,21 -10,4 -24,-7 -6,-7 z',
								fillColor: '#ffff00',
								fillOpacity: 1,
								scale: 1/4,
								strokeColor: '#bd8d2c',
								strokeWeight: 1}
	},
	{
		name: 'Food Delivery',
		description: 'description text',
		type: 'meal_delivery',
		icon: 'fa-bicycle',
		marker: { path: 'M 0,-24 6,-7 24,-7 10,4 15,21 0,11 -15,21 -10,4 -24,-7 -6,-7 z',
								fillColor: '#ffff00',
								fillOpacity: 1,
								scale: 1/4,
								strokeColor: '#bd8d2c',
								strokeWeight: 1}
	},
	{
		name: 'Grocery Stores',
		description: 'description text',
		type: 'grocery_or_supermarket',
		icon: 'fa-bus',
		marker: { path: 'M 0,-24 6,-7 24,-7 10,4 15,21 0,11 -15,21 -10,4 -24,-7 -6,-7 z',
								fillColor: '#ffff00',
								fillOpacity: 1,
								scale: 1/4,
								strokeColor: '#bd8d2c',
								strokeWeight: 1}
	}
]