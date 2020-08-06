import IModulo from '../models/IModulo';
import API from '../services/API';
import ServicoStorage from '../services/ServicoStorage';

export default class ServicoConsultaModulos{

    private api:API;
    private storage:ServicoStorage;

    constructor(){
        this.api = new API();
        this.storage = new ServicoStorage();
    }

    public async ConsultarModulosCliente(apelidoCliente:string):Promise<IModulo[]>{

        const resposta = await this.api
        .FazerGet<IModulo[]>(`PermissaoSistemas/ObterSistemasAutorizados/${apelidoCliente}`, '');

        if(resposta){
            
            await this.storage.GuardarHistoricoConsultaStorage({
                cliente:apelidoCliente,
                listaModulos:resposta
            });

            return resposta;
        }

        return [] as IModulo[];
    }
}