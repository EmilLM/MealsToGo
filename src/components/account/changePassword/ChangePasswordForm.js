import React, { useState, useContext, useEffect } from 'react';
import { CustomButton, ErrorContainer } from '../account.styles';
import { TextInput } from 'react-native-paper';

import { AuthContext } from '../../../services/auth/auth.context';
import Text from '../../general/text/Text';

const ChangePasswordForm = () => {
	const [password, setPassword] = useState('');
	const [repeatPassword, setRepeatPassword] = useState('');
	const {
		onChangePassword,
		changePass,
		isLoading,
		error,
		setError,
	} = useContext(AuthContext);

	useEffect(() => {
		// to prevent error message being show after form reset
		setError('');
	}, [password, repeatPassowrd]);
	return (
		<>
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
					<Text variant='error'>{error}</Text>
				</ErrorContainer>
			) : (
				changePass && <Text variant='label'>Password changed!</Text>
			)}
			{/* change error to pasword changed if modified */}
			<CustomButton
				icon={'arrow-collapse-down'}
				onPress={() => onChangePassword(password, repeatPassword)}
				loading={isLoading}
				disabled={!password || !repeatPassword}
			>
				Submit
			</CustomButton>
		</>
	);
};

export default ChangePasswordForm;
