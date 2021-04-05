import React from 'react';
import { Rating } from 'react-native-ratings';
import { SvgXml } from 'react-native-svg';

import openIcon from '../../../../assets/open';
import Text from '../../general/text/Text';
import {
	RestaurantCard,
	Content,
	CardCover,
	TextBox,
	IconBox,
	Icon,
	Icons,
} from './info.styles';

const RestaurantInfo = React.memo(({ restaurant }) => {
	const {photos, name, info ,address, rating, isClosedTemporarily, isOpenNow, icon} = restaurant;
	
	return (
		<RestaurantCard elevation={5}>
			<CardCover source={{ uri: photos[0] }} />
			<Content>
				<TextBox>
					<Text variant='label'>{name}</Text>
					<Text variant='restaurantLabel'>{info}</Text>
					<Text variant='caption'>{address}</Text>
				</TextBox>
				<IconBox>
					<Rating
						type='star'
						ratingCount={5}
						startingValue={rating}
						imageSize={20}
						fractions={2}
					/>
					<Icons>
						{isOpenNow && <SvgXml xml={openIcon} width={20} height={20} />}
						<Icon
							style={{ width: 20, height: 20, marginLeft: 20 }}
							source={{ uri: icon }}
						/>
					</Icons>
					{isClosedTemporarily ? (
						<Text variant='error'>CLOSED TEMPORARILY</Text>
					) : (
						<Text variant='transparent'>OPEN</Text>
					)}
				</IconBox>
			</Content>
		</RestaurantCard>
	);
});
export default RestaurantInfo;
