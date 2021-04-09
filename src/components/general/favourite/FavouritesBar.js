import React, { useContext } from 'react';
import { FavouritesContext } from '../../../services/favourites/favourites.context';
import { ScrollView, TouchableOpacity } from 'react-native';
import CompactRestInfo from '../../map/callout/CompactRestInfo';
import Text from '../text/Text';
import {FavouritesWrapper, EmptyFavContainer} from './favourites.styles'


const FavouritesBar = ({ navigation }) => {
	const { favourites } = useContext(FavouritesContext);
	const hasFavourites = favourites.length > 0;

	return (
		<FavouritesWrapper>
			<Text variant='favLabel'>Favourites</Text>
			{hasFavourites ? (
				<ScrollView
					horizontal
					showsHorizontalScrollIndicator={false}
					style={{ marginLeft: 8, marginRight: 5}}
				>
					{favourites.map((restaurant) => {
						return (
							<TouchableOpacity
								key={restaurant.name}
								onPress={() =>
									navigation.navigate('RestaurantDetails', { restaurant })
								}
							>
								<CompactRestInfo restaurant={restaurant} />
							</TouchableOpacity>
						);
					})}
				</ScrollView>
			) : (
				<EmptyFavContainer>
					<Text variant='caption'>Your favourites list is empty!</Text>
				</EmptyFavContainer>
			)}
		</FavouritesWrapper>
	);
};

export default FavouritesBar;
