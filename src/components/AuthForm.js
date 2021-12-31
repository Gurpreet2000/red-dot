import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { LOGIN_MODE } from '../util/constants';
import { Input, Button, Link } from './Elements';

const AuthForm = ({ loginMode, onSubmit }) => {
	const [isSignUp, setIsSignUp] = useState(false);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	useEffect(() => {
		setIsSignUp(loginMode === LOGIN_MODE.SIGNUP ? true : false);
	}, [loginMode]);

	const onPress = () => {
		const user = { email, password, ...(isSignUp ? { name } : null) };
		onSubmit(user);
	};

	return (
		<View style={{ marginBottom: 10 }}>
			{isSignUp ? (
				<Input
					placeholder="Full name"
					value={name}
					onChangeText={value => setName(value)}
				/>
			) : null}
			<Input
				placeholder="Email"
				value={email}
				onChangeText={value => setEmail(value)}
			/>
			<Input
				secureTextEntry
				placeholder="Password"
				type="security"
				value={password}
				onChangeText={value => setPassword(value)}
			/>
			<Button
				title={isSignUp ? 'Sign up' : 'Log in'}
				color="primary"
				onPress={onPress}
			/>
			{isSignUp ? null : <Button text="Forgot Password?" type="clear" />}
		</View>
	);
};

export default AuthForm;
