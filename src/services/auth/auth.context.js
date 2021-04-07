import React, { useState, createContext } from 'react';
import * as firebase from 'firebase';


export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
	const [user, setUser] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

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
			setError(e.toString());
		}
	};

	return (
		<AuthContext.Provider
			value={{
				user,
				isLoading,
				error,
				setError,
				onLogin,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};
