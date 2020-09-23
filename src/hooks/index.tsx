import React from 'react';

import { UsuarioProvider } from './HUsuario';
import { AlertaContainer } from './HAlerta';

const AppProvider: React.FC = ({ children }) => {

    return (
        <AlertaContainer>
            <UsuarioProvider>
                {children}
            </UsuarioProvider>
        </AlertaContainer>
    );

}

export default AppProvider;