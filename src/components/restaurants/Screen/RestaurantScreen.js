import React, { useState, useContext } from 'react';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import { FlatList, TouchableOpacity } from 'react-native';

import RestaurantInfoCard from '../Info/RestaurantInfoCard';
import SafeArea from '../../general/safe-area/SafeArea';
import Loader from '../../general/loader/Loader';
import Search from '../Search/Search';
import FavouritesBar from '../../general/favourite/FavouritesBar';
import FadeIn from '../../animations/fade.animation';

export default function RestaurantScreen({ navigation }) {
	const { restaurants, isLoading } = useContext(RestaurantsContext);
	const [isToggled, setIsToggled] = useState(false);
	return (
		<SafeArea>
				<Search
					onFavouritesToggle={() => setIsToggled(!isToggled)}
					isFavouritesToggled={isToggled}
				/>
			{isToggled && <FavouritesBar navigation={navigation} />}
			{restaurants.length ? (
				<FlatList
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
					keyExtractor={(item) => item.name}
					contentContainerStyle={{ padding: 16 }}
				/>
			) : (
				<Loader />
			)}
		</SafeArea>
	);
}
