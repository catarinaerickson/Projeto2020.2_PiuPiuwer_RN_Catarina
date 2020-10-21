import { KeyboardAvoidingView } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(KeyboardAvoidingView)`
    flex: 1;
    width: 100%;
    background: #fff;
    padding: 0 10px;
`;

export const Header = styled.View `
    padding: 25px 0 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #fff;
`

export const ExitButton = styled(BorderlessButton) `

`

export const SubmitButton = styled(RectButton) `
    padding: 10px 15px;
    border-radius: 20px;
    background: #ffe600;

`
export const SubmitButtonText = styled.Text `
    font-family: 'Archivo_700Bold';
    font-size: 16px;
    color: #fff;
` 

export const Main = styled.View `
    flex: 1;
    width: 100%;
    background: #fff;
`

export const InputView = styled.View `
    flex: 1;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
`
export const ProfilePicContainer = styled.View `
    align-items:center;
    justify-content: center;
    border-radius: 20px;
    width: 40px;
    height: 40px; 
    margin-right: 15px;
`

export const ProfilePic = styled.Image `
    flex: 1;
    justify-content: center;
    border-radius: 20px;
    width: 100%;
`

export const KeyboardAcessory = styled.View `
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding: 0 5px;
    border-top-color: #e6e6f0;
    border-top-width: 1px;
`
export const KeyboardAcessoryView = styled.View `
    flex-direction:row;
    width:50%;
    justify-content: space-between;
    align-items: center;
`

export const KeyboardCounterView = styled.View `
    flex-direction:row;
    width:50%;
    align-items: center;
    justify-content: flex-end;
    padding: 3px 0;
`
export const CircleView = styled.View `
    padding: 5px;
`

export const CounterNum =styled.Text `
    font-family: 'Poppins_400Regular';
    font-size: 13px;
    color: rgba(229,23,17,0.7);
`

export const CounterIconView = styled.View `
    border-left-color: #e6e6f0;
    border-left-width: 1px;
    padding-left: 5px;
    align-items: center;
    justify-content: center;
`