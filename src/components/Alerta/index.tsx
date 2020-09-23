import React from 'react';
import BotaoPrimario from '../BotaoPrimario';
import Modal from 'react-native-modal';
import { Container, Cabecalho, Titulo, Mensagem } from './styles';

interface AlertaProps {
    titulo: string;
    mensagens: string[];
    mostrarAlerta: boolean;
    fecharAlerta(): void;
}

const Alerta: React.FC<AlertaProps> = ({ titulo, mensagens, mostrarAlerta, fecharAlerta }) => {
    return (
        <Modal isVisible={mostrarAlerta}
            animationIn="slideInUp"
            animationInTiming={1000}
            animationOut="slideOutRight"
            animationOutTiming={250}>
            <Container>
                <Cabecalho>
                    <Titulo>{titulo}</Titulo>
                </Cabecalho>
                {mensagens?.map(item => (<Mensagem key={item}>{item}</Mensagem>))}
                <BotaoPrimario habilitado onPress={fecharAlerta}>OK</BotaoPrimario>
            </Container>
        </Modal>
    );
}

export default Alerta;