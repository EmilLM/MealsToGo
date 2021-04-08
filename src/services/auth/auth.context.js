import React, { useState, createContext, useEffect } from 'react';
import * as firebase from 'firebase';
import {
	loginErrorHandler,
	registerErrorHandler,
} from '../../utils/errorHandler/errorHandler';

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
	const [user, setUser] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);


	// user auth state persist
	// firebase.auth().onAuthStateChanged((usr) => {
	// 	if (usr) {
	// 		setUser(usr);
	// 		setIsLoading(false);
	// 	} else {
	// 		setIsLoading(false);
	// 	}
	// });

	const onLogin = async (email, password) => {
		try {
			setIsLoading(true);
			const user = await firebase
				.auth()
				.signInWithEmailAndPassword(email, password);
			setUser(user);
			setIsLoading(false);
		} catch (e) {
			setIsLoading(false);
			loginErrorHandler(e, setError);
		}
	};

	const onRegister = async (email, password, repeatPassword) => {
		try {
			setIsLoading(true);
			if (password !== repeatPassword) {
				setError('Passwords do not match!');
				return;
			}
			const newUser = await firebase
				.auth()
				.createUserWithEmailAndPassword(email, password);
			setUser(newUser);
			setIsLoading(false);
		} catch (e) {
			setIsLoading(false);
			registerErrorHandler(e, setError);
		}
	};

	const onLogout = () => {
		setUser(null);
		firebase.auth().signOut();
	};

	return (
		<AuthContext.Provider
			value={{
				user,
				isLoading,
				error,
				setError,
				onLogin,
				onRegister,
				onLogout,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};
