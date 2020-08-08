import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import ConsultaModulos from '../pages/ConsultaModulos';
import HistoricoConsultas from '../pages/HistoricoConsultas';
import PerfilCliente from '../pages/PerfilCliente';

const Rotas = createStackNavigator();

const RotasTeste: React.FC = () => {
    return (
        <Rotas.Navigator initialRouteName="Home"
            screenOptions={{ headerShown:false, cardStyle: { backgroundColor: '#24292e' } }}>
            <Rotas.Screen name="Home" component={Home} />
            <Rotas.Screen name="ConsultaModulos" component={ConsultaModulos} />
            <Rotas.Screen name="HistoricoConsultas" component={HistoricoConsultas} />
            <Rotas.Screen name="PerfilCliente" component={PerfilCliente} />
        </Rotas.Navigator>
    )
}

export default RotasTeste;