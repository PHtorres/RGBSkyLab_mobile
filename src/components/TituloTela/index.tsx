import React from 'react';
import {Container, Titulo} from './style';

const TituloTela:React.FC = ({children}) =>{
    return(
        <Container>
            <Titulo>
                {children}
            </Titulo>
        </Container>
    );
}

export default TituloTela;