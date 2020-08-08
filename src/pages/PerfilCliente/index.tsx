import React from 'react';
import TituloTela from '../../components/TituloTela';
import Input from '../../components/Input';
import BotaoPrimario from '../../components/BotaoPrimario';

import ServicoPerfilCliente from '../../services/ServicoPerfilCliente';

import { Container, AreaResultadoPerfil, TextoResultado, TextoTituloResultado } from './style';

const PerfilCliente: React.FC = () => {

    const BuscarPerfilCliente = async (): Promise<void> => {

    }

    return (
        <Container>
            <TituloTela>Perfil do cliente</TituloTela>
            <Input icone="search" placeholder="Digite o apelido do cliente" />
            <BotaoPrimario habilitado onPress={BuscarPerfilCliente}>Buscar perfil</BotaoPrimario>
            <TextoTituloResultado>Resultado:</TextoTituloResultado>
            <AreaResultadoPerfil>
                <TextoResultado>CRESCER</TextoResultado>
                <TextoResultado>Número de usuários: 38</TextoResultado>
                <TextoResultado>Fatura Risco: Sim</TextoResultado>
            </AreaResultadoPerfil>
        </Container>
    );
}

export default PerfilCliente;