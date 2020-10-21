import React, { createContext, useCallback, useContext, useEffect, useState} from 'react';

import api from '../services/api';

import {PiuObject} from '../interfaces'

interface PiusContextData {
    pius: PiuObject[];
    SetPius(pius: PiuObject[]): void ;
}

const PiusContext = createContext<PiusContextData>({} as PiusContextData);

export const PiusProvider: React.FC = ({children}) => {

    const [pius, SetPius] = useState<PiuObject[]>([]);

    useEffect(() => {
        function getPius() {
            api.get('/pius/').then(response => {
                SetPius(response.data);        
            })
        }
        getPius();
    },[])

    return (
        <PiusContext.Provider value={{pius, SetPius}}>
            {children}
        </PiusContext.Provider>
    )
}

export function usePius(): PiusContextData {
    const context = useContext(PiusContext);
    return context;    
}