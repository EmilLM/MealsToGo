import React, { useState, useContext, useCallback } from 'react';
import styled from 'styled-components/native';
import { List, Avatar } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import { AuthContext } from '../../../services/auth/auth.context';
import SafeArea from '../../general/safe-area/SafeArea';
import Text from '../../general/text/Text';

const SettingScreen = ({ navigation }) => {
	const { onLogout, user, onDeleteUser } = useContext(AuthContext);
	const [photo, setPhoto] = useState(null);

	getProfilePicture = async (currUser) => {
		const photoUri = await AsyncStorage.getItem(`${currUser.uid}-photo`);
		setPhoto(photoUri);
	};
	useFocusEffect(
		useCallback(() => {
			getProfilePicture(user);
		}, [user])
	);
	
	return (
		<BgImage>
			<Overlay />
			<SafeArea>
				<TouchableOpacity onPress={() => navigation.navigate('Camera')}>
					<AvatarContainer>
						{!photo ? (
							<Avatar.Icon size={100} icon='camera' backgroundColor='#2182bd' />
						) : (
							<Avatar.Image size={100} source={{ uri: photo }} />
						)}
						<Text variant='favLabel'>{user.email}</Text>
					</AvatarContainer>
				</TouchableOpacity>
				<List.Section>
					{/* Add permissions, maybe theme change, restaurant area range */}
					<SettingsItem
						title='Favourites'
						titleStyle={{ fontSize: 20 }}
						left={() => <List.Icon color='#2182bd' icon='heart' />}
						onPress={() => navigation.navigate('Favourites')}
					/>

					<SettingsItem
						title='Logout'
						titleStyle={{ fontSize: 20 }}
						left={() => <List.Icon color='#2182BD' icon='logout' />}
						onPress={onLogout}
					/>
					<SettingsItem
						title='Change password'
						titleStyle={{ fontSize: 20 }}
						left={() => <List.Icon color='#2182BD' icon='lock-reset' />}
						onPress={() => navigation.navigate('Change')}						
					/>
					<SettingsItem
						title='Delete account'
						titleStyle={{ fontSize: 20 }}
						left={() => <List.Icon color='#2182BD' icon='delete' />}
						onPress={onDeleteUser}
					/>
					<SettingsItem
						title='New account'
						titleStyle={{ fontSize: 20 }}
						left={() => <List.Icon color='#2182BD' icon='account' />}
						onPress={onLogout}
					/>
				</List.Section>
			</SafeArea>
		</BgImage>
	);
};

export default SettingScreen;

const SettingsItem = styled(List.Item)`
	padding: ${(props) => props.theme.sizes[1]};
`;

const AvatarContainer = styled.View`
	margin-top: 20px;
	height: 150px;
	justify-content: space-evenly;
	align-items: center;
`;
export const BgImage = styled.ImageBackground.attrs({
	source: require('../../../../assets/home_bg.webp'),
})`
	flex: 1;
	justify-content: center;
`;
export const Overlay = styled.View`
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: rgba(255, 255, 255, 0.6);
`;
