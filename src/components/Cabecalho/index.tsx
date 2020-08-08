import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useUsuario } from '../../hooks/HUsuario';
import { useNavigation } from '@react-navigation/native';

import LogoRGBSkyLab from '../LogoRGBSkyLab';

import { Container, BotaoSair, UsuarioInfo, TextoUsuarioInfo, TextoBotaoSair } from './style';

const Cabecalho: React.FC = () => {

    const navigation = useNavigation();
    const { usuario, SairUsuario } = useUsuario();

    return (

        <Container>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <LogoRGBSkyLab />
            </TouchableOpacity>
            <UsuarioInfo>
                <TextoUsuarioInfo>{`Bem vindo, ${usuario.usuario}`}</TextoUsuarioInfo>
                <BotaoSair onPress={SairUsuario}>
                    <TextoBotaoSair>Sair</TextoBotaoSair>
                </BotaoSair>
            </UsuarioInfo>
        </Container>

    );
}

export default Cabecalho;