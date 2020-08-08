import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';
import RecuperarSenha from '../pages/RecuperarSenha';

const Rotas = createStackNavigator();

const RotasPublicas: React.FC = () => {
    return (
        <Rotas.Navigator initialRouteName="Login"
            screenOptions={{ headerShown:false, cardStyle: { backgroundColor: '#24292e' } }}>
            <Rotas.Screen name="Login" component={Login} />
            <Rotas.Screen name="RecuperarSenha" component={RecuperarSenha} />
        </Rotas.Navigator>
    )
}

export default RotasPublicas;