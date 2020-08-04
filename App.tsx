import 'react-native-gesture-handler';
import React from 'react';
import {
  View,
  Text,
  StatusBar,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import RotasTeste from './src/routes/RotasTeste';


function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#7159c1" />
      <View style={{ flex: 1, backgroundColor: '#24292e', padding: 10 }}>
        <RotasTeste />
      </View>
    </NavigationContainer>
  );
}


export default App;
