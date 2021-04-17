import React from 'react';
import { NameContainer } from '../account.styles';
import { IconButton } from 'react-native-paper';

import Text from '../../general/text/Text';
import BgImageLayout from '../../general/layout/BgImageLayout';

const RegisterScreen = () => {
	return (
		<BgImageLayout>
			<NameContainer>
				<IconButton icon='account-outline' size={25} color={'#2182BD'} />
				<Text variant='title'>New account</Text>
			</NameContainer>

			<RegisterForm />
		</BgImageLayout>
	);
};

export default RegisterScreen;
