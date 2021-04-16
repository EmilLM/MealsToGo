import React, { useState, useContext, useEffect } from 'react';
import {
	Container,
	AccountBg,
	AccountCover,
	CustomButton,
	NameContainer,
	ErrorContainer,
} from '../account.styles';
import { TextInput, IconButton } from 'react-native-paper';

import { AuthContext } from '../../../services/auth/auth.context';
import Text from '../../general/text/Text';

const ChangePasswordScreen = () => {
	const [password, setPassword] = useState('');
	const [repeatPassword, setRepeatPassword] = useState('');
	const { onChangePassword, isLoading, error, setError } = useContext(AuthContext);

	useEffect(() => {
		// to prevent error message being show after form reset
		setError('');
	}, []);

	useEffect(() => {
		if (!password && !repeatPassword) setError('');
	}, [password]);

	return (
		<AccountBg>
			<AccountCover />
			<Text variant='mainTitle'>MealsToGo</Text>

			<Container>
				<NameContainer>
					<IconButton icon='account-outline' size={25} color={'#2182BD'} />
					<Text variant='title'>Change password</Text>
				</NameContainer>

				<TextInput
					mode='outlined'
					label='New Password'
					value={password}
					onChangeText={(input) => setPassword(input)}
					secureTextEntry
					autoCapitalize='none'
					textContentType='password'
					// add numbers on top =>background image resizes
					// keyboardType='email-address'
					style={{
						width: '100%',
                        marginTop: 8,
						marginBottom: 8,
						backgroundColor: 'white',
					}}
				/>
                <TextInput
					mode='outlined'
					label='Repeat password'
					value={repeatPassword}
					onChangeText={(input) => setRepeatPassword(input)}
					secureTextEntry
					autoCapitalize='none'
					textContentType='password'
					// add numbers on top =>background image resizes
					// keyboardType='email-address'
					style={{
						width: '100%',
						marginBottom: 8,
						backgroundColor: 'white',
					}}
				/>
				{error ? (
					<ErrorContainer>
						{/* add different messages based on error received or just add the error */}
						<Text variant='error'>{error}</Text>
					</ErrorContainer>
				) : null}
				<CustomButton
					icon={'arrow-collapse-down'}
					onPress={onChangePassword(password, repeatPassword)}
					loading={isLoading}
					disabled={!password || !repeatPassword}
				>
					Submit
				</CustomButton>
			</Container>
		</AccountBg>
	);
};

export default ChangePasswordScreen;
