import { useLinkProps } from '@react-navigation/native';
import React, { useState, createContext, useEffect, useMemo } from 'react';
import {
	restaurantsRequest,
	restaurantsTransform,
} from './restaurants.service';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = (props) => {
	const [restaurants, setRestaurants] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const retrieveRestaurants = () => {
		setIsLoading(true);
		setTimeout(() => {
			restaurantsRequest()
				.then(restaurantsTransform)
				.then((res) => {
					setRestaurants(res);
					setIsLoading(false);
				})
				.catch((err) => {
					setError(err);
					setIsLoading(false);
				});
		}, 2000);
	};
	useEffect(() => {
		retrieveRestaurants();
	}, []);

	return (
		<RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
			{props.children}
		</RestaurantsContext.Provider>
	);
};
