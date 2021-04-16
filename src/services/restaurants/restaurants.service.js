import axios from 'axios';
import { GOOGLE_KEY } from '../../../config.env';
import camelize from 'camelize';

import { addMockImage } from '../../utils/mocks/mockImages';

const api = {
	nearbySearch:
		'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=',
	key: GOOGLE_KEY,
	type: '&type=restaurant',
	radius: '&radius=1500',
};
const { nearbySearch, key, type, radius } = api;

// for googlle images or random mock images if restaurant has no photos
const addGoogleImage = (restaurant) => {
	if (!restaurant.photos) {
		addMockImage(restaurant);
		return restaurant;
	}
	const ref = restaurant.photos[0].photo_reference;
	restaurant.photos = [
		`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${ref}&key=${key}`,
	];
	return restaurant;
};

export const restaurantsRequest = async (location) => {
	try {
		const res = await axios(
			nearbySearch + location + type + radius + '&key=' + key
		);
		res.data.results = res.data.results.map(addMockImage);
		return res.data;
	} catch(e) {
		return e;
	}
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
