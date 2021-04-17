import React, { useState, useContext, useEffect } from 'react';
import {

	CustomButton,
	ErrorContainer,
} from '../account.styles';
import { TextInput} from 'react-native-paper';

import { AuthContext } from '../../../services/auth/auth.context';
import Text from '../../general/text/Text';

const RegisterForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [repeatPassword, setRepeatPassword] = useState('');
	const { onRegister, isLoading, error, setError } = useContext(AuthContext);

	useEffect(() => {
		// to prevent error message being show after form reset
		setError('');
	}, [email, password, passwordRepeat]);

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
				onPress={() => onRegister(email, password, repeatPassword)}
				loading={isLoading}
				disabled={!email || !password || !repeatPassword}
			>
				Submit
			</CustomButton>
		</>
	);
};

export default RegisterForm;
