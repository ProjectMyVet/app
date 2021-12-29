import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { LogBox, YellowBox } from 'react-native'
import { useFonts } from 'expo-font'
import { Poppins_700Bold } from '@expo-google-fonts/poppins'
import { Roboto_400Regular } from '@expo-google-fonts/roboto'
import { AntDesign, Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { 
  LoginScreen,
  UserTypeScreen,
  RegisterScreen,
  NewAttendenceScreen,
  AttendenceScreen,
  ProfileScreen,
  PetsScreen,
  ReminderScreen,
  ScheduleScreen,
  PetDetailScreen,
  NewPetScreen,
} from './screens'

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
        initialRouteName='NewAttendenceScreen'
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen 
          name='Reminder' 
          component={ReminderScreen} 
          options={{
            tabBarLabel: 'Lembrete',
            tabBarIcon: () => <AntDesign name='bells' size={26} />,
          }}
        />
        <Tab.Screen 
          name='Attendence' 
          component={AttendenceScreen} 
          options={{
            tabBarLabel: 'Atendimentos',
            tabBarIcon: () => <Entypo name='list' size={26} />,
          }}
        />
        <Tab.Screen 
          name='NewAttendence' 
          component={NewAttendenceScreen} 
          options={{
            tabBarLabel: 'Novo',
            tabBarIcon: () => <Ionicons name='add-circle-outline' size={28} />,
          }}
        />
        <Tab.Screen 
          name='Pets' 
          component={PetsScreen} 
          options={{
            tabBarLabel: 'Pets',
            tabBarIcon: () => <MaterialIcons name='pets' size={26} />,
          }}
        />
        <Tab.Screen 
          name='Profile' 
          component={ProfileScreen} 
          options={{
            tabBarLabel: 'Perfil',
            tabBarIcon: () => <Ionicons name='person' size={26} />,
          }}
        />
      </Tab.Navigator>
    )
  }

  function renderVetTabNavigator() {
    return (
      <Tab.Navigator 
        initialRouteName='Attendence'
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen 
          name='Schedule' 
          component={ScheduleScreen} 
          options={{
            tabBarLabel: 'Agenda',
            tabBarIcon: () => renderIcon('home'),
          }}
        />
        <Tab.Screen 
          name='Attendence' 
          component={AttendenceScreen} 
          options={{
            tabBarLabel: 'Atendimentos',
            tabBarIcon: () => <Entypo name='list' size={26} />,
          }}
        />
        <Tab.Screen 
          name='Profile' 
          component={ProfileScreen} 
          options={{
            tabBarLabel: 'Perfil',
            tabBarIcon: () => <Ionicons name='person' size={26} />,
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
  LogBox.ignoreLogs(['Require cycles are allowed'])
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
        <Stack.Screen component={PetDetailScreen} name='PetDetail' />
        <Stack.Screen component={NewPetScreen} name='NewPet' />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
