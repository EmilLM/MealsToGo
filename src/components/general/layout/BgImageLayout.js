import React from 'react';

import Text from '../text/Text';

import {
	Container,
	AccountBg,
	AccountCover,
} from '../../account/account.styles';

const BgImageLayout = (props) => {
	return (
		<AccountBg>
			<AccountCover />
			<Text variant='mainTitle'>MealsToGo</Text>

			<Container>{props.children}</Container>
		</AccountBg>
	);
};

export default BgImageLayout;
