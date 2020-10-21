import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';

interface ChevronDownProps {
    display: boolean,
}

interface PiuContainerProps {
    display: boolean;
}

export const PiuContainer = styled.View<PiuContainerProps> `
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 17px 17px 10px 17px;
    width: 100%;
    background: #fff;
    margin-top: 0.7px;
    display: ${props => props.display? 'none' : 'flex'}
`
export const ProfilePicContainer = styled.View `    
    align-items:center;
    justify-content: center;
    border-radius: 30px;
    width: 60px;
    height: 60px; 
`

export const ProfileImg = styled.Image `
    flex: 1;
    justify-content: center;
    width:100%;
    border-radius: 30px;
`

export const PiuBlock = styled.View `
    flex: 1;
    width: 100%;
    margin-left: 4px;
    justify-content: flex-start;
    align-items: flex-start;
`

export const PiuUser = styled.View `
    flex-direction: row;
    margin-bottom: 5px;
    align-items: center;
`
export const Name = styled.Text `
    color: rgba(0,0,0,0.8);
    font: 16px 'Archivo_600SemiBold';
`

export const Username = styled.Text `
    color: #708090;
    margin-left: 3px;
    font: 15px 'Archivo_400Regular';
`

export const DownButton = styled(BorderlessButton)<ChevronDownProps> `
    flex-direction: row;
    flex:1;
    align-items: center;
    justify-content: flex-end;
    display: ${props => props.display? 'flex' : 'none'};

`

export const PiuMsgContainer = styled.View `
    width: 100%;

`
export const PiuMsg = styled.Text `
    font: 15px 'Archivo_400Regular';
    line-height: 22px;
`
export const IconBar = styled.View `
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
`
export const IconContainer = styled.View `
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`
export const IconNum = styled.Text `
    color: #708090;
    margin-left: 3px;
    font: 12px 'Poppins_400Regular';
`

export const DeleteView = styled.View `
    width: 90%;
    border-bottom-color: #D3D3D3;
    border-bottom-width: 0.3px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 15px 0;
`

export const DeleteButton = styled(BorderlessButton) `
    width: 100%;
    flex-direction: row;
    align-items: flex-end;
    
`
export const DeleteButtonText = styled.Text `
    font: 20px Archivo_400Regular;
    color: rgba(229,23,17,0.7);
    margin-left: 10px;
`