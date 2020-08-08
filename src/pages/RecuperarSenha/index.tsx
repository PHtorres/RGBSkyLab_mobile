import React from 'react';
import { useNavigation } from '@react-navigation/native';

import LogoRGBSkylab from '../../components/LogoRGBSkyLab';
import TituloTela from '../../components/TituloTela';
import Input from '../../components/Input';
import BotaoPrimario from '../../components/BotaoPrimario';
import BotaoLink from '../../components/BotaoLink';

import { Container } from './style';

const RecuperarSenha: React.FC = () => {

    const navigation = useNavigation();

    return (
        <Container>
            <LogoRGBSkylab />
            <TituloTela>Recuperar senha</TituloTela>
            <Input icone="mail" placeholder="Informe seu e-mail" />
            <BotaoPrimario habilitado={true}>Solicitar senha</BotaoPrimario>
            <BotaoLink onPress={() => navigation.goBack()}>Voltar para Login</BotaoLink>
        </Container>
    );
}

export default RecuperarSenha;