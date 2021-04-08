import React, { useState, useContext, useEffect } from 'react';
import {
	CustomButton,
	ErrorContainer,
} from '../account.styles';
import { TextInput } from 'react-native-paper';
import Text from '../../general/text/Text';

import { AuthContext } from '../../../services/auth/auth.context';

const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { onLogin, isLoading, error, setError } = useContext(AuthContext);

    console.log(isLoading)
	useEffect(() => {
		// to prevent error message being show after form reset
		setError('');
	}, []);

	useEffect(() => {
		if (!email && !password) setError('');
	}, [email, password]);

	return (
		<>
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
					<Text variant='error'>{error}</Text>
				</ErrorContainer>
			) : null}
			{/* ADD PASSWORD RESET */}
			<CustomButton
				icon={'arrow-collapse-down'}
				onPress={() => onLogin(email, password)}
				loading={isLoading}
				disabled={!email || !password}
			>
				Submit
			</CustomButton>
		</>
	);
};

export default LoginForm;
