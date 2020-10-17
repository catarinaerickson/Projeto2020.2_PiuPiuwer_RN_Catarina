import React, { useCallback, useState } from 'react';
import { Keyboard, Platform, TouchableWithoutFeedback } from 'react-native';

import {PageLoginContainer, Title, LoginButton, Logo, Input, ButtonText, Main} from './styles';

import LogoImg from '../../assets/images/logo.png'
import { useAuth } from '../../hooks/auth';

const Login: React.FC = () => {
    
    const [user, setUser] = useState({
        username:'',
        password:''
    });

    const [errMessage, setErrMessage] = useState({message: ''});

    const { login } = useAuth();
    
    const handleLogin = useCallback (async () => {
        const err = await login(user); 

        if (err != null) {
            setErrMessage({message: err});
        }        
        
        setUser({username: '', password: ''});

    }, [user, login, setErrMessage]);

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