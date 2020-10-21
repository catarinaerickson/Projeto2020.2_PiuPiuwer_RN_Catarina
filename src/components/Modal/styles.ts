import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';

export const DarkView = styled.View `
    flex: 1;
    align-items: center;
    justify-content: flex-end;
    background: rgba(51,51,51,0.4);
`
export const SecondView = styled.View `
    flex: 1;
    align-items: center;
    justify-content: flex-end;

`
export const Section = styled.View `
    width: 100%;
    max-height: 250px;
    background: #fff;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    align-items: center;
`
export const Header =styled.View `
    width: 100%;
    border-bottom-color: #D3D3D3;
    border-bottom-width: 0.3px;
    align-items: center;
    justify-content: center;
    padding: 15px 5px;
`
export const Title = styled.Text `
    font: 20px Archivo_700Bold;
    color: rgba(0,0,0,0.8);
    text-align: center;
`
export const CancelButton = styled(BorderlessButton) `
    width: 70%;
    background: #FFE600;
    align-items: center;
    justify-content: center;
    padding: 12px;
    border-radius: 20px;
    margin: 20px 0;
`
export const CancelButtonText = styled.Text `
    font-family: 'Archivo_700Bold';
    font-size: 16px;
    color: #fff;
    
`