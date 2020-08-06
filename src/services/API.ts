import apisauce, { ApisauceInstance } from 'apisauce';
import ServicoStorage from '../services/ServicoStorage';

class API{

    private client:ApisauceInstance;
    private storage:ServicoStorage;
    
    constructor(){
        this.client = apisauce.create({
            baseURL:'http://rgbsys.dyndns.info/apiautoprodautenticada/api/'
        });

        this.storage = new ServicoStorage();
    }

    private async PegarToken():Promise<void>{
        const usuario = await this.storage.ObterUsuarioNoStorage();
        this.client.setHeader('Authorization', `Bearer ${usuario.token}`);
    }

    public async FazerGet<T>(url:string, parametros:string):Promise<T | undefined>{

        await this.PegarToken();
        const consulta = await this.client.get<T>(url, parametros);
        return consulta.data;

    }

    public async FazerPost<T>(url:string, obj:object):Promise<T | undefined>{

        await this.PegarToken();
        const consulta = await this.client.post<T>(url, obj);
        return consulta.data;
        
    }

    public async FazerGetSemToken<T>(url:string, parametros:string):Promise<T | undefined>{

        const consulta = await this.client.get<T>(url, parametros);
        return consulta.data;

    }

    public async FazerPostSemToken<T>(url:string, obj:object):Promise<T | undefined>{

        const consulta = await this.client.post<T>(url, obj,);
        return consulta.data;
        
    }
}

export default API;