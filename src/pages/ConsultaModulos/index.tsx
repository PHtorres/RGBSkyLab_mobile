import React from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ServicoUsuario from '../../services/ServicoUsuario';

import TituloTela from '../../components/TituloTela';
import Input from '../../components/Input';
import BotaoPrimario from '../../components/BotaoPrimario';
import ItemConsulta from './ItemConsulta';

import { Container, AreaResultado, TituloResultado } from './style';

const ConsultaModulos: React.FC = () => {

    const navigation = useNavigation();

    const RealizarBusca = async (): Promise<void> => {
        const servico = new ServicoUsuario();
        const usuario = await servico.ObterUsuarioNoStorage();
        console.log(usuario);
    }

    const modulos = [
        {
            codigo: 56,
            descricao: 'GER3 - CAP'
        },
        {
            codigo: 48,
            descricao: 'GER3 - Contábil'
        },
        {
            codigo: 36,
            descricao: 'GER3 - CAV'
        },
        {
            codigo: 35,
            descricao: 'GER3 - CAV'
        },
        {
            codigo: 34,
            descricao: 'GER3 - CAV'
        },
        {
            codigo: 33,
            descricao: 'GER3 - CAV'
        },
        {
            codigo: 32,
            descricao: 'GER3 - CAV'
        },
        {
            codigo: 31,
            descricao: 'GER3 - CAV'
        },
        {
            codigo: 30,
            descricao: 'GER3 - CAV'
        },
        {
            codigo: 29,
            descricao: 'GER3 - CAV'
        }
    ];

    return (
        <Container>
            <TituloTela>Consulta módulos</TituloTela>
            <Input icone="search" placeholder="Digite o apelido do cliente" />
            <BotaoPrimario habilitado={true} onPress={RealizarBusca}>Buscar</BotaoPrimario>
            <BotaoPrimario
                habilitado={true}
                onPress={() => navigation.goBack()}>Voltar para login
            </BotaoPrimario>
            <AreaResultado>
                <TituloResultado>Resultado:</TituloResultado>
                <FlatList
                    data={modulos}
                    keyExtractor={item => item.codigo.toString()}
                    renderItem={item =>
                        (<ItemConsulta codigo={item.item.codigo}
                            descricao={item.item.descricao} />)}
                />
            </AreaResultado>
        </Container>
    );
}

export default ConsultaModulos;