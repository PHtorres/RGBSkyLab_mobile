import React from 'react';

import { UsuarioProvider } from './HUsuario';

const AppProvider: React.FC = ({ children }) => {

    return (
        <UsuarioProvider>
            {children}
        </UsuarioProvider>
    );

}

export default AppProvider;