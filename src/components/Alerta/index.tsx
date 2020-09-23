import React from 'react';
import BotaoPrimario from '../BotaoPrimario';
import Modal from 'react-native-modal';
import { Container, Cabecalho, Titulo, Mensagem } from './styles';

interface AlertaProps {
    titulo: string;
    mensagem: string;
    mostrarAlerta: boolean;
    fecharAlerta(): void;
}

const Alerta: React.FC<AlertaProps> = ({ titulo, mensagem, mostrarAlerta, fecharAlerta }) => {
    return (
        <Modal isVisible={mostrarAlerta}>
            <Container>
                <Cabecalho>
                    <Titulo>{titulo}</Titulo>
                </Cabecalho>
                <Mensagem>{mensagem}</Mensagem>
                <BotaoPrimario habilitado onPress={fecharAlerta}>OK</BotaoPrimario>
            </Container>
        </Modal>
    );
}

export default Alerta;