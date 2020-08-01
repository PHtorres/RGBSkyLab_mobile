import React from 'react';
import { View, Text, Alert } from 'react-native';

import TituloTela from '../../components/TituloTela';
import LogoRGBSkyLab from '../../components/LogoRGBSkyLab';
import Input from '../../components/Input';
import BotaoPrimario from '../../components/BotaoPrimario';

import { Container, AreaForm } from './style';

const Login: React.FC = () => {

    const TentarLogin = (): void => {
        Alert.alert('TENTAR LOGIN');
    }

    return (
        <Container>
            <LogoRGBSkyLab />
            <TituloTela>Login</TituloTela>
            <AreaForm>
                <Input icone="user" placeholder="Usuário" />
                <Input icone="lock" placeholder="Senha" secureTextEntry />
                <BotaoPrimario habilitado={true} onPress={TentarLogin}>Entrar</BotaoPrimario>
            </AreaForm>
        </Container>
    );
}

export default Login;