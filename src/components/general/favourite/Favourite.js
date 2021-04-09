import React, { useContext } from 'react';
import { FavouritesContext } from '../../../services/favourites/favourites.context';
import { AntDesign } from '@expo/vector-icons';
import {FavouriteButton} from './favourites.styles'

const Favourite = ({ restaurant }) => {
	const { favourites, addFavourite, removeFavourite } = useContext(
		FavouritesContext
	);
	const isFavourite = favourites.find((r) => r.placeId === restaurant.placeId);
	return (
		<FavouriteButton
			onPress={() =>
				!isFavourite ? addFavourite(restaurant) : removeFavourite(restaurant)
			}
		>
			<AntDesign
				name={isFavourite ? 'heart' : 'hearto'}
				size={30}
				color={isFavourite ? 'red' : 'gray'}
			/>
		</FavouriteButton>
	);
};

export default Favourite;
