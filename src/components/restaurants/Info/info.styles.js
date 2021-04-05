import styled from 'styled-components/native';
import { Card } from 'react-native-paper';

export const RestaurantCard = styled(Card)`
	background-color: ${(props) => props.theme.colors.bg.primary};
	margin-bottom: ${(props) => props.theme.sizes[3]};
`;

export const CardCover = styled(Card.Cover)`
	padding: ${(props) => props.theme.sizes[3]};
	background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Content = styled(Card.Content)`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;
export const TextBox = styled.View`
	width: 60%;
	justify-content: flex-start;

`;
export const IconBox = styled.View`
	justify-content: space-between;
	align-items: flex-end;
`;
export const Icons = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
`;

export const Icon = styled.Image`
	width: 20px;
	height: 20px;
	margin-left: 20px;
`;
