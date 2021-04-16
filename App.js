import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/utils/theme/theme';
import * as firebase from 'firebase';

import {
	useFonts as useOswald,
	Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';


import { AuthContextProvider } from './src/services/auth/auth.context';
import LandingScreen from './src/components/general/navigation/LandingScreen';
import Loader from './src/components/general/loader/Loader';

const firebaseConfig = {
	apiKey: '!!!!!!!!!!!!!!!',
	authDomain: 'mealsapp-585b8.firebaseapp.com',
	projectId: 'mealsapp-585b8',
	storageBucket: 'mealsapp-585b8.appspot.com',
	messagingSenderId: '646958164638',
	appId: '1:646958164638:web:4fd70d98759a2a8ceee98f',
};
if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

export default function App() {
	const [oswaldLoaded] = useOswald({
		Oswald_400Regular,
	});
	const [latoLoaded] = useLato({
		Lato_400Regular,
	});

	if (!oswaldLoaded || !latoLoaded) return <Loader />;

	return (
		<ThemeProvider theme={theme}>
			<AuthContextProvider>
				<LandingScreen />
			</AuthContextProvider>
		</ThemeProvider>
	);
}
