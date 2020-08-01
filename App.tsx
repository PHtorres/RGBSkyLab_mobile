import React from 'react';
import {
  View,
  Text,
  StatusBar,
} from 'react-native';

import Login from './src/pages/Login';


function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#7159c1" />
      <View style={{flex: 1, backgroundColor:'#24292e', padding: 10}}>
        <Login />
      </View>
    </>
  );
}


export default App;
