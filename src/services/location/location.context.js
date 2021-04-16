import React, { createContext, useState, useEffect } from 'react';
import { locationRequest, locationTransform } from './location.service';

export const LocationContext = createContext();

export const LocationContextProvider = (props) => {
	const [keyword, setKeyword] = useState('Slobozia');
	const [location, setLocation] = useState(null);

	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const onSearch = async (searchKeyword) => {
		setIsLoading(true);
		setKeyword(searchKeyword);
	};

	useEffect(() => {
		if (!keyword.length) return;

		locationRequest(keyword.toLowerCase().trim())
			.then(locationTransform)
			.then((result) => {
				setError(null);
				setIsLoading(false);
				setLocation(result);
			})
			.catch((err) => {
				console.log('locErr', err);
				
				setIsLoading(false);
				setError(err);
			});
	}, [keyword]);

	return (
		<LocationContext.Provider
			value={{ error, isLoading, location, search: onSearch, keyword }}
		>
			{props.children}
		</LocationContext.Provider>
	);
};
