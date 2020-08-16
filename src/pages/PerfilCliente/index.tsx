import React, { useState } from 'react';
import { Keyboard } from 'react-native';
import TituloTela from '../../components/TituloTela';
import Input from '../../components/Input';
import BotaoPrimario from '../../components/BotaoPrimario';

import IPerfilCliente from '../../models/IPerfilCliente';
import ServicoPerfilCliente from '../../services/ServicoPerfilCliente';

import { Container, AreaResultadoPerfil, TextoResultado, TextoTituloResultado } from './style';

const PerfilCliente: React.FC = () => {

    const [resultadoPerfil, setResultadoPerfil] = useState({ data: {} } as IPerfilCliente);
    const [apelidoCliente, setApelidoCliente] = useState('');

    const BuscarPerfilCliente = async (): Promise<void> => {
        const servico = new ServicoPerfilCliente();
        setResultadoPerfil(await servico.ObterPerfilCliente(apelidoCliente));
        Keyboard.dismiss();
    }

    return (
        <Container>
            <TituloTela>Perfil do cliente</TituloTela>
            <Input
                icone="search"
                placeholder="Digite o apelido do cliente"
                onChangeText={(texto) => setApelidoCliente(texto)} />

            <BotaoPrimario habilitado onPress={BuscarPerfilCliente}>Buscar perfil</BotaoPrimario>

            <TextoTituloResultado>
                Resultado: {resultadoPerfil.data?.listaErros ? resultadoPerfil.data?.listaErros[0] : ''}
            </TextoTituloResultado>

            {resultadoPerfil.data.apelido &&
                <AreaResultadoPerfil>
                    <TextoResultado>{resultadoPerfil.data.apelido}</TextoResultado>
                    <TextoResultado>Número de usuários: {resultadoPerfil.data.numeroUsuarios}</TextoResultado>
                    <TextoResultado>Fatura Risco: {resultadoPerfil.data.faturaRisco ? 'Sim' : 'Não'}</TextoResultado>
                </AreaResultadoPerfil>
            }
        </Container>
    );
}

export default PerfilCliente;