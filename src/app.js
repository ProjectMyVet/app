import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { LogBox, YellowBox } from 'react-native'
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
  NewReminderScreen,
  ReminderDetailScreen,
  ScheduleDetailScreen,
  AttendenceDetailScreen
} from './screens'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

export function MenuTabNavigation({ navigation, route }) {
  const userType = route.params.userType
  const userId = route.params.userId

  function renderIcon(name) {
    return <AntDesign name={name} size={23} />
  }

  function renderCustomerTabNavigator(userId) {
    return (
      <Tab.Navigator 
        initialRouteName='NewAttendence'
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen 
          name='Reminder' 
          component={ReminderScreen} 
          initialParams={{ userId }}
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
          initialParams={{ userId }}
          options={{
            tabBarLabel: 'Pets',
            tabBarIcon: () => <MaterialIcons name='pets' size={26} />,
          }}
        />
        <Tab.Screen 
          name='Profile' 
          component={ProfileScreen} 
          initialParams={{ userId }}
          options={{
            tabBarLabel: 'Perfil',
            tabBarIcon: () => <Ionicons name='person' size={26} />,
          }}
        />
      </Tab.Navigator>
    )
  }

  function renderVetTabNavigator(userId) {
    return (
      <Tab.Navigator 
        initialRouteName='Attendence'
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen 
          name='Schedule' 
          component={ScheduleScreen} 
          initialParams={{ userId }}
          options={{
            tabBarLabel: 'Agenda',
            tabBarIcon: () => <MaterialIcons name='schedule' size={26} />,
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
          initialParams={{ userId }}
          options={{
            tabBarLabel: 'Perfil',
            tabBarIcon: () => <Ionicons name='person' size={26} />,
          }}
        />
      </Tab.Navigator>
    )
  }

  function renderTabNavigator(userType, userId) {
    if (userType === 'CUSTOMER') {
      return renderCustomerTabNavigator(userId)
    } else {
      return renderVetTabNavigator(userId)
    }
  }

  return (
    <>
      {renderTabNavigator(userType, userId)}
    </>
  )
}

export default function App() {
  LogBox.ignoreLogs(['Require cycles are allowed'])
  // const [whereFontsLoaded] = useFonts({
  //   Roboto_400Regular,
  //   Poppins_700Bold,
  // })

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
        <Stack.Screen component={NewReminderScreen} name='NewReminder' />
        <Stack.Screen component={ReminderDetailScreen} name='ReminderDetail' />
        <Stack.Screen component={ScheduleDetailScreen} name='ScheduleDetail' />
        <Stack.Screen component={AttendenceDetailScreen} name='AttendenceDetail' />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
