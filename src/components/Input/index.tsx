import React, {useState} from 'react';
import { TextInput, TextInputProps } from 'react-native';
import FeatherIcones from 'react-native-vector-icons/Feather';

import { Container, CaixaTexto } from './style';


interface InputProps extends TextInputProps {
    icone: string;
}

const Input: React.FC<InputProps> = ({ icone, ...rest }) => {

    const [focado, setFocado] = useState(false);

    return (
        <Container focado={focado}>
            <FeatherIcones name={icone} size={25} color={focado?'#7159c1':'#959da5'} />
            <CaixaTexto 
            {...rest} 
            placeholderTextColor="#959da5"
            onFocus={() => setFocado(true)}
            onBlur={() => setFocado(false)}/>
        </Container>
    )
}

export default Input;