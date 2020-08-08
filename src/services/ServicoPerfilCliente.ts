import IPerfilCliente from '../models/IPerfilCliente';
import API from '../services/API';

export default class ServicoPerfilCliente {

    private api: API;

    constructor() {
        this.api = new API();
    }

    public async ObterPerfilCliente(apelidoCliente: string): Promise<IPerfilCliente> {

        const resposta = await this.api
            .FazerGet<IPerfilCliente>(`Contato/ObterContato/${apelidoCliente}`, '');
            
        if (resposta) {
            return resposta;
        }

        return { data: { listaErros: ['Não foi possível obter o perfil do cliente'] } } as IPerfilCliente;
    }
}