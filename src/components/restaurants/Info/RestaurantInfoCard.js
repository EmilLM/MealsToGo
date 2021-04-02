import React from 'react';
import { Card } from 'react-native-paper';
import { Rating } from 'react-native-ratings';
import { SvgXml } from 'react-native-svg';

import openIcon from '../../../../assets/open';
import Text from '../../general/Text/Text';
import {
	Content,
	CardCover,
	TextBox,
	IconBox,
	Icon,
	Icons,
} from './info.styles';

const RestaurantInfo = ({ restaurant = {} }) => {
	const {
		name = 'Some Restaurant',
		info = 'Italian restaurant and bar',
		icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
		photos = [
			'https://noblesse-group.com/wp-content/uploads/Amenajare-restaurant-Pescaresc-Noblesse-Group-01.jpg',
		],
		adress = 'Some adress Nr 191',
		isOpenNow = true,
		rating = 3.5,
		isClosedTemporarily = true,
	} = restaurant;
	return (
		<Card elevation={5}>
			<CardCover source={{ uri: photos[0] }} />
			<Content>
				<TextBox>
					<Text variant='title'>{name}</Text>
					<Text variant='restaurantLabel'>{info}</Text>
					<Text variant='caption'>{adress}</Text>
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
					{isClosedTemporarily && (
						<Text variant='error'>CLOSED TEMPORARILY</Text>
					)}
				</IconBox>
			</Content>
		</Card>
	);
};
export default RestaurantInfo;
