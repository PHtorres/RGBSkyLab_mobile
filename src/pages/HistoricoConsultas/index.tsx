import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import IConsulta from '../../models/IConsulta';
import ServicoStorage from '../../services/ServicoStorage';

import ItemHistoricoConsulta from '../../components/ItemHistoricoConsulta';
import TituloTela from '../../components/TituloTela';

import { Container } from './style';

const HistoricoConsultas: React.FC = () => {

    const [consultas, setConsultas] = useState([] as IConsulta[]);

    useEffect(()=>{
        buscarHistoricos();
    }, []);

    const buscarHistoricos = async (): Promise<void> => {
        const storage = new ServicoStorage();
        setConsultas(await storage.ObterHistoricoConsultaStorage());
    }

    return (
        <Container>
            <TituloTela>Histórico de consultas</TituloTela>
            <FlatList
                data={consultas}
                keyExtractor={item => item.cliente}
                renderItem={item => (
                    <ItemHistoricoConsulta
                        cliente={item.item.cliente}
                        listaModulos={item.item.listaModulos} />
                )}
            />
        </Container>
    );
}

export default HistoricoConsultas;

