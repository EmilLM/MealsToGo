import React, { useState, useEffect, createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FavouritesContext = createContext();

export const FavouritesContextProvider = (props) => {
	const [favourites, setFavourites] = useState([]);

	const addFavourite = (restaurant) => {
		setFavourites([...favourites, restaurant]);
	};

	const removeFavourite = (restaurant) => {
		const remainingFavourites = favourites.filter(
			(item) => item.placeId != restaurant.placeId
		);
		setFavourites(remainingFavourites);
	};

	const saveFavourites = async (favs) => {
		try {
			const jsonValue = JSON.stringify(favs);
			await AsyncStorage.setItem('@Favourites', jsonValue);
		} catch (e) {
			console.log('saving Favs', e);
		}
	};

	const loadFavourites = async () => {
		try {
			const value = await AsyncStorage.getItem('@Favourites');
			if (value !== null) {
				setFavourites(JSON.parse(value));
			}
		} catch (e) {
			console.log('loading Favs', e);
		}
	};
	useEffect(() => {
		loadFavourites();
	}, []);
	
	useEffect(() => {
		saveFavourites(favourites);
	}, [favourites]);

	return (
		<FavouritesContext.Provider
			value={{ favourites, addFavourite, removeFavourite }}
		>
			{props.children}
		</FavouritesContext.Provider>
	);
};
