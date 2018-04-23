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
		{props.contactsList.map(contact => (
			<Button
				key={contact.id}
				title={props.contactByIdFullName(contact.id)}
				onPress={() => props.navigation.navigate('ContactOverview', { name: props.contactByIdFullName(contact.id)})}
			/>
		))}
	</View>
)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
	},
	text: {
		fontSize: 18,
	},
})

export default DashboardView;