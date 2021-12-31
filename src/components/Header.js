import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Text, Avatar } from 'react-native-elements';
import { currentUser } from '../util/firebase';
import { Ionicons } from '@expo/vector-icons';
import faker from 'faker';

const Header = () => {
	return (
		<>
			<Avatar rounded source={{ uri: faker.image.image() }} size={40} />
			<View
				style={[
					{
						flex: 1,
						paddingHorizontal: 15,
					},
				]}
			>
				<Text style={styles.header}>
					Hello,{' '}
					<Text style={[styles.header, styles.capitalize]}>
						{currentUser().displayName}
					</Text>
					!!
				</Text>
				<Text style={{ color: '#FCD034' }}>+1800 Points</Text>
			</View>
			<TouchableOpacity>
				<Ionicons name="notifications-sharp" size={24} color="black" />
			</TouchableOpacity>
		</>
	);
};
const styles = StyleSheet.create({
	header: {
		fontWeight: 'bold',
		fontSize: 18,
	},
	capitalize: {
		textTransform: 'capitalize',
	},
});

export default Header;
