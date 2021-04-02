import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Searchbar } from 'react-native-paper';
import RestaurantInfo from '../Info/RestaurantInfoCard';
import styled from 'styled-components/native';

const SafeArea = styled(SafeAreaView)`
	flex: 1;
`;
const SearchView = styled.View`
	padding: ${(props) => props.theme.sizes[3]};
`;

const ListView = styled.View`
	flex: 1;
	padding: ${(props) => props.theme.sizes[3]};
`;

export default function App() {
	const [searchQuery, setSearchQuery] = useState('');
	const onChangeSearch = (query) => setSearchQuery(query);

	return (
		<>
			<SafeArea>
				<SearchView>
					<Searchbar
						placeholder='Search'
						onChangeText={onChangeSearch}
						value={searchQuery}
					/>
				</SearchView>
				<ListView>
					<RestaurantInfo />
				</ListView>
			</SafeArea>
		</>
	);
}
