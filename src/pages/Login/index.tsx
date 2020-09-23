import React, { useState } from 'react';
import { Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useUsuario } from '../../hooks/HUsuario';

import TituloTela from '../../components/TituloTela';
import LogoRGBSkyLab from '../../components/LogoRGBSkyLab';
import Input from '../../components/Input';
import BotaoPrimario from '../../components/BotaoPrimario';
import BotaoLink from '../../components/BotaoLink';
import InfoVersao from '../../components/InfoVersao';
import {useAlerta} from '../../hooks/HAlerta';

import { Container, AreaForm, Rodape } from './style';

const Login: React.FC = () => {

    const { FazerLogin } = useUsuario();
    const navigation = useNavigation();
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [textoBotao, setTextoBotao] = useState('Entrar');
    const {mostrarMensagem} = useAlerta();

    const TentarLogin = async (): Promise<void> => {
        Keyboard.dismiss();
        setTextoBotao('Tentando login...');
        const resultado = await FazerLogin(usuario, senha);

        if (!resultado.logado) {
            mostrarMensagem('Atenção!', resultado.listaErros);
        }else{
            mostrarMensagem(`Bem vindo, ${resultado.usuario}`, []);
        }

        setTextoBotao('Entrar');
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
                    onSubmitEditing={TentarLogin} />

                <BotaoLink onPress={AbrirTelaRecuperarSenha}>Esqueci minha senha</BotaoLink>
                <BotaoPrimario habilitado={true} onPress={TentarLogin}>{textoBotao}</BotaoPrimario>
            </AreaForm>
            <Rodape>
                <InfoVersao />
            </Rodape>
        </Container>
    );
}

export default Login;