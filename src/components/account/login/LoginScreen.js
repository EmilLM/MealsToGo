import React from 'react';
import {
	Container,
	AccountBg,
	AccountCover,
	NameContainer,
} from '../account.styles';
import { IconButton } from 'react-native-paper';

import Text from '../../general/text/Text';
import LoginForm from './loginForm';

const LoginScreen = () => {
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
			</Container>
		</AccountBg>
	);
};

export default LoginScreen;
