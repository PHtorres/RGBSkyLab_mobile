import apisauce, { ApisauceInstance } from 'apisauce';

class API{

    private client:ApisauceInstance;
    
    constructor(){
        this.client = apisauce.create({
            baseURL:'http://rgbsys.dyndns.info/apiautoprodautenticada/api/'
        })
    }

    private async PegarToken():Promise<void>{
        this.client.setHeader('Authorization', `Bearer 5465465465456465sdfsdfdsfsdf`);
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
        console.log('teste', consulta);
        return consulta.data;

    }

    public async FazerPostSemToken<T>(url:string, obj:object):Promise<T | undefined>{

        const consulta = await this.client.post<T>(url, obj,);
        console.log('teste', consulta);
        return consulta.data;
        
    }
}

export default API;