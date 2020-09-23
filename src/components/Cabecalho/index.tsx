import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useUsuario } from '../../hooks/HUsuario';
import { useNavigation } from '@react-navigation/native';
import { useAlerta } from '../../hooks/HAlerta';

import LogoRGBSkyLab from '../LogoRGBSkyLab';

import { Container, UsuarioInfo, AvatarUsuario, TextoAvatarUsuario, TextoUsuarioInfo, } from './style';

const Cabecalho: React.FC = () => {

    const navigation = useNavigation();
    const { usuario } = useUsuario();
    const { mostrarMensagem } = useAlerta();
    const options = {year: 'numeric', month: '2-digit', day: '2-digit'};
    const dataUltimoLogin = new Date(usuario.ultimoLogin);

    return (

        <Container>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <LogoRGBSkyLab />
            </TouchableOpacity>
            <UsuarioInfo onPress={() => mostrarMensagem(
                `Olá, ${usuario.usuario}`,
                [
                    `Último login: ${dataUltimoLogin.toLocaleDateString('pt-BR', options)} ${dataUltimoLogin.toLocaleTimeString('pt-BR')}`,
                    `Valor do App: ${Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(150)}`,
                ]
            )}>
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