import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	SectionList,
	Image,
	Button,
} from 'react-native'
import moment from 'moment';

const ContactsListView = (props) => (
	<View style={styles.container}>
		<SectionList
			sections={[
				{title: 'Over 1 Month', severity: 0, data: props.contactsOver30Days},
				{title: 'Over 2 Weeks', severity: 1, data: props.contactsOver14Days},
				{title: 'Over 1 Week', data: props.contactsOver7Days},
				{title: 'All', data: props.contactsList}
			]}
			renderItem={({item}) => (
				<View style={styles.contact}>
					<View style={styles.avatar}>
						<Image
							source={{uri: item.avatar}}
							style={styles.avatarImg}
						/>
					</View>
					<View style={styles.name}>
						<Text style={styles.nameText}>
							{item.name}
						</Text>
						<Text style={styles.lastContactText}>
							{moment(item.lastContact).fromNow()}
						</Text>
					</View>
					<View style={styles.actions}>
						<Button
							onPress={() => props.updateContact(item.id)}
							title="Check-In"
							color="#841584"
						/>
					</View>
				</View>
				)}
			renderSectionHeader={({section}) => <Text style={styleSectionHeader(section.severity)}>{section.title}</Text>}
			keyExtractor={(item, index) => index}
		/>
	</View>
)

const styleSectionHeader = (useColor) => {
	let backgroundColor, color
	switch (useColor) {
		case 0:
			backgroundColor = '#FE4A49'
			color = '#F4F4F8'
			break;
		case 1:
			backgroundColor = '#FED766'
			color = '#000000'
			break;
		default:
			backgroundColor = '#1B9AAA'
			color = '#F4F4F8'
	}

	return {
		paddingTop: 2,
		paddingLeft: 10,
		paddingRight: 10,
		paddingBottom: 2,
		fontSize: 14,
		fontWeight: 'bold',
		backgroundColor,
		color,
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 22,
	},
	contact: {
		flex: 1,
		flexDirection: 'row',
	},
	avatar: {
		flex: 1,
		flexDirection: 'column',
	},
	avatarImg: {
		height: 50,
		width: 50,
	},
	name: {
		flex: 2,
		padding: 10,
		height: 75,
	},
	nameText: {
		fontSize: 18,
	},
	lastContact: {
		flex: 1,
		padding: 10,
	},
	lastContactText: {
		fontSize: 12,
		color: '#A6A6AA',
	},
	actions: {
		flex: 1,
	},
})

export default ContactsListView