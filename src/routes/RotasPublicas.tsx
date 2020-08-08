import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';

const Rotas = createStackNavigator();

const RotasPublicas: React.FC = () => {
    return (
        <Rotas.Navigator initialRouteName="Login"
            screenOptions={{ headerShown:false, cardStyle: { backgroundColor: '#24292e' } }}>
            <Rotas.Screen name="Login" component={Login} />
        </Rotas.Navigator>
    )
}

export default RotasPublicas;