import React from 'react'
import { connect } from 'react-redux'
import {
	contactsList,
} from '../../store/modules/contacts';
import DashboardView from './dashboard-view';

const mapStateToProps = (state) => ({
	contactsList: contactsList(state),
})

class DashboardContainer extends React.Component {
	render = () => (
		<DashboardView
			navigation={this.props.navigation}
			contactsList={this.props.contactsList}
		/>
	)
}

export default connect(mapStateToProps)(DashboardContainer)