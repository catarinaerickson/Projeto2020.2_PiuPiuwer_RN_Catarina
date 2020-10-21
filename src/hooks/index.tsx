import React from 'react';

import { AuthProvider } from './auth';
import { PiusProvider } from './pius';

const AppProvider: React.FC = ({ children}) => {
    return (
        <AuthProvider>
            <PiusProvider>
                { children }
            </PiusProvider>
        </AuthProvider>
    )
}

export default AppProvider;