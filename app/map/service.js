angular.module('mapApp.services', []).
    factory('MapDataService', function($http) {

    	// for later use - once we have route api
        // $http.get('data.json').success(function(response) {
        //     MapDataService.data = response;
        // });

        return { data: [
			[
				{lng: -82.468915, lat: 29.558116},
				{lng: -82.461748, lat: 29.558041},
				{lng: -82.461963, lat: 29.554606},
				{lng: -82.468915, lat: 29.554756}
			],
			[
				{lng: -82.461190, lat: 29.556249},
				{lng: -82.456641, lat: 29.556212},
				{lng: -82.456512, lat: 29.551359},
				{lng: -82.458787, lat: 29.551433},
				{lng: -82.461534, lat: 29.550911}
			],
			[
				{lng: -82.456255, lat: 29.554644},
				{lng: -82.451663, lat: 29.554756},
				{lng: -82.451062, lat: 29.551695},
				{lng: -82.456169, lat: 29.551396}
			]
		]};
    }
);