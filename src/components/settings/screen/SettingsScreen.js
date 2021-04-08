import React, {useContext} from 'react';
import { Text, View } from 'react-native';
import SafeArea from '../../general/safe-area/SafeArea';
import {Button} from 'react-native-paper';
import { AuthContext } from '../../../services/auth/auth.context';


const SettingScreen = () => {
	const {onLogout} = useContext(AuthContext)
	return (
		<SafeArea>
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>Settings</Text>
				<Button icon="logout" onPress={()=>onLogout()} color="blue">Logout</Button>
			</View>
		</SafeArea>
	);
};

export default SettingScreen;
