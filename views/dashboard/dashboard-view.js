import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Button,
} from 'react-native'

const DashboardView = (props) => (
	<View style={styles.container}>
		<Text style={styles.text}>Dashboard</Text>
		<Button
			title="Go to ContactOverview"
			onPress={() => props.navigation.navigate('ContactOverview')}
		/>
	</View>
)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 34,
	},
	text: {
		fontSize: 18,
	},
})

export default DashboardView;