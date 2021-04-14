import React, { useState, useEffect, useContext } from 'react';
import MapView from 'react-native-maps';
import SafeArea from '../../general/safe-area/SafeArea';
import styled from 'styled-components/native';
import MapSearch from '../search/MapSearch';
import CompactRestInfo from '../callout/CompactRestInfo';
import { LocationContext } from '../../../services/location/location.context';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';

const Map = styled(MapView)`
	height: 100%;
	width: 100%;
`;

const RestaurantMap = ({ navigation }) => {
	const { location } = useContext(LocationContext);
	const { restaurants } = useContext(RestaurantsContext);
	const [latDelta, setLatDelta] = useState(0);

	const { viewport, lat, lng } = location;

	useEffect(() => {
		const northeastLat = viewport.northeast.lat;
		const southwestLat = viewport.southwest.lat;
		setLatDelta(northeastLat - southwestLat);
	}, [location, viewport]);

	return (
		<>
			<MapSearch />
			<Map
				region={{
					latitude: lat,
					longitude: lng,
					latitudeDelta: latDelta,
					longitudeDelta: 0.02,
				}}
			>
				{restaurants.map((restaurant) => {
					return (
						<MapView.Marker
							key={restaurant.name}
							coordinate={{
								latitude: restaurant.geometry.location.lat,
								longitude: restaurant.geometry.location.lng,
							}}
						>
							<MapView.Callout
								onPress={() =>
									navigation.navigate('RestaurantDetails', { restaurant })
								}
							>
								<CompactRestInfo restaurant={restaurant} isMap />
							</MapView.Callout>
						</MapView.Marker>
					);
				})}
			</Map>
		</>
	);
};

const MapScreen = ({ navigation }) => {
	const { location } = useContext(LocationContext);

	if (location) return <RestaurantMap navigation={navigation} />;
	return (
		<SafeArea>
			<Map
				region={{
					latitude: 0,
					longitude: 0,
				}}
			/>
			{/* add error overlay */}
		</SafeArea>
	);
};

export default MapScreen;
