import React from 'react';
import {Text} from 'react-native';
import IItemConsulta from '../../../models/IItemConsulta';

import { Container, TextoItem } from './style';

const ItemConsulta: React.FC<IItemConsulta> = ({codigo, descricao}) => {

    return (
        <Container>
            <TextoItem>{codigo}</TextoItem>
            <TextoItem>{descricao}</TextoItem>
        </Container>
    );
}

export default ItemConsulta;