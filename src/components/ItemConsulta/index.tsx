import React from 'react';
import {Text} from 'react-native';
import IModulo from '../../models/IModulo';

import { Container, TextoItem } from './style';

const ItemConsulta: React.FC<IModulo> = ({codigo, descricao}) => {

    return (
        <Container>
            <TextoItem>{codigo}</TextoItem>
            <TextoItem>{descricao}</TextoItem>
        </Container>
    );
}

export default ItemConsulta;