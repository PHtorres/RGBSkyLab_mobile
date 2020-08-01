import IUsuario from '../models/IUsuario';
import API from './API';

export default class ServicoUsuario {
    private api: API;

    constructor() {
        this.api = new API();
    }

    public async LogarUsuario(usuario: string, senha: string): Promise<IUsuario> {

        const resposta = await this.api.FazerPostSemToken<IUsuario>('Autenticar/LogarUsuario', { usuario, senha });

        if (resposta) 
        {
            if (!resposta.listaErros) 
            {
                resposta.logado = true;
            }

            return resposta;
        } 
        else 
        {
            return {} as IUsuario;
        }

    }
}