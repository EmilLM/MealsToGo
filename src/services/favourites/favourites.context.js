import React, { useState, useEffect,useContext, createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext} from '../auth/auth.context'

export const FavouritesContext = createContext();

export const FavouritesContextProvider = (props) => {
	const [favourites, setFavourites] = useState([]);
	const {user} = useContext(AuthContext);

	const addFavourite = (restaurant) => {
		setFavourites([...favourites, restaurant]);
	};

	const removeFavourite = (restaurant) => {
		const remainingFavourites = favourites.filter(
			(item) => item.placeId != restaurant.placeId
		);
		setFavourites(remainingFavourites);
	};

	const saveFavourites = async (favs, uid) => {
		try {
			const jsonValue = JSON.stringify(favs);
			await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue);
		} catch (e) {
			console.log('saving Favs', e);
		}
	};

	const loadFavourites = async (uid) => {
		try {
			const value = await AsyncStorage.getItem(`@favourites-${uid}`);
			if (value !== null) {
				setFavourites(JSON.parse(value));
				// setFavourites([]);
			}
		} catch (e) {
			console.log('loading Favs', e);
		}
	};

	useEffect(() => {
		if (user && user.uid) {
		  loadFavourites(user.uid);
		}
	  }, [user]);
	
	  useEffect(() => {
		if (user && user.uid && favourites.length) {
		  saveFavourites(favourites, user.uid);
		}
	  }, [favourites, user]);

	return (
		<FavouritesContext.Provider
			value={{ favourites, addFavourite, removeFavourite }}
		>
			{props.children}
		</FavouritesContext.Provider>
	);
};
