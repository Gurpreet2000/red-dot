import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { Text, Image } from 'react-native-elements';
import faker from 'faker';
import Header from '../components/Header';
import Stories from '../components/Stories';
import { FlatList } from 'react-native-gesture-handler';

const HomeScreen = () => {
	return (
		<SafeAreaView style={[styles.container]}>
			<View style={[styles.item, { marginVertical: 20, marginHorizontal: 10 }]}>
				<Header />
			</View>
			<View style={styles.item}>
				<Stories />
			</View>
			<View
				style={[
					{
						flex: 1,
						marginVertical: 10,
						marginLeft: 10,
						justifyContent: 'space-around',
					},
				]}
			>
				<Text style={{ fontSize: 20 }}>
					<Text style={{ fontWeight: 'bold' }}>Upcoming</Text> movies this week
				</Text>
				<View style={{ flex: 1, marginVertical: 10 }}>
					<FlatList
						horizontal={true}
						showsHorizontalScrollIndicator={false}
						data={[
							{ id: Math.random(), image: faker.image.image() },
							{ id: Math.random(), image: faker.image.image() },
							{ id: Math.random(), image: faker.image.image() },
							{ id: Math.random(), image: faker.image.image() },
							{ id: Math.random(), image: faker.image.image() },
						]}
						renderItem={({ item }) => (
							<View style={{ width: 300, marginRight: 25 }}>
								<Image
									source={{ uri: item.image }}
									style={[{ height: '95%', borderRadius: 24 }]}
									PlaceholderContent={<ActivityIndicator />}
								/>
							</View>
						)}
					/>
				</View>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	item: {
		flexDirection: 'row',
		marginVertical: 10,
		alignItems: 'center',
	},
	header: {
		fontWeight: 'bold',
		fontSize: 18,
	},
	capitalize: {
		textTransform: 'capitalize',
	},
	border: {
		borderWidth: 1,
		borderColor: 'black',
	},
});

export default HomeScreen;
