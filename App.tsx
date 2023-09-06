import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootStackParamList } from './screens/allroutes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import DashBoardScreen from './screens/DashBoard/DashBoardScreen';
import Tabs from './Navigation/Tabs';
import CustomDrawer from './Navigation/CustomDrawer';
import AuthStack from './Navigation/AuthStack';
import AppStack from './Navigation/AppStack';


import {
  useFonts,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from "@expo-google-fonts/poppins";
import AppLoading from 'expo-app-loading';






export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  let [fontsLoaded] = useFonts({
    "poppins-thin": Poppins_100Thin,
    "poppins-thinI": Poppins_100Thin_Italic,
    "poppins-exlight": Poppins_200ExtraLight,
    "poppins-exlightI": Poppins_200ExtraLight_Italic,
    "poppins-light": Poppins_300Light,
    "poppins-lightI": Poppins_300Light_Italic,
    poppins: Poppins_400Regular,
    poppinsI: Poppins_400Regular_Italic,
    "poppins-md": Poppins_500Medium,
    "poppins-mdI": Poppins_500Medium_Italic,
    "poppins-semibd": Poppins_600SemiBold,
    "poppins-semibdI": Poppins_600SemiBold_Italic,
    "poppins-bd": Poppins_700Bold,
    "poppins-bdI": Poppins_700Bold_Italic,
    "poppins-exbd": Poppins_800ExtraBold,
    "poppins-exbdI": Poppins_800ExtraBold_Italic,
    "poppins-bl": Poppins_900Black,
    "poppins-blI": Poppins_900Black_Italic,
});


if (!fontsLoaded) {
  return <AppLoading />;
}

  return (



    <NavigationContainer>

      {/* <AppStack /> */}

      <AuthStack />

    </NavigationContainer>




  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
