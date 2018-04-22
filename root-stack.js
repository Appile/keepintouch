import { StackNavigator } from 'react-navigation'
import Dashboard from './views/dashboard'
import ContactOverview from './views/contact-overview'

export const RootStack = StackNavigator(
	{
		Dashboard: {
			screen: Dashboard,
		},
		ContactOverview: {
			screen: ContactOverview,
		},
	},
	{
		initialRouteName: 'Dashboard',
	},
);

export default RootStack;