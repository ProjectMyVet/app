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
  NewAttendanceScreen,
  AttendanceScreen,
  ProfileScreen,
  PetsScreen,
  ReminderScreen,
  ScheduleScreen,
  PetDetailScreen,
  NewPetScreen,
  NewReminderScreen,
  ReminderDetailScreen,
  ScheduleDetailScreen,
  AttendanceDetailScreen,
  NewAttendanceFormScreen,
  NewAttendanceDateScreen,
  NewAttendanceTimeScreen,
  NewAttendanceVetScreen,
  NewAttendanceVetDetailScreen
} from './screens'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

export function MenuTabNavigation({ navigation, route }) {
  const userType = route.params.userType
  const userId = route.params.userId

  function renderIcon(name) {
    return <AntDesign name={name} size={23} />
  }

  function renderCustomerTabNavigator(userType, userId) {
    return (
      <Tab.Navigator 
        initialRouteName='NewAttendance'
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
          name='Attendance' 
          component={AttendanceScreen} 
          initialParams={{ userId, userType }}
          options={{
            tabBarLabel: 'Atendimentos',
            tabBarIcon: () => <Entypo name='list' size={26} />,
          }}
        />
        <Tab.Screen 
          name='NewAttendance' 
          component={NewAttendanceScreen} 
          initialParams={{ userId }}
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

  function renderVetTabNavigator(userType, userId) {
    return (
      <Tab.Navigator 
        initialRouteName='Attendance'
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
          name='Attendance' 
          component={AttendanceScreen} 
          initialParams={{ userId, userType }}
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
      return renderCustomerTabNavigator(userType, userId)
    } else {
      return renderVetTabNavigator(userType, userId)
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
        <Stack.Screen component={AttendanceDetailScreen} name='AttendanceDetail' />
        <Stack.Screen component={NewAttendanceFormScreen} name='NewAttendanceForm' />
        <Stack.Screen component={NewAttendanceDateScreen} name='NewAttendanceDate' />
        <Stack.Screen component={NewAttendanceTimeScreen} name='NewAttendanceTime' />
        <Stack.Screen component={NewAttendanceVetScreen} name='NewAttendanceVet' />
        <Stack.Screen component={NewAttendanceVetDetailScreen} name='NewAttendanceVetDetail' />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
