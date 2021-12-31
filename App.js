import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import AuthScreen from './src/screens/AuthScreen';
import HomeScreen from './src/screens/HomeScreen';
import AccountScreen from './src/screens/AccountScreen';
import { DefaultTheme } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { useEffect, useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import init from './src/util/init';

const MyTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: 'white',
		primary: '#EC5F5F',
		secondary: '#0082CD',
		default: '#F6F7FA',
	},
};

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const App = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		init();
		auth().onAuthStateChanged(user => setIsLoggedIn(user ? true : false));
	}, []);

	return (
		<NavigationContainer theme={MyTheme}>
			<>
				{isLoggedIn ? (
					<Tab.Navigator
						initialRouteName="Home"
						activeColor="#EC5F5F"
						inactiveColor="grey"
						barStyle={{ backgroundColor: 'white' }}
						labeled={false}
						screenOptions={({ route }) => ({
							tabBarIcon: ({ focused, color, size }) => {
								let iconName;

								if (route.name === 'Home') {
									iconName = focused ? 'grid' : 'grid-outline';
								} else if (route.name === 'Account') {
									iconName = focused ? 'person' : 'person-outline';
								}

								return <Ionicons name={iconName} size={24} color={color} />;
							},
							headerShown: false,
						})}
					>
						<Tab.Screen name="Home" component={HomeScreen} />
						<Tab.Screen name="Account" component={AccountScreen} />
					</Tab.Navigator>
				) : (
					<Stack.Navigator screenOptions={{ headerShown: false }}>
						<Stack.Screen name="Auth" component={AuthScreen} />
					</Stack.Navigator>
				)}
			</>
		</NavigationContainer>
	);
};

export default App;
