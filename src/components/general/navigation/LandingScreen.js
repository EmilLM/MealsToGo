import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigation from './AppNavigation';
import AccountNavigation from '../../account/AccountNavigation'
import { AuthContext } from '../../../services/auth/auth.context';

const LandingScreen = () => {
	const { user } = useContext(AuthContext);

	return (
		<NavigationContainer>
			{user ? <AppNavigation /> : <AccountNavigation/>}
		</NavigationContainer>
	);
};

export default LandingScreen;
