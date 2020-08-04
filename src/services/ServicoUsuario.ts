import IUsuario from '../models/IUsuario';
import API from './API';

export default class ServicoUsuario {

    private api: API;

    constructor() {
        this.api = new API();
    }

    public async LogarUsuario(usuario: string, senha: string): Promise<IUsuario> {

        const obj = {
            usuario,
            senha
        };

        const resposta = await this.api.FazerPostSemToken<IUsuario>('Autenticar/LogarUsuario', obj);

        if (resposta) 
        {
            if (resposta.listaErros.length === 0) 
            {
                resposta.logado = true;
            }

            return resposta;
        } 
        else 
        {
            return {logado:false, listaErros:['Houve um erro ao tentar se comunicar com o servidor']} as IUsuario;
        }
    }
}