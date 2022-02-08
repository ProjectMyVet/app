import React, { useState, useEffect } from 'react'
import { View, FlatList, SafeAreaView } from 'react-native'
import { MVText, MVButton } from '../../components'
import Checkbox from 'expo-checkbox'
import { getTurnLabel } from '../../utils'

import styles from './styles'

const days = [
  {
    dayOfWeek: 1,
    label: 'Segunda-feira',
    checked: false
  },
  {
    dayOfWeek: 2,
    label: 'Terça-feira',
    checked: false
  },
  {
    dayOfWeek: 3,
    label: 'Quarta-feira',
    checked: false
  },
  {
    dayOfWeek: 4,
    label: 'Quinta-feira',
    checked: false
  },
  {
    dayOfWeek: 5,
    label: 'Sexta-feira',
    checked: false
  },
  {
    dayOfWeek: 6,
    label: 'Sábado',
    checked: false
  },
  {
    dayOfWeek: 7,
    label: 'Domingo',
    checked: false
  },
]

const MORNING_TIME = [
  {
    id: 1,
    fromTime: '06:00',
    toTime: '07:00',
    checked: false
  },
  {
    id: 2,
    fromTime: '07:00',
    toTime: '08:00',
    checked: false
  },
  {
    id: 3,
    fromTime: '08:00',
    toTime: '09:00',
    checked: false
  },
  {
    id: 4,
    fromTime: '09:00',
    toTime: '10:00',
    checked: false
  },
  {
    id: 5,
    fromTime: '10:00',
    toTime: '11:00',
    checked: false
  },
  {
    id: 6,
    fromTime: '11:00',
    toTime: '12:00',
    checked: false
  },
]

const AFTERNOON_TIME = [
  {
    id: 1,
    fromTime: '12:00',
    toTime: '13:00',
    checked: false
  },
  {
    id: 2,
    fromTime: '13:00',
    toTime: '14:00',
    checked: false
  },
  {
    id: 3,
    fromTime: '14:00',
    toTime: '15:00',
    checked: false
  },
  {
    id: 4,
    fromTime: '15:00',
    toTime: '16:00',
    checked: false
  },
  {
    id: 5,
    fromTime: '16:00',
    toTime: '17:00',
    checked: false
  },
  {
    id: 6,
    fromTime: '17:00',
    toTime: '18:00',
    checked: false
  },
]


const NIGHT_TIME = [
  {
    id: 1,
    fromTime: '18:00',
    toTime: '19:00',
    checked: false
  },
  {
    id: 2,
    fromTime: '19:00',
    toTime: '20:00',
    checked: false
  },
  {
    id: 3,
    fromTime: '20:00',
    toTime: '21:00',
    checked: false
  },
  {
    id: 4,
    fromTime: '21:00',
    toTime: '22:00',
    checked: false
  },
  {
    id: 5,
    fromTime: '22:00',
    toTime: '23:00',
    checked: false
  },
  {
    id: 6,
    fromTime: '23:00',
    toTime: '00:00',
    checked: false
  },
]

export function ScheduleDetailScreen({ navigation, route }) {
  const [schedule, setSchedule] = useState([])
  const [daysOfWeek, setDaysOfWeek] = useState([])
  const [times, setTimes] = useState([])
  const [turn, setTurn] = useState('')
  const [morningTimes, setMorningTimes] = useState(MORNING_TIME)
  const [afternoonTimes, setAfternoonTimes] = useState(AFTERNOON_TIME)
  const [nightTimes, setNightTimes] = useState(NIGHT_TIME)

  useEffect(() => {
    const completeSchedule = route.params.schedule
    const actualTurn = route.params.turn
    const newDates = days.map(item => {
      let value = completeSchedule.find(day => day.dayOfWeek == item.dayOfWeek)
      return value ? {...item, checked: true } : item
    })
    const newTimes = mapTimeFromTurn(actualTurn, completeSchedule)
    setSchedule(completeSchedule)
    setDaysOfWeek(newDates)
    setTimes(newTimes)
    setTurn(actualTurn)
  }, [navigation])

  function mapTimeFromTurn(actualTurn, completeSchedule) {
    switch (actualTurn) {
      case 'MORNING':
        return getTimes(completeSchedule, morningTimes)
      case 'AFTERNOON':
        return getTimes(completeSchedule, afternoonTimes)
      case 'NIGHT':
        return getTimes(completeSchedule, nightTimes)
      default:
        break;
    }
  }

  function getTimes(completeSchedule, defaultSchedule) {
    return defaultSchedule.map(item => {
      let value = completeSchedule.find(time => time.fromTime === item.fromTime && time.toTime === item.toTime)
      return value ? {...item, checked: true } : item
    })
  }

  function handleChangeTimes(item) {
    const list = Object.assign([], times)
    console.log(item)
    list[item.id - 1].checked = !list[item.id - 1].checked
    setTimes(list)
  }

  function handleChangeDates(item) {
    const list = Object.assign([], daysOfWeek)
    list[item.dayOfWeek - 1].checked = !list[item.dayOfWeek - 1].checked
    setDaysOfWeek(list)
  }

  function handleSubmit() {
    //TODO: rhian.costa - save data and call api
    navigation.navigate('Schedule')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.list}>
        <MVText style={styles.title}>Turno: {getTurnLabel(turn)}</MVText>
        <MVText style={styles.subtitle}>Horários:</MVText>
        <FlatList 
          data={times}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View style={styles.listItem}>
                <Checkbox 
                  value={item.checked}
                  style={styles.checkbox}
                  onValueChange={() => handleChangeTimes(item)}
                />
                <MVText style={styles.itemTitle}>{item.fromTime} - {item.toTime}</MVText>
              </View> 
            )
          }}
        />
        <MVText style={styles.subtitle}>Dias:</MVText>
        <FlatList 
          data={daysOfWeek}
          keyExtractor={(item) => item.dayOfWeek}
          renderItem={({ item }) => {
            return (
              <View style={styles.listItem}>
                <Checkbox 
                  value={item.checked}
                  style={styles.checkbox}
                  onValueChange={() => handleChangeDates(item)}
                />
                <MVText style={styles.itemTitle}>{item.label}</MVText>
              </View> 
            )
          }}
        />
      </View>
      <View style={styles.button}>
        <MVButton onPress={handleSubmit}>
          Salvar
        </MVButton>
      </View>
    </SafeAreaView>
  )
}