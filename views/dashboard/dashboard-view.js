import React from 'react';
import {
	StyleSheet,
	Text,
	View,
} from 'react-native';

const DashboardView = () => (
	<View style={styles.container}>
		<Text style={styles.text}>Dashboard</Text>
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

export default DashboardView;
