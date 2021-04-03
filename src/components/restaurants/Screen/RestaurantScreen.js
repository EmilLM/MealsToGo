import React, { useState, useContext } from 'react';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import { Searchbar } from 'react-native-paper';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';

import RestaurantInfoCard from '../Info/RestaurantInfoCard';
import SafeArea from '../../general/safe-area/SafeArea';
import Loader from '../../general/loader/Loader';
const SearchView = styled.View`
	padding: ${(props) => props.theme.sizes[3]};
`;

export default function App() {
	const [searchQuery, setSearchQuery] = useState('');
	const onChangeSearch = (query) => setSearchQuery(query);
	const { restaurants, isLoading } = useContext(RestaurantsContext);

	if (isLoading) return <Loader />;
	return (
		<SafeArea>
			<SearchView>
				<Searchbar
					placeholder='Search'
					onChangeText={onChangeSearch}
					value={searchQuery}
				/>
			</SearchView>
			<FlatList
				data={restaurants}
				renderItem={({ item }) => {
					return <RestaurantInfoCard restaurant={item} />;
				}}
				keyExtractor={(item) => item.name}
				contentContainerStyle={{ padding: 16 }}
			/>
		</SafeArea>
	);
}
