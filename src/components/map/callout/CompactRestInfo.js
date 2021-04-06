import React from 'react';
import styled from 'styled-components/native';
import Text from '../../general/text/Text';

import WebView from 'react-native-webview';
import { Platform, View, TouchableOpacity } from 'react-native';

const Container = styled.View`
	border-radius: 10px;
	padding: 10px;
	width: 130px;
	align-items: center;
	justify-content: center;
`;

const Img = styled.Image`
	border-radius: 10px;
	height: 80px;
	width: 120px;
`;
const AndroidImg = styled(WebView)`
	border-radius: 10px;
	height: 80px;
	width: 120px;
`;

const Name = styled.Text`
	margin-top: ${(props) => props.theme.sizes[2]}
	font-size: ${(props) => props.theme.fontSizes.body};
	text-align: center;
	width: 130px;
`;

const isAndroid = Platform.OS === 'android';
// isMap test for favourites images to display in case they dont
const CompactRestInfo = ({ restaurant, isMap }) => {
	const { photos, name } = restaurant;

	const Image = isAndroid && isMap ? AndroidImg : Img;

	return (
		<Container>
			<Image source={{ uri: photos[0] }} />
			{/* <Rating
				type='star'
				ratingCount={5}
				startingValue={rating}
				imageSize={20}
				fractions={2}
			/> */}

			<Name>{name}</Name>
		</Container>
	);
};

export default CompactRestInfo;
