import 'react-native-gesture-handler';
import React from 'react';
import {
  View,
  Text,
  StatusBar,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import AppProvider from './src/hooks';

import Rotas from './src/routes/';


function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#7159c1" />
      <AppProvider>
        <View style={{ flex: 1, backgroundColor: '#24292e', padding: 10 }}>
          <Rotas />
        </View>
      </AppProvider>
    </NavigationContainer>
  );
}


export default App;
