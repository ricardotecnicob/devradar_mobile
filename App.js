import React from 'react';
import { StyleSheet, Text, View, StatusBar, YellowBox } from 'react-native';
import { Updates } from 'expo';

import Routes from './routes';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
]);

YellowBox.ignoreWarnings([
  'Cannot connect to the Metro server.'
]);

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7D40E7" />
      <Routes />
    </>
  );
}
