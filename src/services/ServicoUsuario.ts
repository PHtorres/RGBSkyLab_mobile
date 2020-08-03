import IUsuario from '../models/IUsuario';
import API from './API';

export default class ServicoUsuario {

    private api: API;

    constructor() {
        this.api = new API();
    }

    public async LogarUsuario(usuario: string, senha: string): Promise<IUsuario> {

        const obj = {
            usuario: 'ph',
            senha: '69174'
        };


        const resposta = await this.api.FazerPostSemToken<IUsuario>('Autenticar/LogarUsuario', obj);

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

        // fetch('https://gercloud2.rgbsys.com.br/APIMeusRecebiveis_BMA/api/Shared/Teste-Servidor')
        // .then(response => console.log('resposta', response)).catch(erro => console.log('fetch deu erro', erro));

        // fetch('http://rgbsys.dyndns.info/apiautoprodautenticada/api/Autenticar/LogarUsuario', {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(obj)
        // }).then(response => console.log('resposta', response)).catch(erro => console.log('fetch deu erro', erro));

        // const teste = await this.api.FazerGetSemToken('Shared/Teste-Servidor', '');

        return {} as IUsuario;

    }
}