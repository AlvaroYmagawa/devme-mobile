import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// CUSTOM IMPORTS
import './config/ReactotronConfig';
import Routes from './routes';
import { colors } from './styles';

import { persistor, store } from './store';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar backgroundColor={colors.primaryDark} />
        <Routes />
      </PersistGate>
    </Provider>
  );
}
