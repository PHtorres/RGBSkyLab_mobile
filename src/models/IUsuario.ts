interface IUsuario {
    usuario: string;
    senha: string;
    token: string;
    logado: boolean;
    listaErros:string[];
}

export default IUsuario;