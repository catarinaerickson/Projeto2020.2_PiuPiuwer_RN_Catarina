import React, { createContext, useCallback, useContext, useEffect, useState} from 'react';
import { AsyncStorage } from 'react-native';


import {PiuObject} from '../interfaces'

import api from '../services/api';

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