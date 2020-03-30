import React, {useEffect} from 'react';
import {Text, SafeAreaView, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {useScreens} from 'react-native-screens';
import KorobookNavigator from './navigation/KorobookNavigator';
import {Provider} from 'react-redux';
import store from './store/store';

useScreens();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <>
      <Provider store={store}>
        <KorobookNavigator />
      </Provider>
    </>
  );
};

export default App;
