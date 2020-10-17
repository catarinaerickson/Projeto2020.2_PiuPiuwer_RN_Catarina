import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { KeyboardAvoidingView } from 'react-native';

export const PageLoginContainer = styled(KeyboardAvoidingView) `
    flex: 1;
    width: 100%;
    background: #fff;    
`
export const Main = styled.View `
    /* flex: 1; */
    justify-content: flex-end;
    align-items: center;
    width: 100%;
`

export const Logo = styled.Image `
    margin: 30px 15px;
`
export const Title = styled.Text `
    font: 35px 'Poppins_500Medium_Italic'; 
    margin-bottom: 40px;
`

export const Input = styled.TextInput `
    width: 90%;
    background: #F8F8FC;
    border: 1px solid #E6E6F0;
    border-radius: 5px;
    padding: 15px;
    font-family: 'Archivo_400Regular';
    font-size: 15px;
    margin-bottom: 20px;
`
export const LoginButton = styled(RectButton) `
    width: 90%;
    background: #FFE600;
    align-items: center;
    justify-content: center;
    padding: 15px;
    border-radius: 5px;
    margin-top: 25px;
    margin-bottom: 5px;
`
export const ButtonText = styled.Text `
    font-family: 'Archivo_700Bold';
    font-size: 15px;
    color: #fff;
`





