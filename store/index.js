import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [logger]
const enhancers = []
const initialState = {}
const store = createStore(
	rootReducer,
	initialState,
	composeWithDevTools(
		applyMiddleware(...middleware),
		...enhancers
	)
)

export default store