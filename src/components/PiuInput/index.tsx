import React from 'react';
import { TextInput } from 'react-native';

import { Input } from './styles';

interface PiuInputProps extends React.ComponentProps<typeof TextInput> {
    isRed: boolean,
}

const PiuInput: React.FC<PiuInputProps> = ({isRed, ...rest}) => {
  return (
    <Input 
        multiline
        autoFocus 
        placeholder='Dá um piu!'
        isRed={isRed} {...rest}/>
  )
}

export default PiuInput;