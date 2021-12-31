import auth from '@react-native-firebase/auth';
import { OAUTH_PROVIDER } from './constants';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';

const currentUser = () => {
	return auth().currentUser;
};

const createUserWithEmailAndPassword = async user => {
	try {
		const response = await auth().createUserWithEmailAndPassword(
			user.email,
			user.password
		);
		await currentUser().updateProfile({
			displayName: user.name,
		});
		return currentUser();
	} catch (e) {
		console.log(e);
	}
};

const signInWithEmailAndPassword = async user => {
	try {
		const response = auth().signInWithEmailAndPassword(
			user.email,
			user.password
		);
		return response;
	} catch (e) {
		console.log(e);
	}
};

const signInWithOAuthProvider = async type => {
	let credential;
	try {
		switch (type) {
			case OAUTH_PROVIDER.GOOGLE:
				GoogleSignin.configure({
					webClientId:
						'348631629076-i9bqaj7sicpqdfqj4s5m5sq7cvo5mltf.apps.googleusercontent.com',
				});
				const { idToken } = await GoogleSignin.signIn();
				credential = auth.GoogleAuthProvider.credential(idToken);
				break;
			case OAUTH_PROVIDER.FACEBOOK:
				const result = await LoginManager.logInWithPermissions([
					'public_profile',
					'email',
				]);
				if (result.isCancelled) {
					throw 'User cancelled the login process';
				}
				const data = await AccessToken.getCurrentAccessToken();
				if (!data) {
					throw 'Something went wrong obtaining access token';
				}
				credential = auth.FacebookAuthProvider.credential(data.accessToken);
				break;
			default:
				return;
		}
		return auth().signInWithCredential(credential);
	} catch (e) {
		console.log(e);
	}
};

const signOut = () => {
	auth().signOut();
};

export {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signInWithOAuthProvider,
	currentUser,
	signOut,
};
