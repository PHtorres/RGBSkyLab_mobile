import React from 'react';
import TituloTela from '../../components/TituloTela';

import {Container} from './style';

const PerfilCliente:React.FC = () => {
    return (
        <Container>
            <TituloTela>Perfil do cliente</TituloTela>
        </Container>
    );
}

export default PerfilCliente;