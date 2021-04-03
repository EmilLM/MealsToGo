import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { screenOptions } from '../../../utils/screenOptions/screenOptions';
import RestaurantScreen from '../../restaurants/Screen/RestaurantScreen';
import MapScreen from '../../map/screen/MapScreen';
import SettingsScreen from '../../settings/screen/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={screenOptions}
				tabBarOptions={{
					activeTintColor: 'navy',
					inactiveTintColor: 'gray',
					labelStyle: { fontSize: 14 },
					tabStyle: { marginBottom: 4, marginTop: 4 },
				}}
			>
				<Tab.Screen name='Restaurants' component={RestaurantScreen} />
				<Tab.Screen name='Map' component={MapScreen} />
				<Tab.Screen name='Settings' component={SettingsScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}
