import styled from 'styled-components/native';
import { Button } from 'react-native-paper';

export const AccountBg = styled.ImageBackground.attrs({
	source: require('../../../assets/home_bg.webp'),
})`
	flex: 1;
	align-items: center;
	justify-content: center;
`;

export const AccountCover = styled.View`
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: rgba(255, 255, 255, 0.3);
`;
export const Container = styled.View`
    background-color: rgba(255, 255, 255, 0.7);
    padding: ${(props) => props.theme.sizes[4]};
    margin-top: ${(props) => props.theme.sizes[2]}
    border-radius: ${(props) => props.theme.sizes[2]}
	justify-content: space-evenly;
	align-items: center;
    width: 90%;
`;

export const CustomButton = styled(Button).attrs({
	contentStyle: {
		width: '100%',
		padding: 8,
	},
	color: 'white',
})`
	margin: ${(props) => props.theme.sizes[2]}
	background-color: ${(props) => props.theme.colors.brand.primary};
    justify-content: center;
    width: 100%;
`;

export const NameContainer = styled.View`
	width: 100%;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;
export const ErrorContainer = styled.View`
	margin: ${props=>props.theme.sizes[2]}
`;

export const AnimationWrapper = styled.View`
	width: 100%;
	height: 30%;
	position: absolute;
	top: 30px;
	padding: ${props=>props.theme.sizes[2]}
`

export const TextButton = styled.TouchableOpacity`
	marginTop: 10px;
`