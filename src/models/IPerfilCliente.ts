interface IPerfilCliente {
    data: {
        apelido: string;
        numeroUsuarios: number;
        faturaRisco: boolean;
        listaErros: string[];
    }
}

export default IPerfilCliente;