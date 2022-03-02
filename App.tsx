import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import AppNavigator from './src/nav/AppNavigator';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
