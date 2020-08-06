import React from 'react';
import TituloTela from '../../components/TituloTela';
import { Container, Menu, ItemMenu, TextoItemMenu } from './style';

const Home: React.FC = () => {
    return (
        <Container>
            <TituloTela>O que deseja consultar?</TituloTela>
            <Menu>
                <ItemMenu>
                    <TextoItemMenu>Nova consulta</TextoItemMenu>
                </ItemMenu>
                <ItemMenu>
                    <TextoItemMenu>Histórico de consultas</TextoItemMenu>
                </ItemMenu>
                <ItemMenu>
                    <TextoItemMenu>Perfil do cliente</TextoItemMenu>
                </ItemMenu>
            </Menu>
        </Container>
    );
}

export default Home;