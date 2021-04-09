import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigation from './AppNavigation';
import AccountNavigator from '../../account/AccountNavigator';
import { AuthContext } from '../../../services/auth/auth.context';

const LandingScreen = () => {
	const { user } = useContext(AuthContext);

	return (
		<NavigationContainer>
			{user ? <AppNavigation /> : <AccountNavigator />}
		</NavigationContainer>
	);
};

export default LandingScreen;
