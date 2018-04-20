import _findIndex from 'lodash/findIndex'

// Initial State
const initialState = {
	list: [
		{
			id: '1',
			company: "LogMeIn",
			emailAddresses: [{
				label: "personal",
				email: "azzoghayyer@gmail.com",
			}],
			familyName: "Zoghayyer",
			givenName: "Ahmed",
			jobTitle: "Bug Squasher",
			middleName: "",
			phoneNumbers: [{
				label: "mobile",
				number: "(444) 444-4444",
			}],
			hasThumbnail: true,
			thumbnailPath: 'https://www.gravatar.com/avatar/1111111111111?d=identicon',
			postalAddresses: [
				{
					street: '123 Fake Street',
					city: 'Sample City',
					state: 'CA',
					region: 'CA',
					postCode: '90210',
					country: 'USA',
					label: 'home'
				}
			],
			birthday: {"year": 1988, "month": 0, "day": 1 }
		},
		{
			id: '2',
			company: "LogMeIn",
			emailAddresses: [{
				label: "personal",
				email: "dillongray@gmail.com",
			}],
			familyName: "Gray",
			givenName: "Dillon",
			jobTitle: "Empty Bucket",
			middleName: "",
			phoneNumbers: [{
				label: "mobile",
				number: "(555) 555-5555",
			}],
			hasThumbnail: true,
			thumbnailPath: 'https://www.gravatar.com/avatar/222222222222?d=identicon',
			postalAddresses: [
				{
					street: '123 Fake Street',
					city: 'Sample City',
					state: 'CA',
					region: 'CA',
					postCode: '90210',
					country: 'USA',
					label: 'home'
				}
			],
			birthday: {"year": 1987, "month": 5, "day": 10 }
		},
		{
			id: '3',
			company: "LogMeIn",
			emailAddresses: [{
				label: "personal",
				email: "zizzo.joseph.k@gmail.com",
			}],
			familyName: "Zizzo",
			givenName: "Joseph",
			jobTitle: "Space Vixen",
			middleName: "",
			phoneNumbers: [{
				label: "mobile",
				number: "(666) 666-6666",
			}],
			hasThumbnail: true,
			thumbnailPath: 'https://www.gravatar.com/avatar/333333333333?d=identicon',
			postalAddresses: [
				{
					street: '123 Fake Street',
					city: 'Sample City',
					state: 'CA',
					region: 'CA',
					postCode: '90210',
					country: 'USA',
					label: 'home'
				}
			],
			birthday: {"year": 1991, "month": 8, "day": 17 }
		},
		{
			id: '4',
			company: "Google",
			emailAddresses: [{
				label: "personal",
				email: "rochellevee@gmail.com",
			}],
			familyName: "Valdez",
			givenName: "Rochelle",
			jobTitle: "Vibe Manager",
			middleName: "",
			phoneNumbers: [{
				label: "mobile",
				number: "(777) 777-7777",
			}],
			hasThumbnail: true,
			thumbnailPath: 'https://www.gravatar.com/avatar/333333333333?d=identicon',
			postalAddresses: [
				{
					street: '123 Fake Street',
					city: 'Sample City',
					state: 'CA',
					region: 'CA',
					postCode: '90210',
					country: 'USA',
					label: 'home'
				}
			],
			birthday: {"year": 1991, "month": 8, "day": 17 }
		},
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