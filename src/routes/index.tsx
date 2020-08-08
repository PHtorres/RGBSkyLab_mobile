import React from 'react';

import RotasPublicas from './RotasPublicas';
import RotasPrivadas from './RotasPrivadas';
import TelaCarregando from '../components/TelaCarregando';

import { useUsuario } from '../hooks/HUsuario';

const Rotas: React.FC = () => {

    const { usuario, carregando } = useUsuario();

    if (carregando) 
    {
        return <TelaCarregando />
    }

    if(usuario.logado)
    {
        return <RotasPrivadas/>
    }
    
    else
    {
        return <RotasPublicas/>
    }
}

export default Rotas;