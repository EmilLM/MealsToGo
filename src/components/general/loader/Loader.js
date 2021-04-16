import React from 'react';
import { ActivityIndicator} from "react-native-paper";
import styled from 'styled-components/native';

const Loader = () => {
	return (
			<LoadingContainer>
				<Loading animating={true} color={'blue'} size="large" />
			</LoadingContainer>
	);
};

export default Loader;

const Loading = styled(ActivityIndicator)`
	margin-left: -25px;
`;
const LoadingContainer = styled.View`
	position: absolute;
	top: 50%;
	left: 50%;
`;
