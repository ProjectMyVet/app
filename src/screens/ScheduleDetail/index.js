import React, { useState, useEffect } from 'react'
import { View, FlatList, SafeAreaView } from 'react-native'
import { MVText, MVButton } from '../../components'
import Checkbox from 'expo-checkbox'
import { getTurnLabel } from '../../utils'
import axios from 'axios'

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
    fromTime: '06:00',
    toTime: '07:00',
    checked: false
  },
  {
    fromTime: '07:00',
    toTime: '08:00',
    checked: false
  },
  {
    fromTime: '08:00',
    toTime: '09:00',
    checked: false
  },
  {
    fromTime: '09:00',
    toTime: '10:00',
    checked: false
  },
  {
    fromTime: '10:00',
    toTime: '11:00',
    checked: false
  },
  {
    fromTime: '11:00',
    toTime: '12:00',
    checked: false
  },
]

const AFTERNOON_TIME = [
  {
    fromTime: '12:00',
    toTime: '13:00',
    checked: false
  },
  {
    fromTime: '13:00',
    toTime: '14:00',
    checked: false
  },
  {
    fromTime: '14:00',
    toTime: '15:00',
    checked: false
  },
  {
    fromTime: '15:00',
    toTime: '16:00',
    checked: false
  },
  {
    fromTime: '16:00',
    toTime: '17:00',
    checked: false
  },
  {
    fromTime: '17:00',
    toTime: '18:00',
    checked: false
  },
]


const NIGHT_TIME = [
  {
    fromTime: '18:00',
    toTime: '19:00',
    checked: false
  },
  {
    fromTime: '19:00',
    toTime: '20:00',
    checked: false
  },
  {
    fromTime: '20:00',
    toTime: '21:00',
    checked: false
  },
  {
    fromTime: '21:00',
    toTime: '22:00',
    checked: false
  },
  {
    fromTime: '22:00',
    toTime: '23:00',
    checked: false
  },
  {
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
  const [userId, setUserId] = useState({})

  useEffect(() => {
    const completeSchedule = route.params.schedule
    const actualTurn = route.params.turn
    const totalDays = Object.assign([], days)
    const newDates = totalDays.map(item => {
      let value = completeSchedule.find(day => day.dayOfWeek == item.dayOfWeek)
      return value ? {...item, id: Math.random(), checked: true } : {...item, id: Math.random()}
    })
    const newTimes = mapTimeFromTurn(actualTurn, completeSchedule)
    setSchedule(completeSchedule)
    setDaysOfWeek(newDates)
    setTimes(newTimes)
    setTurn(actualTurn) 
    setUserId(route.params.userId)
  }, [navigation, route])

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
      return value ? {...item, id: value.id, checked: true } : {...item, id: Math.random()}
    })
  }

  function handleChangeTimes(item) {
    const list = Object.assign([], times)
    const objIndex = list.findIndex((obj => obj.id == item.id))
    list[objIndex].checked = !list[objIndex].checked
    setTimes(list)
  }

  function handleChangeDates(item) {
    const list = Object.assign([], daysOfWeek)
    list[item.dayOfWeek - 1].checked = !list[item.dayOfWeek - 1].checked
    setDaysOfWeek(list)
  }

  function handleSubmit() {
    const dates = []
    var list = Object.assign([], times)
    daysOfWeek.forEach((item) => {
      if (item.checked) {
        list.forEach((datetime) => {
          Object.assign(datetime, {dayOfWeek: item.dayOfWeek})
          delete datetime['id']
          dates.push(Object.assign({}, datetime))
        })
        list = []
        list = Object.assign(list, times)
      }
    })
    const body = {
      userId,
      turn,
      dates
    }
    axios.post('http://localhost:8010/myvet/schedulers', body)
      .then(response => setTimeout(() => {
        navigation.navigate('Schedule', { userId })
      }, 1000))
    
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.list}>
        <MVText style={styles.title}>Turno: {getTurnLabel(turn)}</MVText>
        <MVText style={styles.subtitle}>Horários:</MVText>
        <FlatList 
          data={times}
          keyExtractor={(item) => { return item.id}}
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
          keyExtractor={(item) => { return item.id}}
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