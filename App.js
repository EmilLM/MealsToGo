import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/utils/theme/theme';
import {
	useFonts as useOswald,
	Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context';

import Navigation from './src/components/general/navigation/Navigation';
import Loader from './src/components/general/loader/Loader';

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
			<RestaurantsContextProvider>
				<Navigation />
			</RestaurantsContextProvider>
		</ThemeProvider>
	);
}
