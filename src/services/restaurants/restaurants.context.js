import React, { useState, createContext, useContext, useEffect } from 'react';
import { LocationContext } from '../location/location.context';
import {
	restaurantsRequest,
	restaurantsTransform,
} from './restaurants.service';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = (props) => {
	const { location } = useContext(LocationContext);

	const [restaurants, setRestaurants] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const retrieveRestaurants = (loc) => {
		setIsLoading(true);
		setRestaurants([]);
		restaurantsRequest(loc)
			.then(restaurantsTransform)
			.then((res) => {
				setError(null);
				setRestaurants(res);
				setIsLoading(false);
			})
			.catch((err) => {
				console.log('rest err', err);
				setRestaurants([]);
				setError(err);
				setIsLoading(false);
			});
	};

	useEffect(() => {
		if (location) {
			const locationString = `${location.lat},${location.lng}`;
			retrieveRestaurants(locationString);
		  }
	}, [location]);

	return (
		<RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
			{props.children}
		</RestaurantsContext.Provider>
	);
};
