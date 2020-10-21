import React, { useCallback, useEffect, useState } from 'react';
import { Keyboard, Platform, TouchableWithoutFeedback, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import * as Yup from 'yup';
import { ValidationError } from 'yup';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import api from '../../services/api';

import { useAuth } from '../../hooks/auth';
import { usePius } from '../../hooks/pius';

import PiuInput from '../../components/PiuInput';

import { Container, ExitButton, Header, Main, InputView, KeyboardAcessory, ProfilePic, ProfilePicContainer, SubmitButton, SubmitButtonText, KeyboardAcessoryView, KeyboardCounterView, CounterNum, CounterIconView, CircleView } from './styles';

import {Errors, PiuObject} from '../../interfaces'

const Inpiu: React.FC = () => {
  const { user } = useAuth();

  const [piuText, SetPiuText] = useState('');

  const [piuCount, SetPiuCount] = useState('');

  const [piuCountColor, SetPiuCountColor] = useState('');

  const [counterIcon, SetCounterIcon] = useState({name: '', color: ''});

  const [inputTextColor, SetInputTextColor] = useState(false);

  const { pius, SetPius } = usePius();
  
  const { goBack } = useNavigation();
  
  useEffect(() => {
    if(piuText.length>0 && piuText.length<=140) {
      SetPiuCount('');
      SetPiuCountColor('#fff200');
      SetCounterIcon({name:'check-circle', color: '#30C100'});
      SetInputTextColor(false);
    } else if(piuText.length === 0) {
      SetCounterIcon({name:'check-circle', color: '#e6e6f0'})
      SetInputTextColor(false);
    } else {
      SetPiuCount((140-piuText.length).toString())
      SetPiuCountColor('#E51711')
      SetCounterIcon({name:'x-circle', color: 'rgba(229,23,17,0.7)'})
      SetInputTextColor(true);
    }
  }, [piuText])

  const getValidationErrors = useCallback((error: ValidationError): Errors => {
    const validationErrors: Errors = {};

    error.inner.forEach(error => {
        validationErrors[error.path] = error.message;
    });

    return validationErrors;
  }, [])

  const handleExit = useCallback(() => {
    goBack();
  }, [goBack])

  const handlePostPiu = useCallback(async () => {
    const piuData = {'usuario': user.id, 'texto': piuText };
    try {
      const piuDataSchema = Yup.object().shape({
        usuario: Yup.number().required(),
        texto: Yup.string().required('Digite um piu!').max(140, 'Digite, no máximo 140 caracteres')
      })
      
      await piuDataSchema.validate(piuData, { abortEarly: false });
      const novoPiu: PiuObject = await (await api.post('/pius/', piuData)).data;
      SetPius([novoPiu, ...pius])
      goBack();


    } catch(err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        Alert.alert('Não é possível postar o piu', errors.texto)
      }
    }
  },[user, piuText, api, getValidationErrors, pius, SetPius])

  
  
  return (
      <Container
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
            <Header>
                <ExitButton onPress={handleExit}>
                  <Feather name="x" size={30} color="#ffe600" />
                </ExitButton>
                <SubmitButton onPress={handlePostPiu}>
                    <SubmitButtonText>Piupiu</SubmitButtonText>
                </SubmitButton>
            </Header>  
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <Main>
                <InputView>
                  <ProfilePicContainer>
                      <ProfilePic source={{uri: user.foto}} resizeMode='cover'/>
                  </ProfilePicContainer>
                    <PiuInput
                      isRed={inputTextColor}
                      value={piuText}
                      onChangeText={text => SetPiuText(text)}
                    />
                </InputView>
                <KeyboardAcessory >
                  <KeyboardAcessoryView>
                    <MaterialIcons name="crop-original" size={30} color="#ffe600" />
                    <MaterialIcons name="gif" size={45} color="#ffe600" />
                    <MaterialIcons name="event-note" size={30} color="#ffe600" />
                    <MaterialIcons name="location-on" size={30} color="#ffe600" />
                  </KeyboardAcessoryView>
                  <KeyboardCounterView>

                    <CircleView>
                      <AnimatedCircularProgress
                        size={30}
                        width={2.5}
                        fill={100*piuText.length/140}
                        tintColor={piuCountColor}
                        rotation={0}
                        lineCap='round'
                        backgroundColor="#e6e6f0">
                        {(fill) => (
                          <CounterNum>{piuCount}</CounterNum>
                        )}
                      </AnimatedCircularProgress>
                    </CircleView>

                    <CounterIconView>                
                      <Feather name={counterIcon.name} size={24} color={counterIcon.color} />
                    </CounterIconView>
                    
                  </KeyboardCounterView>
                </KeyboardAcessory>
              </Main>
            </TouchableWithoutFeedback>
      </Container>
  );
}

export default Inpiu;
