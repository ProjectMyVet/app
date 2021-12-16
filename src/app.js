import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { YellowBox } from 'react-native'
import { useFonts } from 'expo-font'
import { Poppins_700Bold } from '@expo-google-fonts/poppins'
import { Roboto_400Regular } from '@expo-google-fonts/roboto'
import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { LoginScreen, UserTypeScreen, RegisterScreen, Teste, NewAttendenceScreen } from './screens'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

export function MenuTabNavigation({ navigation, route }) {
  const userType = route.params.userType

  function renderIcon(name) {
    return <AntDesign name={name} size={23} />
  }

  function renderCustomerTabNavigator() {
    return (
      <Tab.Navigator 
        initialRouteName='Teste1'
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen 
          name='Teste1' 
          component={NewAttendenceScreen} 
          options={{
            tabBarLabel: 'Teste 1',
            tabBarIcon: () => renderIcon('home'),
          }}
        />
        <Tab.Screen 
          name='Teste2' 
          component={NewAttendenceScreen} 
          options={{
            tabBarLabel: 'Teste 2',
            tabBarIcon: () => renderIcon('home'),
          }}
        />
        <Tab.Screen 
          name='Teste3' 
          component={NewAttendenceScreen} 
          options={{
            tabBarLabel: 'Teste 3',
            tabBarIcon: () => renderIcon('home'),
          }}
        />
      </Tab.Navigator>
    )
  }

  function renderVetTabNavigator() {
    return (
      <Tab.Navigator 
        initialRouteName='Teste1'
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen 
          name='Teste1' 
          component={NewAttendenceScreen} 
          options={{
            tabBarLabel: 'Teste 1',
            tabBarIcon: () => renderIcon('home'),
          }}
        />
        <Tab.Screen 
          name='Teste2' 
          component={NewAttendenceScreen} 
          options={{
            tabBarLabel: 'Teste 2',
            tabBarIcon: () => renderIcon('home'),
          }}
        />
        <Tab.Screen 
          name='Teste3' 
          component={NewAttendenceScreen} 
          options={{
            tabBarLabel: 'Teste 3',
            tabBarIcon: () => renderIcon('home'),
          }}
        />
      </Tab.Navigator>
    )
  }

  function renderTabNavigator(userType) {
    if (userType === 'customer') {
      return renderCustomerTabNavigator()
    } else {
      return renderVetTabNavigator()
    }
  }

  return (
    <>
      {renderTabNavigator(userType)}
    </>
  )
}

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
        <Stack.Screen component={MenuTabNavigation} name='MenuTabNavigation' />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
