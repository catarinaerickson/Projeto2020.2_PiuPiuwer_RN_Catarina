import styled from 'styled-components/native';

export const PiuContainer = styled.View `
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 17px 17px 10px 17px;
    width: 100%;
    background: #fff;
    border-top-width: 0.4px;
    border-top-color: #d3d3d3;
`
export const ProfilePicContainer = styled.View `    
    align-items:center;
    justify-content: center;
    border-radius: 30px;
    width: 60px;
    height: 60px; 
`

export const ProfileBackgroundImg = styled.ImageBackground `
    flex: 1;
    justify-content: center;
    width:100%;
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