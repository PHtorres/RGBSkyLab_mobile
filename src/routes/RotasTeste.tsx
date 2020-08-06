import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';
import Home from '../pages/Home';
import ConsultaModulos from '../pages/ConsultaModulos';
import PerfilCliente from '../pages/PerfilCliente';

const Rotas = createStackNavigator();

const RotasTeste: React.FC = () => {
    return (
        <Rotas.Navigator initialRouteName="Login"
            screenOptions={{ headerShown:false, cardStyle: { backgroundColor: '#24292e' } }}>
            <Rotas.Screen name="Login" component={Login} />
            <Rotas.Screen name="Home" component={Home} />
            <Rotas.Screen name="ConsultaModulos" component={ConsultaModulos} />
            <Rotas.Screen name="PerfilCliente" component={PerfilCliente} />
        </Rotas.Navigator>
    )
}

export default RotasTeste;