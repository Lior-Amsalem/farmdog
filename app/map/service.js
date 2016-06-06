angular.module('mapApp.services', []).
    factory('MapDataService', function($http) {

    	// for later use - once we have route api
        // $http.get('data.json').success(function(response) {
        //     MapDataService.data = response;
        // });

        return { data: [
			[
				{lat: -82.468915, lng: 29.558116},
				{lat: -82.461748, lng: 29.558041},
				{lat: -82.461963, lng: 29.554606},
				{lat: -82.468915, lng: 29.554756}
			],
			[
				{lat: -82.461190, lng: 29.556249},
				{lat: -82.456641, lng: 29.556212},
				{lat: -82.456512, lng: 29.551359},
				{lat: -82.458787, lng: 29.551433},
				{lat: -82.461534, lng: 29.550911}
			],
			[
				{lat: -82.456255, lng: 29.554644},
				{lat: -82.451663, lng: 29.554756},
				{lat: -82.451062, lng: 29.551695},
				{lat: -82.456169, lng: 29.551396}
			]
		]};
    }
);