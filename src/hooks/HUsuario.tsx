import React, { createContext, useCallback, useState, useContext, useEffect } from 'react';
import IUsuario from '../models/IUsuario';
import ServicoUsuario from '../services/ServicoUsuario';
import ServicoStorage from '../services/ServicoStorage';

interface IUsuarioContexto {
    usuario: IUsuario;
    FazerLogin(usuario: string, senha: string): Promise<IUsuario>;
    SairUsuario(): Promise<void>;
}

const UsuarioContexto = createContext<IUsuarioContexto>({} as IUsuarioContexto);

export const UsuarioProvider: React.FC = ({ children }) => {

    const servicoUsuario = new ServicoUsuario();
    const storage = new ServicoStorage();

    useEffect(()=>{
        PegarDadosUsuario();
    }, []);


    const PegarDadosUsuario = async ():Promise<void> => {
        const usuarioStorage = await storage.ObterUsuarioNoStorage();
        setDadosUsuario(usuarioStorage);
    }


    const [dadosUsuario, setDadosUsuario] = useState({} as IUsuario);

    const FazerLogin = useCallback(async (usuario: string, senha: string): Promise<IUsuario> => {
    
        const resultado = await servicoUsuario.LogarUsuario(usuario, senha);
        if (resultado.logado) {
            setDadosUsuario(resultado);
        }

        return resultado;

    }, []);

    const SairUsuario = useCallback(async (): Promise<void> => {

        await storage.RemoverUsuarioNoStorage();
        setDadosUsuario({} as IUsuario);

    }, []);

    return (
        <UsuarioContexto.Provider value={{ usuario: dadosUsuario, FazerLogin, SairUsuario }}>
            {children}
        </UsuarioContexto.Provider>
    )

}

export const useUsuario = (): IUsuarioContexto => {
    const contexto = useContext(UsuarioContexto);
    return contexto;
}