import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import apptw from './utils/lib/tailwind';
import { Provider } from 'react-redux';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootStackParamList } from './screens/allroutes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './screens/Welcome';
import { NavigationContainer } from '@react-navigation/native';
import Test from './screens/Tests/Test';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DashBoardScreen from './screens/DashBoard/DashBoardScreen';
import Tabs from './BottomNav/Tabs';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';






function AppNavB() {
  const Tab = createMaterialBottomTabNavigator();


  return (
    <SafeAreaProvider>


      <Tabs />



    </SafeAreaProvider>
  )
}





export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();



  return (
    // <Provider
    //   store={() => { }}
    // >
    <SafeAreaProvider>
      <StatusBar />


      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName='Welcome'
        >

          <Stack.Screen
            name='Test'
            component={AppNavB}
          />

          <Stack.Screen
            name='DashBoardScreen'
            component={AppNavB}
          />
          <Stack.Screen
            name="Welcome"
            component={Welcome}
          />

          <Stack.Screen
            name="SignIn"
            component={SignIn}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
          />
        </Stack.Navigator>
      </NavigationContainer>



    </SafeAreaProvider>

    // </Provider>
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
