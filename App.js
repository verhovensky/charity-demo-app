import React from 'react';
import {AppState} from 'react-native';
import {useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './navigation/RootNavigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, Store} from './redux/store';

export default function App() {
  const appState = useRef(AppState.currentState);
  AppState.addEventListener('change', nextAppState => {
    if (
      appState.current.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      // console.log('App has come to the foreground!');
    }
    appState.current = nextAppState;
  });
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
