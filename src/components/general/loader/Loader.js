import React from 'react';
import { ActivityIndicator, Colors } from 'react-native-paper';
import SafeArea from '../safe-area/SafeArea';
const Loader = () => {
	return (
		<SafeArea>
			<ActivityIndicator
				animating={true}
				color={'navy'}
				size={'large'}
				style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
			/>
		</SafeArea>
	);
};

export default Loader;
