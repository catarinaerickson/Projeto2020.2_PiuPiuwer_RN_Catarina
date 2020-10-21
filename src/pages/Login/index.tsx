import React, { useCallback, useState } from 'react';
import { Alert, Keyboard, Platform, TouchableWithoutFeedback } from 'react-native';
import * as Yup from 'yup';
import { ValidationError } from 'yup';

import { useAuth } from '../../hooks/auth';

import LogoImg from '../../assets/images/logo.png'

import {PageLoginContainer, Title, LoginButton, Logo, Input, ButtonText, Main} from './styles';

import {Errors} from '../../interfaces'

const Login: React.FC = () => {
    const [user, setUser] = useState({
        username:'',
        password:''
    });    
    
    const { login } = useAuth();

    const getValidationErrors =useCallback((error: ValidationError): Errors => {
        const validationErrors: Errors = {};

        error.inner.forEach(error => {
            validationErrors[error.path] = error.message;
        });

        return validationErrors;
    }, [])
    
    const handleLogin = useCallback(async() => {
        try {
            const esquema = Yup.object().shape({
                username: Yup.string().required('Por favor, digite seu usuário'),
                password: Yup.string().required('Por favor, digite sua senha'),
            });

            await esquema.validate(user, { abortEarly: false });
            const apiErr = await login(user);
            if(apiErr) {
                Alert.alert('Não foi possível fazer login', apiErr); 
            }
        } catch(err) {
            if (err instanceof Yup.ValidationError) {
                const errors = getValidationErrors(err);
                if(errors.username && errors.password) {                     
                    Alert.alert('Não foi possível fazer login', 'Por favor, preencha todos os campos');                                                  
                } else {
                    if(errors.username) {
                        Alert.alert('Não foi possível fazer login', errors.username);                                                  
                    } else {                     
                        Alert.alert('Não foi possível fazer login', errors.password); 
                    }
                }
            }
        }
    }, [user, login])

    return (
       <PageLoginContainer
       behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
           <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Main>
                <Logo source={LogoImg} resizeMode='contain'/>
                <Title>Piupiuwer</Title>
                <Input 
                    placeholder='Usuário'
                    value={user.username}
                    onChangeText={text => setUser({username: text, password: user.password})}
                    />
                <Input 
                    secureTextEntry={true}
                    placeholder='Senha' 
                    value={user.password}
                    onChangeText={text => setUser({username: user.username, password: text})}
                    />
                <LoginButton onPress={handleLogin}>
                    <ButtonText>Entrar</ButtonText>
                </LoginButton>
            </Main>
           </TouchableWithoutFeedback>
       </PageLoginContainer>
    )
} 

export default Login;