import React from 'react';
import { useNavigation } from '@react-navigation/native';

import TituloTela from '../../components/TituloTela';

import { Container, Menu, ItemMenu, TextoItemMenu } from './style';

const Home: React.FC = () => {

    const navigation = useNavigation();

    return (
        <Container>
            <TituloTela>O que deseja consultar?</TituloTela>
            <Menu>
                <ItemMenu onPress={() => navigation.navigate('ConsultaModulos')}>
                    <TextoItemMenu>Consulta módulos</TextoItemMenu>
                </ItemMenu>
                <ItemMenu onPress={() => navigation.navigate('HistoricoConsultas')}>
                    <TextoItemMenu>Histórico de consultas</TextoItemMenu>
                </ItemMenu>
                <ItemMenu onPress={() => navigation.navigate('PerfilCliente')}>
                    <TextoItemMenu>Perfil do cliente</TextoItemMenu>
                </ItemMenu>
            </Menu>
        </Container>
    );
}

export default Home;