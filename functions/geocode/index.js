const { locations: locationsMock } = require('./geocode.mock');

module.exports.geocodeRequest = (request, response, client) => {
	const { city } = request.query;
	const locationMock = locationsMock[city.toLowerCase()];
	console.log('cityParam', city);
	response.json(locationMock);
};
