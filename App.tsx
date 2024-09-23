import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Welcome from './src/page/welcome/Welcome';
import { Provider } from 'react-redux';
import store from './src/redux/Store';
import AppNavigation from './src/navigation/AppNavigation';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar
          translucent={true}
          barStyle="dark-content"
          backgroundColor="transparent"
        />
        <AppNavigation/>
      </SafeAreaView>
    </Provider>
);
};

export default App;
