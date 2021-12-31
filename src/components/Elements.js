import { Input, Button } from 'react-native-elements';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../util/theme';

const MyInput = props => {
	return (
		<Input
			autoCapitalize="none"
			autoCorrect={false}
			containerStyle={[
				styles.container,
				{ backgroundColor: colors.default, height: 55 },
			]}
			inputContainerStyle={{ borderColor: colors.default, height: 55 }}
			{...props}
		/>
	);
};

const MyButton = props => {
	if (props.type === 'clear') {
		return (
			<TouchableOpacity onPress={props.onPress} style={styles.container}>
				<Text style={{ color: colors.secondary, textAlign: 'center' }}>
					{props.text}
				</Text>
			</TouchableOpacity>
		);
	}
	const style = (() => {
		let backgroundColor = colors.default,
			color = 'black';
		switch (props.color) {
			case 'primary':
				color = 'white';
				backgroundColor = colors.primary;
				break;
			case 'secondary':
				color = 'white';
				backgroundColor = colors.secondary;
				break;
			default:
				break;
		}

		return {
			buttonStyle: {
				backgroundColor,
				height: 55,
			},
			titleStyle: { color },

			...(props.icon ? { iconContainerStyle: { marginRight: 10 } } : {}),
		};
	})();

	return <Button containerStyle={styles.container} {...style} {...props} />;
};

const Link = props => {
	return (
		<Text onPress={props.onPress} style={styles.link}>
			{props.text}
		</Text>
	);
};

const Divider = props => {
	return (
		<View style={[styles.container, props.style]}>
			<View style={styles.divider}></View>
			{props.text ? <Text style={styles.dividerText}>{props.text}</Text> : null}
		</View>
	);
};

const LightText = props => {
	return (
		<Text {...props} style={[styles.lightText, props.style]}>
			{props.children}
		</Text>
	);
};

const styles = StyleSheet.create({
	container: {
		marginVertical: 7,
		width: 343,
		alignSelf: 'center',
		borderRadius: 8,
	},
	divider: {
		borderWidth: 1,
		borderColor: '#C7C9D9',
	},
	dividerText: {
		color: '#8C8C8C',
		alignSelf: 'center',
		backgroundColor: '#fff',
		position: 'absolute',
		top: -10,
		paddingHorizontal: 15,
	},
	link: {
		color: colors.secondary,
	},
	lightText: {
		color: 'grey',
		textAlign: 'center',
	},
	border: {
		borderWidth: 1,
		borderColor: 'black',
	},
});

export { MyButton as Button, MyInput as Input, Link, Divider, LightText };
