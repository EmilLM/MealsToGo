import React, { useState } from 'react';
import { Text } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/utils/theme/theme';
import RestaurantScreen from './src/components/restaurants/Screen/RestaurantScreen';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

export default function App() {
	const [oswaldLoaded] = useOswald({
		Oswald_400Regular,
	});
	const [latoLoaded] = useLato({
		Lato_400Regular,
	});
	if (!oswaldLoaded || !latoLoaded) return <Text>Loading</Text>;
	return (
		<ThemeProvider theme={theme}>
			<RestaurantScreen />
		</ThemeProvider>
	);
}

