import IUsuario from '../models/IUsuario';
import IHistoricoConsulta from '../models/IHistoricoConsulta';
import AsyncStorage from '@react-native-community/async-storage';

export default class ServicoStorage {

    public async GuardarUsuarioNoStorage(usuario:IUsuario):Promise<void>{
        const usuarioString = JSON.stringify(usuario);
        await AsyncStorage.setItem('@RGBSKYLAB:USUARIO', usuarioString);
    }

    public async RemoverUsuarioNoStorage():Promise<void>{
        await AsyncStorage.removeItem('@RGBSKYLAB:USUARIO');
    }

    public async ObterUsuarioNoStorage():Promise<IUsuario>{
        const usuarioStorage = await AsyncStorage.getItem('@RGBSKYLAB:USUARIO');
        if(usuarioStorage){
            return JSON.parse(usuarioStorage) as IUsuario;
        }else{
            return {} as IUsuario;
        }
    }

    public async GuardarHistoricoConsultaStorage(historico:IHistoricoConsulta):Promise<void>{
        const historicosSalvos = await this.ObterHistoricoConsultaStorage();
        historicosSalvos.unshift(historico);
        const historicoString = JSON.stringify(historicosSalvos);
        await AsyncStorage.setItem('@RGBSKYLAB:HISTORICO:CONSULTA', historicoString);
    }

    public async ObterHistoricoConsultaStorage():Promise<IHistoricoConsulta[]>{
        const historico = await AsyncStorage.getItem('@RGBSKYLAB:HISTORICO:CONSULTA');
        if(historico){
            return JSON.parse(historico) as IHistoricoConsulta[];
        }
        return [] as IHistoricoConsulta[];
    }
}