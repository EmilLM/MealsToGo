import React, { useContext } from 'react';
import { FavouritesContext } from '../../../services/favourites/favourites.context';
import styled from 'styled-components/native';
import { ScrollView, TouchableOpacity } from 'react-native';
import CompactRestInfo from '../../map/callout/CompactRestInfo';
import Text from '../text/Text';

const FavouritesWrapper = styled.View``;
const EmptyFavContainer = styled.View`
	padding: 10px;
	height: 120px;
	width: 100%;
	align-items: center;
	justify-content: center;
`;

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
					<Text variant='body'>Your favourites list is empty!</Text>
				</EmptyFavContainer>
			)}
		</FavouritesWrapper>
	);
};

export default FavouritesBar;
