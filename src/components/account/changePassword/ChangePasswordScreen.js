import React from 'react';
import { NameContainer } from '../account.styles';
import { IconButton } from 'react-native-paper';

import Text from '../../general/text/Text';
import BgImageLayout from '../../general/layout/BgImageLayout';
import ChangePasswordForm from './ChangePasswordForm';

const ChangePasswordScreen = () => {
	return (
		<BgImageLayout>
			<NameContainer>
				<IconButton icon='account-outline' size={25} color={'#2182BD'} />
				<Text variant='title'>Change password</Text>
			</NameContainer>

			<ChangePasswordForm />
		</BgImageLayout>
	);
};

export default ChangePasswordScreen;
