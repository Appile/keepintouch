import _findIndex from 'lodash/findIndex'
// Initial State
const initialState = {
	list: [
		{
			id: 1,
			name: 'Angela Smangela',
			avatar: 'https://www.gravatar.com/avatar/124512541245?d=identicon',
			lastContact: '2018-04-08T21:24:18.479Z',
			contacted: 1
		},
		{
			id: 2,
			name: 'Bill Bingbong',
			avatar: 'https://www.gravatar.com/avatar/623562362362?d=identicon',
			lastContact: '2018-03-08T21:24:18.479Z',
			contacted: 2
		},
		{
			id: 3,
			name: 'Chris Cheese',
			avatar: 'https://www.gravatar.com/avatar/23620996853?d=identicon',
			lastContact: '2018-01-08T21:24:18.479Z',
			contacted: 3
		},
		{
			id: 4,
			name: 'Derrick Dogooder',
			avatar: 'https://www.gravatar.com/avatar/62633663536?d=identicon',
			lastContact: '2018-02-10T21:24:18.479Z',
			contacted: 10
		},
		{
			id: 5,
			name: 'Esther Eddleman',
			avatar: 'https://www.gravatar.com/avatar/72457235223?d=identicon',
			lastContact: '2018-04-01T21:24:18.479Z',
			contacted: 8
		},
		{
			id: 6,
			name: 'Frank Fitzwilly',
			avatar: 'https://www.gravatar.com/avatar/82752858294?d=identicon',
			lastContact: '2018-03-22T21:24:18.479Z',
			contacted: 3
		}
	]
}

// Action Types
export const CONTACT_ADD = 'CONTACT_ADD'
export const CONTACT_DELETE = 'CONTACT_DELETE'
export const CONTACT_UPDATE_LAST_CONTACT = 'CONTACT_UPDATE_LAST_CONTACT'

// Helpers
const millisecondsPerDay = 1000 * 60 * 60 * 24;
const daysBetween = (first, second) => (first.getTime() - second.getTime()) / millisecondsPerDay

// Selectors
export const contactsList = (state) => state.contacts.list
export const contactsOverXDays = (state, over, under) => state.contacts.list.filter(contact => {
	const now = new Date();
	const lastContact = new Date(contact.lastContact);
	const dayDiff = daysBetween(now, lastContact);
	return under ? dayDiff >= over && dayDiff < under : dayDiff > over;
})
export const contactsOver7Days = (state) => contactsOverXDays(state, 7, 14)
export const contactsOver14Days = (state) => contactsOverXDays(state, 14, 30)
export const contactsOver30Days = (state) => contactsOverXDays(state, 30)

// Actions
export const addContact = (contact) => ({
	type: CONTACT_ADD,
	contact
})

export const deleteContact = (contactId) => ({
	type: CONTACT_DELETE,
	contactId
})

export const updateLastContact = (contactId) => ({
	type: CONTACT_UPDATE_LAST_CONTACT,
	contactId
})

// Action Handlers

const ACTION_HANDLERS = {
	[CONTACT_ADD]: (state, action) => ({...state}),
	[CONTACT_DELETE]: (state, action) => ({...state}),
	[CONTACT_UPDATE_LAST_CONTACT]: (state, action) => {
		let list = [...state.list];
		let contactIndex = _findIndex(list, ['id', action.contactId]);
		if (contactIndex !== -1) {
			list[contactIndex] = {
				...list[contactIndex],
				lastContact: new Date().toISOString()
			}
		}
		return {
			...state,
			list
		}
	}
}

// Reducer
export default contactsReducer = (state = initialState, action) => {
	const handler = ACTION_HANDLERS[action.type];

	return handler ? handler(state, action) : state;
}