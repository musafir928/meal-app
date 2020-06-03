import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import {AppLoading } from 'expo';
import {enableScreens} from 'react-native-screens';

import MealsNavigator from './navigation/MealsNavigator';

enableScreens();

const fetchFonts = () => {
 return Font.loadAsync({
    'font-e': require("./assets/fonts/OpenSans-Light.ttf"),
    'font-ei': require("./assets/fonts/OpenSans-LightItalic.ttf"),
  })
}

export default function App() {
   const [fontLoaded, setFontLoaded] = useState(false);

   if(!fontLoaded){
     return <AppLoading startAsync={fetchFonts} onFinish={()=>setFontLoaded(true)}/> 
   }

  return (
        <MealsNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
