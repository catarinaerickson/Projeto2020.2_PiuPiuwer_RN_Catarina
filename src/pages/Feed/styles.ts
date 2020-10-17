import { BorderlessButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

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

