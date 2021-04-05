import React from 'react';
import RestaurantInfoCard from '../Info/RestaurantInfoCard';
import SafeArea from '../../general/safe-area/SafeArea';
import RestaurantMenu from '../Menu/RestaurantMenu'

const RestaurantDetails = ({ route }) => {
	const { restaurant } = route.params;
	return (
		<SafeArea>
			<RestaurantInfoCard restaurant={restaurant} />
            <RestaurantMenu/>
		</SafeArea>
	);
};

export default RestaurantDetails;
