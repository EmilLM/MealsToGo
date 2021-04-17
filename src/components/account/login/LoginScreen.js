import React from 'react';
import { IconButton } from 'react-native-paper';

import LoginForm from './LoginForm';
import BgImageLayout from '../../general/layout/BgImageLayout';

import { NameContainer, TextButton } from '../account.styles';

const LoginScreen = ({ navigation }) => {
	return (
		<BgImageLayout>
			<NameContainer>
				<IconButton icon='lock-outline' size={25} color={'#2182BD'} />
				<Text variant='title'>Login</Text>
			</NameContainer>

			<LoginForm />
			<TextButton onPress={() => null}>
				<Text variant='label'>Forgot password?</Text>
			</TextButton>
		</BgImageLayout>
	);
};

export default LoginScreen;
