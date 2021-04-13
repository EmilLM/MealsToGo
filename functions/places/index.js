const { mocks, addMockImage } = require('./mock');


module.exports.placesRequest = (request, response) => {
	const { location } = request.query
	console.log('locParam', location)
	const data = mocks[location];
    if (data) data.results = data.results.map(addMockImage);
	response.json(data)
};
