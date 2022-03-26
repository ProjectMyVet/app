import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity, ScrollView } from 'react-native'
import { MVText, MVButton } from '../../components'
import axios from 'axios'

import styles from './styles'

const mock = [
  {
    id: 1,
    date: '10-01-2022 19:30',
    action: 'Dar comida especial',
  },
  {
    id: 2,
    date: '19-06-2022 00:00',
    action: 'Dar remédio de vermes batat frita 123 as vezes é bom',
  },
]

export function ReminderScreen({ navigation, route }) {
  const [reminders, setReminders] = useState([])
  const [userId, setUserId] = useState({})

  useEffect(() => {
    axios.get('http://localhost:8010/myvet/reminders', { params: { userId: route.params.userId }})
        .then(response => setReminders(response.data))
    setUserId(route.params.userId)
  },[navigation, route])

  function handleReminderDetail(reminder) {
    navigation.navigate('ReminderDetail', { reminder, userId })
  }

  function handleAddReminder() {
    navigation.navigate('NewReminder', { userId })
  }

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        {reminders.map((item) => (
            <TouchableOpacity key={item.id} style={styles.item} onPress={() => handleReminderDetail(item)}>
              <MVText style={styles.title}>{item.action.substring(0, 20)}...</MVText>
              <MVText style={styles.title}>{item.date}</MVText>
            </TouchableOpacity>
          ))
        }
      </ScrollView>
      <MVButton style={styles.button} onPress={handleAddReminder}>Adicionar Lembrete</MVButton>
    </>
  );
}