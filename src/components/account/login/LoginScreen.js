import React from 'react';
import { IconButton } from 'react-native-paper';

import Text from '../../general/text/Text';
import LoginForm from './LoginForm';

import {
	Container,
	AccountBg,
	AccountCover,
	NameContainer,
	TextButton,
} from '../account.styles';

const LoginScreen = ({ navigation }) => {
	return (
		<AccountBg>
			<AccountCover />
			<Text variant='mainTitle'>MealsToGo</Text>

			<Container>
				<NameContainer>
					<IconButton icon='lock-outline' size={25} color={'#2182BD'} />
					<Text variant='title'>Login</Text>
				</NameContainer>

				<LoginForm />
				<TextButton onPress={() => null}>
					<Text variant='label'>Forgot password?</Text>
				</TextButton>
			</Container>
		</AccountBg>
	);
};

export default LoginScreen;
