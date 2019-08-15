import React, { Component } from 'react';
import { ActivityIndicator, View, } from 'react-native';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import Store from './src/store/index';
import { PRI_COLOR } from './src/utils/constants/colors';
import { createAppContainer } from 'react-navigation';
import InitSwitchNavigator from './src/navigation/index';


const MainRoot = createAppContainer(InitSwitchNavigator);

const persistor = persistStore(Store);

export default class App extends Component {

  renderLoading = () => {
    <ActivityIndicator
      size={40}
      color={PRI_COLOR}
    />
  }

  render() {
    return (
      <Provider store={Store}>
        <PersistGate persistor={persistor} loading={this.renderLoading()}>
          <MainRoot />
        </PersistGate>
      </Provider>
    )
  }
}