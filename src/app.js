import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { YellowBox } from 'react-native'
import { useFonts } from 'expo-font'
import { Poppins_700Bold } from '@expo-google-fonts/poppins'
import { Roboto_400Regular } from '@expo-google-fonts/roboto'
import React from 'react'
import { LoginScreen, UserTypeScreen, RegisterScreen } from './screens';

const Stack = createStackNavigator()

export default function App() {
  YellowBox.ignoreWarnings(['Require cycles are allowed'])
  const [whereFontsLoaded] = useFonts({
    Roboto_400Regular,
    Poppins_700Bold,
  })

  return (
    <NavigationContainer>
      <Stack.Navigator 
          screenOptions={{ headerShown: false }}
          initialRouteName='Login'
        >
        <Stack.Screen component={LoginScreen} name='Login' />
        <Stack.Screen component={UserTypeScreen} name='UserType' />
        <Stack.Screen component={RegisterScreen} name='Register' />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
