import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { MVText } from '../../components'
import { getDayOfWeekLabel } from '../../utils'

import styles from './styles'

const mock = [
  {
    id: 1,
    turn: 'MORNING',
    dayOfWeek: 1,
    fromTime: '08:00',
    toTime: '09:00'
  },
  {
    id: 2,
    turn: 'AFTERNOON',
    dayOfWeek: 1,
    fromTime: '12:00',
    toTime: '13:00'
  },
  {
    id: 3,
    turn: 'NIGHT',
    dayOfWeek: 1,
    fromTime: '18:00',
    toTime: '19:00'
  },
  {
    id: 4,
    turn: 'MORNING',
    dayOfWeek: 1,
    fromTime: '09:00',
    toTime: '10:00'
  },
  {
    id: 5,
    turn: 'MORNING',
    dayOfWeek: 1,
    fromTime: '10:00',
    toTime: '11:00'
  },
  {
    id: 6,
    turn: 'MORNING',
    dayOfWeek: 1,
    fromTime: '11:00',
    toTime: '12:00'
  },
  {
    id: 7,
    turn: 'MORNING',
    dayOfWeek: 2,
    fromTime: '11:00',
    toTime: '12:00'
  },
  {
    id: 8,
    turn: 'AFTERNOON',
    dayOfWeek: 2,
    fromTime: '13:00',
    toTime: '14:00'
  },
]

export function ScheduleScreen({ navigation }) {
    const [morningSchedule, setMorningSchedule] = useState([])
    const [afternoonSchedule, setAfternoonSchedule] = useState([])
    const [nightSchedule, setNightSchedule] = useState([])

    useEffect(() => {
      setMorningSchedule(mock.filter(item => item.turn === 'MORNING'))
      setAfternoonSchedule(mock.filter(item => item.turn === 'AFTERNOON'))
      setNightSchedule(mock.filter(item => item.turn === 'NIGHT'))
      // TODO: rhian.costa - 30/12/2021 - call to search all the schedules
    },[navigation])

    return (
        <View style={styles.container}>
          <TouchableOpacity style={styles.card}>
            <MVText style={styles.cardTitle}>Turno: Manhã</MVText>
            <View style={styles.cardSchedule}>
              <View>
                <MVText style={styles.cardTitle}>Horários:</MVText>
                {[...new Map(morningSchedule.map(item => [item['fromTime'], item])).values()].map((item) => (
                    <MVText key={item.id} style={styles.cardSubtitle}>{item.fromTime} - {item.toTime}</MVText>
                  ))
                }
              </View>
              <View>
                <MVText style={styles.cardTitle}>Dias:</MVText>
                {[...new Map(morningSchedule.map(item => [item['dayOfWeek'], item])).values()].map((item) => (
                    <MVText key={item.id} style={styles.cardSubtitle}>{getDayOfWeekLabel(item.dayOfWeek)}</MVText>
                  ))
                }
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <MVText style={styles.cardTitle}>Turno: Tarde</MVText>
            <MVText style={styles.cardTitle}>Horários:</MVText>
            {[...new Map(afternoonSchedule.map(item => [item['fromTime'], item])).values()].map((item) => (
                <MVText key={item.id} style={styles.cardSubtitle}>{item.fromTime} - {item.toTime}</MVText>
              ))
            }
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <MVText style={styles.cardTitle}>Turno: Noite</MVText>
            <MVText style={styles.cardTitle}>Horários:</MVText>
            {[...new Map(nightSchedule.map(item => [item['fromTime'], item])).values()].map((item) => (
                <MVText key={item.id} style={styles.cardSubtitle}>{item.fromTime} - {item.toTime}</MVText>
              ))
            }
          </TouchableOpacity>
        </View>
    );
}