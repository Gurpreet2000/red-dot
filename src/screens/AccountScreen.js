import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../components/Elements';
import { signOut } from '../util/firebase';

const AccountScreen = () => {
	return (
		<SafeAreaView>
			<Button title="Sign Out" color="primary" onPress={signOut} />
		</SafeAreaView>
	);
};

export default AccountScreen;
