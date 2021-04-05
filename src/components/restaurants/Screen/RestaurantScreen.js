import React, { useState, useContext } from 'react';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import { FlatList, TouchableOpacity } from 'react-native';

import RestaurantInfoCard from '../Info/RestaurantInfoCard';
import SafeArea from '../../general/safe-area/SafeArea';
import Loader from '../../general/loader/Loader';
import Search from '../Search/Search';

export default function RestaurantScreen({ navigation }) {
	const { restaurants, isLoading } = useContext(RestaurantsContext);
	return (
		<SafeArea>
			<Search />
			{!isLoading ? (
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
								<RestaurantInfoCard restaurant={item} />
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
