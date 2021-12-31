import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, StyleSheet, View } from 'react-native';
import { Button, Divider, Link, LightText } from '../components/Elements';
import AuthForm from '../components/AuthForm';
import { LOGIN_MODE, AUTH_TYPE, OAUTH_PROVIDER } from '../util/constants';
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signInWithOAuthProvider,
} from '../util/firebase';

const LoginScreen = () => {
	const [loginMode, setLoginMode] = useState(LOGIN_MODE.LOGIN);

	const createOrSigninUser = (type, payload) => {
		switch (type) {
			case AUTH_TYPE.EMAIL_AUTH:
				loginMode === LOGIN_MODE.LOGIN
					? signInWithEmailAndPassword(payload)
					: createUserWithEmailAndPassword(payload);
				return;
			case AUTH_TYPE.OAUTH:
				signInWithOAuthProvider(payload);
				return;
			default:
				return;
		}
	};

	return (
		<SafeAreaView style={styles.container}>
			<Image source={require('../assets/logo.png')} style={styles.logo} />
			<AuthForm
				loginMode={loginMode}
				onSubmit={userData =>
					createOrSigninUser(AUTH_TYPE.EMAIL_AUTH, userData)
				}
			/>
			<Divider text="or" style={{ marginVertical: 15 }} />
			<Button
				title="Login with Facebook"
				icon={{
					name: 'facebook',
					type: 'material',
					size: 24,
					color: 'white',
				}}
				color="secondary"
				onPress={() =>
					createOrSigninUser(AUTH_TYPE.OAUTH, OAUTH_PROVIDER.FACEBOOK)
				}
			/>
			<Button
				title="Login with Google"
				icon={{
					name: 'google',
					type: 'antdesign',
					size: 24,
					color: 'black',
				}}
				onPress={() =>
					createOrSigninUser(AUTH_TYPE.OAUTH, OAUTH_PROVIDER.GOOGLE)
				}
			/>

			{loginMode === LOGIN_MODE.LOGIN ? (
				<View style={{ flex: 0.75, justifyContent: 'flex-end' }}>
					<LightText>
						Don't have an account?{' '}
						<Link
							text="Sign Up"
							onPress={() => setLoginMode(LOGIN_MODE.SIGNUP)}
						/>
					</LightText>
				</View>
			) : (
				<View style={{ flex: 0.75, justifyContent: 'space-between' }}>
					<LightText>
						{'By signing up you accept the '}
						<Link
							text="Terms of Service"
							onPress={() => console.log('Pressed')}
						/>
						{' and '}
						<Link
							text="Privacy Policy"
							onPress={() => console.log('Pressed')}
						/>
					</LightText>
					<LightText>
						Already Have an account?{' '}
						<Link
							text="Log in"
							onPress={() => setLoginMode(LOGIN_MODE.LOGIN)}
						/>
					</LightText>
				</View>
			)}
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: 343,
		alignSelf: 'center',
	},
	logo: {
		alignSelf: 'center',
		width: 140,
		height: 140,
	},
});

export default LoginScreen;
