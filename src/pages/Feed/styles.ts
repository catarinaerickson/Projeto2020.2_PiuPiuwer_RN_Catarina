import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';

export const PageFeedContainer = styled.View `
    flex: 1;
    background: #f0f0f7;
    width: 100%;
`
export const Header = styled.View `
    flex-direction: row;
    width: 100%;
    background: #fff;
    padding: 25px 0px 10px;
    align-items: center;
    justify-content: center;
    border-bottom-width: 0.4px;
    border-bottom-color: #f0f0f7;
`
export const Logo = styled.Image `
    height: 35px;
`

export const LogOutButton = styled(BorderlessButton) `
    position: absolute;
    top: 0;
    right: 0;
    margin: 30px 10px 0 0;
`

export const FeatherButton = styled(BorderlessButton) `
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex:1;
    position: absolute;
    bottom: 0;
    right: 0;
    background: #ffe600;
    border-radius:5px;
    width: 66px;
    height: 66px;
    border-radius:33px;
    margin: 10px;
`


export const UserBlock = styled.View `
    width: 90%;
    border-bottom-color: #D3D3D3;
    border-bottom-width: 0.3px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 15px 0;
` 

export const ModalImgContainer = styled.View `    
    align-items:center;
    justify-content: center;
    border-radius: 18px;
    width: 36px;
    height: 36px; 
`

export const ModalProfileImg = styled.Image `
    flex: 1;
    justify-content: center;
    width:100%;
    border-radius: 18px;
`
export const UserInfo = styled.View `
    margin-left: 5px;
`

export const Name = styled.Text `
    color: rgba(0,0,0,0.8);
    font: 15px 'Archivo_600SemiBold';
`
export const Username = styled.Text `
    font: 12px 'Archivo_400Regular';
    color: #708090;
`
export const CheckIcon = styled.View `
    margin-left: auto;
`
export const LogoutBlock = styled.View `
    width: 90%;
    border-bottom-color: #D3D3D3;
    border-bottom-width: 0.3px;
    align-items: flex-start;
    padding: 5px 0;
`
export const ModalLogoutButton = styled(BorderlessButton) `
    width: 100%;
    flex-direction: row;
    align-items: flex-end;
    padding: 10px;
    
`
export const ModalButtonText = styled.Text `
    font: 20px Archivo_400Regular;
    color: #708090;
    margin-left: 10px;
`


