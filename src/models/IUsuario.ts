interface IUsuario {
    usuario: string;
    senha: string;
    token: string;
    logado: boolean;
    listaErros:string[];
    ultimoLogin:Date;
}

export default IUsuario;