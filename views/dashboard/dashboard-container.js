import React from 'react'
import { connect } from 'react-redux'
import {
	contactsList,
	contactByIdFullName,
} from '../../store/modules/contacts';
import DashboardView from './dashboard-view';

const mapStateToProps = (state) => ({
	contactsList: contactsList(state),
	contactByIdFullName: (id) => contactByIdFullName(state, id)
})

class DashboardContainer extends React.Component {
	render = () => (
		<DashboardView
			navigation={this.props.navigation}
			contactsList={this.props.contactsList}
			contactByIdFullName={this.props.contactByIdFullName}
		/>
	)
}

export default connect(mapStateToProps)(DashboardContainer)