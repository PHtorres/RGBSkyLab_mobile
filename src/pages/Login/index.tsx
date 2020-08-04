import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import TituloTela from '../../components/TituloTela';
import LogoRGBSkyLab from '../../components/LogoRGBSkyLab';
import Input from '../../components/Input';
import BotaoPrimario from '../../components/BotaoPrimario';
import BotaoLink from '../../components/BotaoLink';
import InfoVersao from '../../components/InfoVersao';

import ServicoUsuario from '../../services/ServicoUsuario';

import { Container, AreaForm, Rodape } from './style';

const Login: React.FC = () => {

    const navigation = useNavigation();
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    const TentarLogin = async (): Promise<void> => {

        const servico = new ServicoUsuario();
        const objUsuario = await servico.LogarUsuario(usuario, senha);
        if (objUsuario.logado) {
            Alert.alert('Deu certo, porra');
        } else {
            Alert.alert(objUsuario.listaErros[0]);
        }
    }

    const AbrirTelaRecuperarSenha = (): void => {
        Alert.alert('FODA-SE');
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
                    onChangeText={(texto) => setSenha(texto)} />

                <BotaoLink onPress={AbrirTelaRecuperarSenha}>Esqueci minha senha</BotaoLink>
                <BotaoPrimario habilitado={true} onPress={TentarLogin}>Entrar</BotaoPrimario>
                <BotaoPrimario
                    habilitado={true}
                    onPress={() => navigation.navigate('ConsultaModulos')}>
                    Ir para tela consulta
                    </BotaoPrimario>
                <BotaoPrimario
                    habilitado={true}
                    onPress={() => navigation.navigate('PerfilCliente')}>
                    Ir para tela perfil cliente
                    </BotaoPrimario>
            </AreaForm>
            <Rodape>
                <InfoVersao />
            </Rodape>
        </Container>
    );
}

export default Login;