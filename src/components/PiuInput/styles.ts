import styled from 'styled-components/native'

interface PiuInpiutProps {
    isRed: boolean,
}

export const Input = styled.TextInput<PiuInpiutProps> `
    flex: 1;
    padding: 15px 0;
    font-family: 'Archivo_400Regular';
    font-size: 19px;
    color: ${props => props.isRed? 'rgba(229,23,17,0.7)' : 'rgba(0,0,0,0.8)'};
    
`