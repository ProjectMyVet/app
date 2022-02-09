import React from 'react'
import { View, TouchableOpacity, ScrollView } from 'react-native'
import { MVText } from '../../components'

import styles from './styles'

const attendence = [
  {
    id: 1,
    customerName: 'Rhian Lopes da Costa',
    vetName: 'Juliano Santos',
    status: 'CANCELED',
    type: 'VACCINE',
    date: '19/02/2022',
    turn: 'MORNING',
    fromTime: '08:00',
    toTime: '09:00',
  },
]

export function AttendenceScreen({ navigation }) {

  function handleAttendenceDetail(item) {
    navigation.navigate('AttendenceDetail')
  }

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        {attendence.map((item) => (
            <TouchableOpacity key={item.id} style={styles.item} onPress={() => handleAttendenceDetail(item)}>
              <MVText style={styles.title}>{item.vetName}</MVText>
            </TouchableOpacity>
          ))
        }
      </ScrollView>
    </>
  )
}