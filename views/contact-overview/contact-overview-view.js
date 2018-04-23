import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Button,
} from 'react-native'

const ContactOverviewView = (props) => (
	<View style={styles.container}>
		<Text style={styles.text}>Contact Overview</Text>
		<Button
			title="Back"
			onPress={() => props.navigation.goBack()}
		/>
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

export default ContactOverviewView