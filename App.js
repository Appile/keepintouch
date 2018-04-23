import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import RootStack from './root-stack'

export default class App extends React.Component {
  render = () => (
    <Provider store={store}>
      <RootStack />
    </Provider>
  )
}
