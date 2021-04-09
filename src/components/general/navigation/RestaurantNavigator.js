import React from 'react';
import {
	createStackNavigator,
} from '@react-navigation/stack';
import RestaurantScreen from '../../restaurants/Screen/RestaurantScreen';
import RestaurantDetails from '../../restaurants/Details/RestaurantDetails';

const RestaurantStack = createStackNavigator();

const RestaurantNavigator = () => {
	return (
		<RestaurantStack.Navigator headerMode='none'>
			<RestaurantStack.Screen name='Restaurants' component={RestaurantScreen} />
			<RestaurantStack.Screen
				name='RestaurantDetails'
				component={RestaurantDetails}
			
			/>
		</RestaurantStack.Navigator>
	);
};

export default RestaurantNavigator;
