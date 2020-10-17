import React, { useCallback } from 'react';
import { Keyboard, Platform, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, ExitButton, Header, Main, Input, InputView, KeyboardAcessory, ProfilePic, ProfilePicContainer, SubmitButton, SubmitButtonText, KeyboardAcessoryView } from './styles';

import PiuPic from '../../assets/images/piupic.png';

import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';



const Inpiu: React.FC = () => {
  const { goBack } = useNavigation();

  const handleExit = useCallback(() => {
    goBack();
  }, [goBack])
  
  return (
      <Container
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
            <Header>
                <ExitButton onPress={handleExit}>
                  <Feather name="x" size={30} color="#ffe600" />
                </ExitButton>
                <SubmitButton>
                    <SubmitButtonText>Piupiu</SubmitButtonText>
                </SubmitButton>
            </Header>  
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <Main>
                <InputView>
                  <ProfilePicContainer>
                      <ProfilePic source={PiuPic} resizeMode='contain'/>
                  </ProfilePicContainer>
                    <Input 
                      multiline
                      autoFocus 
                      placeholder='Dá um piu!'
                    />
                </InputView>
                <KeyboardAcessory >
                  <KeyboardAcessoryView>
                    <MaterialIcons name="crop-original" size={30} color="#ffe600" />
                    <MaterialIcons name="gif" size={45} color="#ffe600" />
                    <MaterialIcons name="event-note" size={30} color="#ffe600" />
                    <MaterialIcons name="location-on" size={30} color="#ffe600" />
                  </KeyboardAcessoryView>
                </KeyboardAcessory>
              </Main>
            </TouchableWithoutFeedback>
      </Container>
  );
}

export default Inpiu;