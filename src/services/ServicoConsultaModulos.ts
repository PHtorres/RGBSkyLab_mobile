import IModulo from '../models/IModulo';
import API from '../services/API';

export default class ServicoConsultaModulos{

    private api:API;

    constructor(){
        this.api = new API();
    }

    public async ConsultarModulosCliente(apelidoCliente:string):Promise<IModulo[]>{

        const resposta = await this.api
        .FazerGet<IModulo[]>(`PermissaoSistemas/ObterSistemasAutorizados/${apelidoCliente}`, '');

        if(resposta){
            return resposta;
        }

        return [] as IModulo[];
    }
}