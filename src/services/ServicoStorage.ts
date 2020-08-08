import IUsuario from '../models/IUsuario';
import IConsulta from '../models/IConsulta';
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

    public async GuardarHistoricoConsultaStorage(historico:IConsulta):Promise<void>{
        const historicosSalvos = await this.ObterHistoricoConsultaStorage();
        const historicosSalvosSemRepeticao = historicosSalvos.filter(item => item.cliente !== historico.cliente);
        historicosSalvosSemRepeticao.unshift(historico);
        const historicoString = JSON.stringify(historicosSalvosSemRepeticao);
        await AsyncStorage.setItem('@RGBSKYLAB:HISTORICO:CONSULTA', historicoString);
    }

    public async ObterHistoricoConsultaStorage():Promise<IConsulta[]>{
        const historico = await AsyncStorage.getItem('@RGBSKYLAB:HISTORICO:CONSULTA');
        if(historico){
            return JSON.parse(historico) as IConsulta[];
        }
        return [] as IConsulta[];
    }
}