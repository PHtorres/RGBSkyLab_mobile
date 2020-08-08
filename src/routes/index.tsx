import React from 'react';
import { View, Text } from 'react-native';

import RotasPublicas from './RotasPublicas';
import RotasPrivadas from './RotasPrivadas';

import { useUsuario } from '../hooks/HUsuario';

const Rotas: React.FC = () => {

    const { usuario } = useUsuario();

    return (
        <>
            {usuario.logado ? <RotasPrivadas /> : <RotasPublicas />}
        </>
    )
}

export default Rotas;