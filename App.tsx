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




function AppNavB() {
  const Tab = createMaterialBottomTabNavigator();


  return (
    <SafeAreaProvider>


      <Tabs />



    </SafeAreaProvider>
  )
}

const Stack = createNativeStackNavigator();




export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();



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
