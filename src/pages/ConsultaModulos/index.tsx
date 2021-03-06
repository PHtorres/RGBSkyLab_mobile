import React, { useState } from 'react';
import { FlatList, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import IModulo from '../../models/IModulo';
import ServicoConsultaModulos from '../../services/ServicoConsultaModulos';

import TituloTela from '../../components/TituloTela';
import Input from '../../components/Input';
import BotaoPrimario from '../../components/BotaoPrimario';
import ItemConsulta from '../../components/ItemConsulta';

import { Container, AreaResultado, TituloResultado } from './style';

const ConsultaModulos: React.FC = () => {

    const navigation = useNavigation();
    const [modulos, setModulos] = useState([] as IModulo[]);
    const [apelidoCliente, setApelidoCliente] = useState('');

    const RealizarBusca = async (): Promise<void> => {
        const servicoConsultaModulos = new ServicoConsultaModulos();
        setModulos(await servicoConsultaModulos.ConsultarModulosCliente(apelidoCliente));
        Keyboard.dismiss();
    }

    return (
        <Container>
            <TituloTela>Consulta módulos</TituloTela>
            <Input
                icone="search"
                placeholder="Digite o apelido do cliente"
                onChangeText={(texto) => setApelidoCliente(texto)} />

            <BotaoPrimario habilitado={true} onPress={RealizarBusca}>Buscar</BotaoPrimario>
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