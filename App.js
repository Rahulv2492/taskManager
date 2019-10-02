/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  View,
  StatusBar
} from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/configureStore';

import RootNavigator from './src/components/RootNavigator'

const App = () => {
  return (
    <Provider store={store}>
    <View style={{flex:1}}>
      <StatusBar barStyle="dark-content" />
      {/* <SafeAreaView> */}
        <RootNavigator/>
      {/* </SafeAreaView> */}
    </View>
    </Provider>
  );
};


export default App;
