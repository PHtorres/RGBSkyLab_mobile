import IUsuario from '../models/IUsuario';
import API from './API';
import AsyncStorage from '@react-native-community/async-storage';

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

        const Usuarioresposta = await this.api.FazerPostSemToken<IUsuario>('Autenticar/LogarUsuario', obj);

        if (Usuarioresposta) 
        {
            if (Usuarioresposta.listaErros.length === 0) 
            {
                Usuarioresposta.logado = true;
                await this.GuardarUsuarioNoStorage(Usuarioresposta);
            }

            return Usuarioresposta;
        } 
        else 
        {
            return {logado:false, listaErros:['Houve um erro ao tentar se comunicar com o servidor']} as IUsuario;
        }
    }

    private async GuardarUsuarioNoStorage(usuario:IUsuario):Promise<void>{
        const usuarioString = JSON.stringify(usuario);
        await AsyncStorage.setItem('@RGBSKYLAB:USUARIO', usuarioString);
    }

    private async RemoverUsuarioNoStorage():Promise<void>{
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
}