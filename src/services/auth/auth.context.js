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
	const [changePass, setChangePass] = useState(false);

	// user auth state persist
	firebase.auth().onAuthStateChanged((usr) => {
		if (usr) {
			setUser(usr);
			setIsLoading(false);
		} else {
			setIsLoading(false);
		}
	});

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

	const onDeleteUser = () => {
		const user = firebase.auth().currentUser;
		user
			.delete()
			.then(() => {
				setUser(null);
			})
			.catch((error) => {
				setError(error);
			});
	};

	const onChangePassword = (oldPass, newPass) => {
		const user = firebase.auth().currentUser;
		if (oldPass === newPass) {
			user
				.updatePassword(newPass)
				.then(() => {
					setChangePass(true);
				})
				.catch((e) => {
					setError(e.toString());
					console.log(e);
				});
		} else setError('Passwords do not match!');
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
				onDeleteUser,
				onChangePassword,
				changePass,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};
