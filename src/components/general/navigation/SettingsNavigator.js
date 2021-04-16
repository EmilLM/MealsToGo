import React from 'react';
import {
	createStackNavigator,
	CardStyleInterpolators,
} from '@react-navigation/stack';

import SettingsScreen from '../../settings/screen/SettingsScreen';
import FavouritesScreen from '../favourite/FavouritesScreen';
import CameraScreen from '../../settings/camera/CameraScreen';
import ChangePasswordScreen from '../../account/changePassword/ChangePasswordScreen'

const SettingsStack = createStackNavigator();

const SettingsNavigator = ({ route, navigation }) => {
	return (
		<SettingsStack.Navigator
			headerMode='screen'
			screenOptions={{
				cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
			}}
		>
			<SettingsStack.Screen
				name='Settings'
				options={{ header: () => null }}
				component={SettingsScreen}
			/>
			<SettingsStack.Screen
				name='Camera'
				options={{ header: () => null }}
				component={CameraScreen}
			/>
			<SettingsStack.Screen
				name='ChangePassword'
				options={{ header: () => null }}
				component={ChangePasswordScreen}
			/>
			
			<SettingsStack.Screen name='Favourites' component={FavouritesScreen} />

		</SettingsStack.Navigator>
	);
};

export default SettingsNavigator;
