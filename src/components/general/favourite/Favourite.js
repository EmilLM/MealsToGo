import React, { useContext } from 'react';
import { FavouritesContext } from '../../../services/favourites/favourites.context';
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

const FavouriteButton = styled(TouchableOpacity)`
	position: absolute;
	top: 30px;
	right: 30px;
	z-index: 9;
`;

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
