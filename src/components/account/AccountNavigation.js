import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AccountScreen from './AccountScreen';
import LoginScreen from './login/LoginScreen';
import RegisterScreen from './register/RegisterScreen';

const Stack = createStackNavigator();

const AccountNavigator = () => {
	return (
		<Stack.Navigator headerMode='none'>
			<Stack.Screen name='Main' component={AccountScreen} />
			<Stack.Screen name='Login' component={LoginScreen} />
			<Stack.Screen name='Register' component={RegisterScreen} />
		</Stack.Navigator>
	);
};

export default AccountNavigator;
