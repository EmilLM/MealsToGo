import React, { useState, useEffect, useRef, useContext } from 'react';
import { Text, View, TouchableOpacity, Button } from 'react-native';
import { Camera } from 'expo-camera';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../../../services/auth/auth.context';

const CameraScreen = ({navigation}) => {
	const [hasPermission, setHasPermission] = useState(null);
	const [type, setType] = useState(Camera.Constants.Type.front);
  const {user} = useContext(AuthContext)
	const cameraRef = useRef();

	useEffect(() => {
		(async () => {
			const { status } = await Camera.requestPermissionsAsync();
			setHasPermission(status === 'granted');
		})();
	}, []);

	const snap = async () => {
		try {
			if (cameraRef) {
				const photo = await cameraRef.current.takePictureAsync({quality: 0.2});
        AsyncStorage.setItem(`${user.uid}-photo`, photo.uri)
        navigation.goBack()
			}
		} catch (e) {}
	};

	if (hasPermission === null) {
		return <View />;
	}
	if (hasPermission === false) {
		return <Text>No access to camera</Text>;
	}

	return (
			<ProfileCamera
				type={type}
				ratio={'16:9'}
				ref={(cam) => (cameraRef.current = cam)}
			>
		<CameraButton onPress={snap}/>
        
      </ProfileCamera>
	);
};

export default CameraScreen;

const ProfileCamera = styled(Camera)`
	width: 100%;
	height: 100%;
  align-items: center;
  justify-content: flex-end;
`;

const CameraButton = styled(TouchableOpacity)`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background-color: rgba(255, 255, 255, 0.1)
  border: 1px solid rgba(255, 255, 255, 0.7);
  margin-bottom: 20px;
  
`
