import IUsuario from '../models/IUsuario';
import API from './API';
import ServicoStorage from '../services/ServicoStorage';

export default class ServicoUsuario {

    private api: API;
    private storage:ServicoStorage;

    constructor() {
        this.api = new API();
        this.storage = new ServicoStorage();
    }

    public async LogarUsuario(usuario: string, senha: string): Promise<IUsuario> {

        const obj = {
            usuario,
            senha
        };

        const Usuarioresposta = await this.api.FazerPostSemToken<IUsuario>('Autenticar/LogarUsuario', obj);

        if (Usuarioresposta) 
        {
            if (Usuarioresposta.listaErros.length === 0) 
            {
                Usuarioresposta.logado = true;
                Usuarioresposta.ultimoLogin = new Date();
                await this.storage.GuardarUsuarioNoStorage(Usuarioresposta);
            }

            return Usuarioresposta;
        } 
        else 
        {
            return {logado:false, listaErros:['Houve um erro ao tentar se comunicar com o servidor']} as IUsuario;
        }
    }
}