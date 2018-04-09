import React from 'react'
import { connect } from 'react-redux'
import {
	contactsList,
	contactsOver7Days,
	contactsOver14Days,
	contactsOver30Days,
	updateLastContact,
} from '../../store/modules/contacts';
import ContactsListView from './contacts-list-view';

const mapStateToProps = (state) => ({
	contactsList: contactsList(state),
	contactsOver7Days: contactsOver7Days(state),
	contactsOver14Days: contactsOver14Days(state),
	contactsOver30Days: contactsOver30Days(state)
})

const mapDispatchToProps = (dispatch) => ({
	updateContact: (contactId) => dispatch(updateLastContact(contactId))
})

class ContactsListContainer extends React.Component {
	render = () => (
		<ContactsListView
			contactsList={this.props.contactsList}
			contactsOver7Days={this.props.contactsOver7Days}
			contactsOver14Days={this.props.contactsOver14Days}
			contactsOver30Days={this.props.contactsOver30Days}
		  updateContact={this.props.updateContact}
		/>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsListContainer)