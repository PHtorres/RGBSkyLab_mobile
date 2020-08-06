import IUsuario from '../models/IUsuario';
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
}