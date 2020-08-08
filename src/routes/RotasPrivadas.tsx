import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import ConsultaModulos from '../pages/ConsultaModulos';
import HistoricoConsultas from '../pages/HistoricoConsultas';
import PerfilCliente from '../pages/PerfilCliente';

import Cabecalho from '../components/Cabecalho';

const Rotas = createStackNavigator();

const RotasPrivadas: React.FC = () => {
    return (
        <>
            <Rotas.Navigator initialRouteName="Home"
                screenOptions={{ header:() => <Cabecalho/>,  cardStyle: { backgroundColor: '#24292e' } }}>
                <Rotas.Screen name="Home" component={Home} />
                <Rotas.Screen name="ConsultaModulos" component={ConsultaModulos} />
                <Rotas.Screen name="HistoricoConsultas" component={HistoricoConsultas} />
                <Rotas.Screen name="PerfilCliente" component={PerfilCliente} />
            </Rotas.Navigator>
        </>
    )
}

export default RotasPrivadas;