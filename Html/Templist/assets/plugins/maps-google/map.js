$(function(e) {
	$("#map").googleMap({
		zoom: 5,
		coords: [37.089462, -95.710452],
		type: "ROADMAP"
	});
})
$(function(e) {
	$("#map2").googleMap();
	$("#map2").addMarker({
		coords: [51.507351, -0.127758],
		title: 'Marker n°1',
		text: '<b>Lorem ipsum</b> dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	});
})
$(function(e) {
	$("#map3").googleMap();
	$("#map3").addMarker({
		coords: [51.534287, -0.033580]
	});
	$("#map3").addMarker({
		coords: [51.507351, -0.127758]
	});
	$("#map3").addMarker({
		coords: [37.089462, -95.710452]
	});
})
$(function(e) {
	$("#map4").googleMap();
	$("#map4").addWay({
		start: "15 avenue des champs Elysées 75008 Paris",
		end: [48.895651, 2.290569],
		route: 'way',
		langage: 'english',
		step: [
			[48.85837009999999, 2.2944813000000295],
			"Porte Maillot, 75017 Paris",
		]
	});
})
$(function(e) {
	$("#map5").googleMap();
	$("#map5").addWay({
		start: "15 avenue des champs Elysées 75008 Paris",
		end: [50.0875726, 14.4189987],
		route: 'way',
		langage: 'english',
		step: [
			[48.85837009999999, 2.2944813000000295],
			"Porte Maillot, 75017 Paris",
		]
	});
})