import React from 'react';
import {
	StyleSheet,
	Text,
	View,
} from 'react-native';

const ContactOverviewView = () => (
	<View style={styles.container}>
		<Text style={styles.text}>Contact Overview</Text>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 34,
	},
	text: {
		fontSize: 18,
	},
});

export default ContactOverviewView;
