import { Animated, Easing } from 'react-native';
import { StackNavigator } from 'react-navigation'
import Dashboard from './views/dashboard'
import ContactOverview from './views/contact-overview'

export const stackScreens = {
	Dashboard: {
		screen: Dashboard,
		path: 'dashboard',
		navigationOptions: {
			title: 'KeepInTouch'
		}
	},
	ContactOverview: {
		screen: ContactOverview,
		path: 'contact/:name',
		navigationOptions: ({ navigation }) => ({
			title: navigation.state.params.name,
		}),
	},
};

export const stackConfig = {
	initialRouteName: 'Dashboard',
	headerMode: 'float',
	mode: 'modal',
	navigationOptions: {
		gesturesEnabled: false,
	},
	transitionConfig: () => ({
		transitionSpec: {
			duration: 300,
			easing: Easing.out(Easing.poly(4)),
			timing: Animated.timing,
		},
	}),
}

export const RootStackFactory = (stackBuilder, stackScreens, stackConfig) => stackBuilder(stackScreens, stackConfig);

export default RootStackFactory(StackNavigator, stackScreens, stackConfig);