import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {useUsuario} from '../../hooks/HUsuario';
import TituloTela from '../../components/TituloTela';

import { Container, Menu, ItemMenu, TextoItemMenu } from './style';

const Home: React.FC = () => {

    const navigation = useNavigation();
    const {SairUsuario} = useUsuario();

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
                <ItemMenu onPress={SairUsuario}>
                    <TextoItemMenu>Sair</TextoItemMenu>
                </ItemMenu>
            </Menu>
        </Container>
    );
}

export default Home;