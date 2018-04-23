import React from 'react';
import { connect } from 'react-redux';
import {
	contactsList,
} from '../../store/modules/contacts';
import ContactOverviewView from './contact-overview-view';

const mapStateToProps = (state) => ({
	contactsList: contactsList(state),
});

class ContactOverviewContainer extends React.Component {
	render = () => (
		<ContactOverviewView
			contactsList={this.props.contactsList}
		/>
	)
}

export default connect(mapStateToProps)(ContactOverviewContainer);
