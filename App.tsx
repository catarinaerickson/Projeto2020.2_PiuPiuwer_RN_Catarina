import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { AppLoading } from 'expo';

import AppProvider from './src/hooks';
import Routes from './src/routes';

import { Archivo_400Regular, Archivo_700Bold, Archivo_600SemiBold, useFonts} from '@expo-google-fonts/archivo';
import { Poppins_400Regular, Poppins_600SemiBold, Poppins_500Medium_Italic } from '@expo-google-fonts/poppins';


export default function App() {
  let [ fontsLoaded ] = useFonts ({
    Archivo_400Regular,
    Archivo_700Bold,
    Archivo_600SemiBold,
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_500Medium_Italic
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <NavigationContainer>
        <AppProvider>
          <Routes/>
          <StatusBar style="auto" />
        </AppProvider>
      </NavigationContainer>
    )
  }

}


