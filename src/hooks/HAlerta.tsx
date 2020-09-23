import React, { createContext, useCallback, useState, useContext } from 'react';
import Alerta from '../components/Alerta';

interface IAlertaContexto {
    mostrarMensagem(titulo: string, mensagens: string[]): void;
}

const AlertaContexto = createContext<IAlertaContexto>({} as IAlertaContexto);

export const AlertaContainer: React.FC = ({ children }) => {

    const [alertaVisivel, setAlertaVisivel] = useState(false);
    const [mensagens, setMensagens] = useState([] as string[]);
    const [titulo, setTitulo] = useState('');

    const mostrarMensagem = useCallback((titulo: string,  mensagens: string[]) => {
        setTitulo(titulo);
        setMensagens(mensagens);
        setAlertaVisivel(true);
    }, []);

    const fecharMensagem = useCallback(() => {
        setAlertaVisivel(false);
    }, []);

    return (
        <AlertaContexto.Provider value={{ mostrarMensagem }}>
            <>
                {children}
                <Alerta
                    fecharAlerta={fecharMensagem}
                    mensagens={mensagens}
                    titulo={titulo}
                    mostrarAlerta={alertaVisivel} />
            </>
        </AlertaContexto.Provider>
    )

}

export const useAlerta = (): IAlertaContexto => {
    const contexto = useContext(AlertaContexto);
    return contexto;
}