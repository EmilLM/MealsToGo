import React, { useContext } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';


import { FavouritesContext } from '../../../services/favourites/favourites.context';
import RestaurantInfoCard from '../../restaurants/Info/RestaurantInfoCard';
import { EmptyFavContainer} from './favourites.styles';
import Text from '../text/Text';

const FavouritesScreen = ({navigation}) => {
	const { favourites } = useContext(FavouritesContext);

	if (favourites.length)
		return (
			<FlatList
					data={favourites}
					renderItem={({ item }) => {
						return (
							<TouchableOpacity
								onPress={() =>
									navigation.navigate('RestaurantDetails', {
										restaurant: item,
									})
								}
							>
								<RestaurantInfoCard restaurant={item} />
							</TouchableOpacity>
						);
					}}
					keyExtractor={(item) => item.placeId}
					contentContainerStyle={{ padding: 16 }}
				/>
		);
	return (
		<EmptyFavContainer>
			<Text variant='favLabel'>Your favourites list is empty!</Text>
		</EmptyFavContainer>
	);
};

export default FavouritesScreen;
