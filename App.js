import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import React from 'react';

// CUSTOM IMPORTS
import Routes from './src/routes';
import { colors } from './src/styles';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={colors.whiteSmoke} barStyle="dark-content" />
      <Routes />
    </>
  );
}
