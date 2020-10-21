import React, { createContext, useCallback, useContext, useEffect, useState} from 'react';
import { AsyncStorage } from 'react-native';

import {User} from '../interfaces'

import api from '../services/api';


interface AuthContextData {
    user: User;
    login({username, password}: LoginCredentials): Promise<string | undefined>;
    logout(): void;
}

interface AuthState{
    user: User;
    token: string;
}

interface LoginCredentials {
    username: string;
    password: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {

    const [userData, setUserData] = useState<AuthState>({} as AuthState);
    
    useEffect(() => {
        async function getUserData() {
            const [user, token] = await AsyncStorage.multiGet(['@Project:user', '@Project:token'])
            
            if (user && token) {
                api.defaults.headers.Authorization = `JWT ${token}`;
                setUserData({user: JSON.parse(user[1]), token: token[1]})
            }
    
            setUserData({} as AuthState)
        }

        getUserData();
    }, [])

    const login = useCallback(async ({ username, password }: LoginCredentials) => {
        try {
            const response = await api.post('/login/', {username, password})
            const {token} = response.data;
            await AsyncStorage.setItem('@Project:token', token);
            
            if (!!token) {
                api.defaults.headers.Authorization = `JWT ${token}`;  
                const userResponse = await api.get('usuarios/?search=' + username);
                const user = userResponse.data[0];
                await AsyncStorage.setItem('@Project:user', JSON.stringify(user));
                setUserData({ user, token});          
            } 
        } catch (err) {
            if (err.response) {
                const { data } = err.response;
    
                if (data.global != null && data.global[0] === 'Impossível fazer login com as credenciais fornecidas.') {
                    return 'Usuário e senha incorretos.'
                } 
            } else if (err.request) {
                return 'Desculpe, não conseguimos realizar o login.'
            }

        }
        
    },[])

    const logout = useCallback(() => {
        AsyncStorage.removeItem('@Project:user');
        AsyncStorage.removeItem('@Project:token');
    
        setUserData({} as AuthState);
    }, [])
    


    return (
        <AuthContext.Provider value={{user: userData.user, login, logout}}>
            { children }
        </AuthContext.Provider>
    )
}

export function useAuth(): AuthContextData {
    const context = useContext(AuthContext);
    return context;
}