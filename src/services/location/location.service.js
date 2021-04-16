import camelize from 'camelize';
import axios from 'axios';
import {GOOGLE_KEY} from '../../../config.env'

const api = {
	geocode: 'https://maps.googleapis.com/maps/api/geocode/json?address=',
	key: GOOGLE_KEY,
};

export const locationRequest = async (searchTerm) => {
	const { geocode, key } = api;
	const res = await axios.get(geocode + searchTerm + '&key=' + key);
	return res.data;
};

export const locationTransform = (result) => {
	const formattedResponse = camelize(result);
	const { geometry = {} } = formattedResponse.results[0];
	const { lat, lng } = geometry.location;
	console.log(lat, lng);

	return { lat, lng, viewport: geometry.viewport };
};
