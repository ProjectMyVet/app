import React, { useState, useEffect } from 'react'
import { View, FlatList, SafeAreaView } from 'react-native'
import { MVText } from '../../components'
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

export function ScheduleDetailScreen({ navigation, route }) {
  const [schedule, setSchedule] = useState([])
  const [daysOfWeek, setDaysOfWeek] = useState([])
  const [turn, setTurn] = useState('')

  useEffect(() => {
    const completeSchedule = route.params.schedule
    const newDates = days.map(item => {
      let value = completeSchedule.find(day => day.dayOfWeek == item.dayOfWeek)
      return value ? {...item, checked: true } : item
    })
    setSchedule(completeSchedule)
    setDaysOfWeek(newDates)
    setTurn(route.params.turn)
  }, [])

  function handleChange(item) {
    const list = Object.assign([], daysOfWeek)
    list[item.dayOfWeek - 1].checked = !list[item.dayOfWeek - 1].checked
    setDaysOfWeek(list)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.list}>
        <MVText style={styles.title}>Turno: {getTurnLabel(turn)}</MVText>
        <MVText style={styles.subtitle}>Horários:</MVText>
        <FlatList 
          data={daysOfWeek}
          keyExtractor={(item) => item.dayOfWeek}
          renderItem={({ item }) => {
            return (
              <View style={styles.listItem}>
                <Checkbox 
                  value={item.checked}
                  style={styles.checkbox}
                  onValueChange={() => handleChange(item)}
                />
                <MVText style={styles.itemTitle}>{item.label}</MVText>
              </View> 
            )
          }}
        />
      </View>
    </SafeAreaView>
  )
}