import React, { useState } from 'react';
import { FlatList } from 'react-native';
import Icones from 'react-native-vector-icons/AntDesign';


import IConsulta from '../../models/IConsulta';

import ItemConsulta from '../ItemConsulta';


import { Container, AreaApelidoCliente, TextoApelidoCliente } from './style';

const ItemHistoricoConsulta: React.FC<IConsulta> = ({ cliente, listaModulos }) => {

    const [exibeModulos, setExibeModulos] = useState(false);

    return (
        <Container>
            <AreaApelidoCliente onPress={() => setExibeModulos(!exibeModulos)}>
                <TextoApelidoCliente>{cliente}</TextoApelidoCliente>
                <Icones name={exibeModulos ? "up" : "down"} size={25} color="#959da5" />
            </AreaApelidoCliente>
            {exibeModulos &&
                <FlatList
                    data={listaModulos}
                    keyExtractor={item => item.codigo.toString()}
                    renderItem={item => (
                        <ItemConsulta codigo={item.item.codigo} descricao={item.item.descricao} />
                    )}
                />}
        </Container>
    );
}

export default ItemHistoricoConsulta;

