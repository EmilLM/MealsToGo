import React, { useState, useContext } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';

import RestaurantInfoCard from '../Info/RestaurantInfoCard';
import SafeArea from '../../general/safe-area/SafeArea';
import Loader from '../../general/loader/Loader';
import Search from '../Search/Search';
import FavouritesBar from '../../general/favourite/FavouritesBar';
import FadeIn from '../../animations/fade.animation';
import Text from '../../general/text/Text';

import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import { LocationContext } from '../../../services/location/location.context';

export default function RestaurantScreen({ navigation }) {
	const { restaurants, isLoading, error } = useContext(RestaurantsContext);
	const { error: locError } = useContext(LocationContext);
	const [isToggled, setIsToggled] = useState(false);
	const hasError = !!error || !!locError;
	return (
		<SafeArea>
			{isLoading && <Loader/>}
			<Search
				onFavouritesToggle={() => setIsToggled(!isToggled)}
				isFavouritesToggled={isToggled}
			/>
			{isToggled && <FavouritesBar navigation={navigation} />}
			{hasError && <Text variant='error'>Something went wrong!</Text>}
			{/* dont show restaurants on error */}
			{!hasError && <FlatList
				data={restaurants}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity
							onPress={() =>
								navigation.navigate('RestaurantDetails', {
									restaurant: item,
								})
							}
						>
							<FadeIn>
								<RestaurantInfoCard restaurant={item} />
							</FadeIn>
						</TouchableOpacity>
					);
				}}
				keyExtractor={(item) => item.placeId}
				contentContainerStyle={{ padding: 16 }}
			/>}
		</SafeArea>
	);
}
