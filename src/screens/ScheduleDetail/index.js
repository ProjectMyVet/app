import React, { useState, useEffect } from 'react'
import { View, FlatList, SafeAreaView } from 'react-native'
import Checkbox from 'expo-checkbox'

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

  useEffect(() => {
    const completeSchedule = route.params.schedule
    setSchedule(completeSchedule)
    const newDates = days.map(item => {
      let value = completeSchedule.find(day => day.dayOfWeek == item.dayOfWeek)
      return value ? {...item, checked: true } : item
    })
    setDaysOfWeek(newDates)
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        data={daysOfWeek}
        keyExtractor={(item) => item.dayOfWeek}
        renderItem={({ item }) => {
          return (
            <Checkbox 
              value={item.checked}
              onValueChange={() => {
                const list = Object.assign([], daysOfWeek)
                list[item.dayOfWeek - 1].checked = !list[item.dayOfWeek - 1].checked
                setDaysOfWeek(list)
              }}
            />
          )
        }}
      />
    </SafeAreaView>
  )
}