import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { MVText } from '../../components'
import { getDayOfWeekLabel } from '../../utils'
import { EvilIcons } from '@expo/vector-icons'
import axios from 'axios'

import styles from './styles'

export function ScheduleScreen({ navigation, route }) {
    const [morningSchedule, setMorningSchedule] = useState([])
    const [afternoonSchedule, setAfternoonSchedule] = useState([])
    const [nightSchedule, setNightSchedule] = useState([])
    const [userId, setUserId] = useState({})
    const [schedule, setSchedule] = useState([])

    useEffect(() => {
      axios.get('http://localhost:8010/myvet/schedulers', { params: { userId: route.params.userId }})
          .then(response => {
            setMorningSchedule(response.data.filter(item => item.turn === 'MORNING'))
            setAfternoonSchedule(response.data.filter(item => item.turn === 'AFTERNOON'))
            setNightSchedule(response.data.filter(item => item.turn === 'NIGHT'))
            setSchedule(response.data)
          })
      setUserId(route.params.userId)
    },[navigation, route])
    
    function handleScheduleDetail(schedule, turn) {
      navigation.navigate('ScheduleDetail', { schedule, turn, userId })
    }

    return (
        <View style={styles.container}>
          <TouchableOpacity style={styles.card} onPress={() => handleScheduleDetail(morningSchedule, 'MORNING')}>
            <View style={styles.cardSchedule}>
              <View>
                <MVText style={styles.cardTitle}>Turno: Manhã</MVText>
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
              <View style={styles.cardIcon}>
                <EvilIcons name="arrow-right" size={54} color="black" />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => handleScheduleDetail(afternoonSchedule, 'AFTERNOON')}>   
            <View style={styles.cardSchedule}>
              <View>
                <MVText style={styles.cardTitle}>Turno: Tarde</MVText>
                <MVText style={styles.cardTitle}>Horários:</MVText>
                {[...new Map(afternoonSchedule.map(item => [item['fromTime'], item])).values()].map((item) => (
                    <MVText key={item.id} style={styles.cardSubtitle}>{item.fromTime} - {item.toTime}</MVText>
                  ))
                }
              </View>
              <View>
                <MVText style={styles.cardTitle}>Dias:</MVText>
                {[...new Map(afternoonSchedule.map(item => [item['dayOfWeek'], item])).values()].map((item) => (
                    <MVText key={item.id} style={styles.cardSubtitle}>{getDayOfWeekLabel(item.dayOfWeek)}</MVText>
                  ))
                }
              </View>
              <View style={styles.cardIcon}>
                <EvilIcons name="arrow-right" size={54} color="black" />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => handleScheduleDetail(nightSchedule, 'NIGHT')}>
            <View style={styles.cardSchedule}>
              <View>
                <MVText style={styles.cardTitle}>Turno: Noite</MVText>
                <MVText style={styles.cardTitle}>Horários:</MVText>
                {[...new Map(nightSchedule.map(item => [item['fromTime'], item])).values()].map((item) => (
                    <MVText key={item.id} style={styles.cardSubtitle}>{item.fromTime} - {item.toTime}</MVText>
                  ))
                }
              </View>
              <View>
                <MVText style={styles.cardTitle}>Dias:</MVText>
                {[...new Map(nightSchedule.map(item => [item['dayOfWeek'], item])).values()].map((item) => (
                    <MVText key={item.id} style={styles.cardSubtitle}>{getDayOfWeekLabel(item.dayOfWeek)}</MVText>
                  ))
                }
              </View>
              <View style={styles.cardIcon}>
                <EvilIcons name="arrow-right" size={54} color="black" />
              </View>
            </View>
          </TouchableOpacity>
        </View>
    );
}