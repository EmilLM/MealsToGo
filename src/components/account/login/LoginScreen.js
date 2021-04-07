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
import Loader from '../../general/loader/Loader';
import Text from '../../general/text/Text';

const LoginScreen = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { onLogin, isLoading, error, setError } = useContext(AuthContext);

	useEffect(() => {
		// to prevent error message being show after form reset
		setError('');
	}, []);

	useEffect(() => {
		if (!email && !password) setError('');
	}, [email, password]);

	return (
		<AccountBg>
			<AccountCover />
			<Text variant='mainTitle'>MealsToGo</Text>

			<Container>
				<NameContainer>
					<IconButton icon='lock-outline' size={25} color={'#2182BD'} />
					<Text variant='title'>Login</Text>
				</NameContainer>

				<TextInput
					mode='outlined'
					label='E-mail'
					value={email}
					onChangeText={(input) => setEmail(input)}
					style={{ width: '100%', backgroundColor: 'white' }}
					textContentType='emailAddress'
					keyboardType='email-address'
					autoCapitalize='none'
				/>
				<TextInput
					mode='outlined'
					label='Password'
					value={password}
					onChangeText={(input) => setPassword(input)}
					secureTextEntry
					autoCapitalize='none'
					textContentType='password'
					// add numbers on top =>background image resizes
					// keyboardType='email-address'
					style={{
						width: '100%',
						marginBottom: 8,
						marginTop: 16,
						backgroundColor: 'white',
					}}
				/>
				{error ? (
					<ErrorContainer>
						{/* add different messages based on error received or just add the error */}
						<Text variant='error'>Wrong email/password!</Text>
					</ErrorContainer>
				) : null}
				<CustomButton
					icon={'arrow-collapse-down'}
					onPress={() => onLogin(email, password)}
					loading={isLoading}
					disabled={!email || !password}
				>
					Submit
				</CustomButton>
			</Container>
		</AccountBg>
	);
};

export default LoginScreen;
