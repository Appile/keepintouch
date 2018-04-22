import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Provider } from 'react-redux'
import store from './store'
import RootStack from './root-stack'

export default class App extends React.Component {
  render = () => (
    <Provider store={store}>
      <View style={styles.container}>
        <RootStack />
      </View>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F8',
  },
})
