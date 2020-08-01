import React from 'react';
import { TouchableOpacityProps, Text } from 'react-native';

import { Container, TextoBotao } from './style';

interface BotaoPrimarioProps extends TouchableOpacityProps {
    habilitado: boolean;
}


const BotaoPrimario: React.FC<BotaoPrimarioProps> = ({ children, habilitado, ...rest }) => {
    return (
        <Container habilitado={habilitado} disabled={!habilitado} {...rest}>
            <TextoBotao>
                {children}
            </TextoBotao>
        </Container>
    );
}

export default BotaoPrimario;