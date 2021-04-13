import {host} from '../../utils/env';

import camelize from 'camelize';

export const restaurantsRequest = (location) => {

	return fetch(
		`${host}/placesNearby?location=${location}`
	  ).then((res) => {
		//   console.log('restReq', res)
		return res.json();
	  })
};

export const restaurantsTransform = ({ results = [] }) => {
	const mappedResults = results.map((restaurant) => {
		
		return {
			...restaurant,
			info: 'Italian restaurant and bar',
			address: restaurant.vicinity.split(',')[0],
			isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
			isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
		};
	});

	return camelize(mappedResults);
};
