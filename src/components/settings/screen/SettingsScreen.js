import React from 'react';
import { Text, View } from 'react-native';
import SafeArea from '../../general/safe-area/SafeArea';

const SettingScreen = () => {
	return (
		<SafeArea>
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>Settings</Text>
			</View>
		</SafeArea>
	);
};

export default SettingScreen;
