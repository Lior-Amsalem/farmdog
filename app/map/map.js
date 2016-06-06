'use strict';

angular.module('mapApp.map', ['ngRoute', 'ngMap', 'mapApp.panel'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/map', {
    templateUrl: 'map/map.html',
    controller: 'MapCtrl'
  });
}])

						// define dependencies in a non breakable manner (due to uglify and mangle)
.controller('MapCtrl', ['NgMap', 'MapDataService', function(NgMap, MapDataService) {
	var vm = this;

	// get data, and expose the data
	vm.paths = MapDataService.data;

	// default, hide the panel
	vm.is_panel_visible = false;

	/**
	 * [mouseover function that changes the polygon - public function]
	 */
	vm.mouseover = function() {
		this.setOptions({fillOpacity: 0.6, strokeWeight: 1});
	}

	/**
	 * [mouseout function that undo the changes to the polygon - public function]
	 */
	vm.mouseout = function() {
		this.setOptions({fillOpacity: 0.9, strokeWeight: 0.5});
	}

	/**
	 * [click event that trigger the panel - public function]
	 */
	vm.set_panel_mode = function(show_panel) {
		vm.is_panel_visible = show_panel;

		// set the data if we want to show the panel
		if (show_panel) {
			vm.current_polygon_panel_data = this.getPath();
		} else {
			// reset out data object in case we want to hide the panel
			vm.current_polygon_panel_data = {};
		}
	}

  	NgMap.getMap().then(initMap);

	/**
	* [Initialize the map - private function]
	* @param  {[type]} map [Map intances that comes from promise]
	*/
	function initMap(map) {
		// set the styles - should be inside external file
		map.set('styles', [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]);

		/**
		 * - There are few options to output the polygons, via the view or here from the controller.
		 * - I prefered to do it via the view with ng-repeat (see: map.html file)
		 */
		// initPolygons(map);
	}









	/**
	 * ========================================================
	 * Another option to render the polygon via the controller
	 * ========================================================
	 */
	/**
	 * [Initialize the polygons - private function]
	 * @param  {[type]} map [Intance of google map]
	 */
	function initPolygons(map) {
		// due to hoisting define vars at the top and initialize wheneverwe need to
		var data = MapDataService.data,
			polygon;

		for (var i = 0; i < data.length; i++ ){

			// Construct polygon
			polygon = new google.maps.Polygon({
				paths: data[i],
				strokeColor: '#d3641f',
				strokeWeight: 0.5,
				fillColor: '#F77723',
				fillOpacity: 0.9
			});

			polygon.setMap(map);

			bindEventsToMap(polygon);
		}
	}

	/**
	 * [attach events to the polygons - private function]
	 * @param  {[type]} polygon [the polygon context]
	 */
	function bindEventsToMap(polygon) {
		// set polygon mouse over: - todo:get it to work per polygon
		google.maps.event.addListener(polygon, "mouseover", function(){
				this.setOptions({fillOpacity: 0.6, strokeWeight: 1});
		});

		google.maps.event.addListener(polygon, "mouseout", function(){
				this.setOptions({fillOpacity: 0.9, strokeWeight: 0.5});
		});
	}
}]);