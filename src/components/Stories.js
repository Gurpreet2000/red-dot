import faker from 'faker';
import React from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';

const Stories = () => {
	const stories = [
		{ id: Math.random(), image: faker.image.image() },
		{ id: Math.random(), image: faker.image.image() },
		{ id: Math.random(), image: faker.image.image() },
		{ id: Math.random(), image: faker.image.image() },
		{ id: Math.random(), image: faker.image.image() },
	];

	const renderItem = ({ item }) => (
		<View
			style={{
				width: 80,
				height: 80,
				borderColor: window.theme.colors.primary,
				borderWidth: 3,
				borderRadius: 24,
				alignItems: 'center',
				justifyContent: 'center',
				marginHorizontal: 12,
			}}
		>
			<Image
				source={{ uri: item.image }}
				style={{ width: 72, height: 70, borderRadius: 24 }}
				PlaceholderContent={<ActivityIndicator />}
			/>
		</View>
	);
	return (
		<>
			<FlatList
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				data={stories}
				renderItem={renderItem}
				keyExtractor={item => item.id}
			/>
		</>
	);
};

export default Stories;
