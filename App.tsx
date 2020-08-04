import React from 'react';
import {
  View,
  Text,
  StatusBar,
} from 'react-native';

import ConsultaModulos from './src/pages/ConsultaModulos';
import Login from './src/pages/Login';
import PerfilCliente from './src/pages/PerfilCliente';


function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#7159c1" />
      <View style={{flex: 1, backgroundColor:'#24292e', padding: 10}}>
        <PerfilCliente />
        <ConsultaModulos />
        <Login />
      </View>
    </>
  );
}


export default App;
