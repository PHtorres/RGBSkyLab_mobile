import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useUsuario } from '../../hooks/HUsuario';
import { useNavigation } from '@react-navigation/native';

import LogoRGBSkyLab from '../LogoRGBSkyLab';

import { Container, UsuarioInfo, AvatarUsuario, TextoAvatarUsuario, TextoUsuarioInfo, } from './style';

const Cabecalho: React.FC = () => {

    const navigation = useNavigation();
    const { usuario, SairUsuario } = useUsuario();

    return (

        <Container>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <LogoRGBSkyLab />
            </TouchableOpacity>
            <UsuarioInfo>
                <AvatarUsuario>
                    <TextoAvatarUsuario>
                        {usuario.usuario.substring(0, 2)}
                    </TextoAvatarUsuario>
                </AvatarUsuario>
                <TextoUsuarioInfo>{usuario.usuario}</TextoUsuarioInfo>
            </UsuarioInfo>
        </Container>

    );
}

export default Cabecalho;