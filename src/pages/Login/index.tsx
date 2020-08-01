import React from 'react';
import { Alert } from 'react-native';

import TituloTela from '../../components/TituloTela';
import LogoRGBSkyLab from '../../components/LogoRGBSkyLab';
import Input from '../../components/Input';
import BotaoPrimario from '../../components/BotaoPrimario';
import BotaoLink from '../../components/BotaoLink';
import InfoVersao from '../../components/InfoVersao';

import ServicoUsuario from '../../services/ServicoUsuario';

import { Container, AreaForm, Rodape } from './style';

const Login: React.FC = () => {

    const TentarLogin = async (): Promise<void> => {
        const servico = new ServicoUsuario();
        const usuario = await servico.LogarUsuario('ph', '69174');
        console.log('user', usuario);
    }

    const AbrirTelaRecuperarSenha = (): void => {
        Alert.alert('FODA-SE');
    }

    return (
        <Container>
            <LogoRGBSkyLab />
            <AreaForm>
                <TituloTela>Login</TituloTela>
                <Input icone="user" placeholder="Usuário" />
                <Input icone="lock" placeholder="Senha" secureTextEntry />
                <BotaoLink onPress={AbrirTelaRecuperarSenha}>Esqueci minha senha</BotaoLink>
                <BotaoPrimario habilitado={true} onPress={TentarLogin}>Entrar</BotaoPrimario>
            </AreaForm>
            <Rodape>
                <InfoVersao />
            </Rodape>
        </Container>
    );
}

export default Login;