import React from 'react';
import Text from '../general/text/Text';
import {
	Container,
	AccountBg,
	AccountCover,
	CustomButton,
} from './account.styles';

const AccountScreen = ({ navigation }) => {
	return (
		<AccountBg>
			<AccountCover />
			<Text variant="mainTitle">MealsToGo</Text>
			<Container>
				<CustomButton
					icon={'login'}
					onPress={() => navigation.navigate('Login')}
				>
					Login
				</CustomButton>
				<CustomButton
					icon={'account'}
					onPress={() => navigation.navigate('Register')}
				>
					Register
				</CustomButton>
				
			</Container>
		</AccountBg>
	);
};

export default AccountScreen;
