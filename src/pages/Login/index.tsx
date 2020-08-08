import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {useUsuario} from '../../hooks/HUsuario';

import TituloTela from '../../components/TituloTela';
import LogoRGBSkyLab from '../../components/LogoRGBSkyLab';
import Input from '../../components/Input';
import BotaoPrimario from '../../components/BotaoPrimario';
import BotaoLink from '../../components/BotaoLink';
import InfoVersao from '../../components/InfoVersao';


import { Container, AreaForm, Rodape } from './style';

const Login: React.FC = () => {

    const {FazerLogin} = useUsuario();
    const navigation = useNavigation();
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    const TentarLogin = async (): Promise<void> => {
        
        const resultado = await FazerLogin(usuario, senha);

        if (!resultado.logado) {
            Alert.alert('Ops!', resultado.listaErros[0]);
        }
    }

    const AbrirTelaRecuperarSenha = (): void => {
        navigation.navigate('RecuperarSenha');
    }

    return (
        <Container>
            <LogoRGBSkyLab />
            <AreaForm>
                <TituloTela>Login</TituloTela>
                <Input
                    icone="user"
                    placeholder="Usuário"
                    value={usuario}
                    onChangeText={(texto) => setUsuario(texto)} />
                <Input
                    icone="lock"
                    placeholder="Senha"
                    secureTextEntry
                    value={senha}
                    onChangeText={(texto) => setSenha(texto)} 
                    returnKeyType="send"
                    onSubmitEditing={TentarLogin}/>

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