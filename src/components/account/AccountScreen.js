import React from 'react';
import Text from '../general/text/Text';
import {
	Container,
	AccountBg,
	AccountCover,
	CustomButton,
	AnimationWrapper
} from './account.styles';
import LottieView from 'lottie-react-native';

const AccountScreen = ({ navigation }) => {
	return (
		<AccountBg>
			<AccountCover />
			<AnimationWrapper>
			<LottieView
				key="animation"
				autoPlay
				loop
				resizeMode="cover"
				
				source={require('../../../assets/watermelon.json')}
				// OR find more Lottie files @ https://lottiefiles.com/featured
				// Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
			/>
			</AnimationWrapper>
			<Text variant='mainTitle'>MealsToGo</Text>
			<Container>
				<CustomButton
					icon={'login'}
					onPress={() => navigation.navigate('Login')}
				>
					Login
				</CustomButton>
				<CustomButton
					icon={'account-outline'}
					onPress={() => navigation.navigate('Register')}
				>
					Register
				</CustomButton>
			</Container>
		</AccountBg>
	);
};

export default AccountScreen;
