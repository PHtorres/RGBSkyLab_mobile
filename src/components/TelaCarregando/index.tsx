import React from 'react';

import LogoRGBSkyLab from '../LogoRGBSkyLab';

import {Container,Texto} from './style';

const TelaCarregando:React.FC = () =>{
    return (
        <Container>
            <LogoRGBSkyLab/>
            <Texto>Carregando informações...</Texto>
        </Container>
    );
}

export default TelaCarregando;