import React from 'react'
import { View, TouchableOpacity, ScrollView } from 'react-native'
import { MVText } from '../../components'

import styles from './styles'

const attendence = [
  {
    id: 1,
    customerName: 'Rhian Lopes da Costa',
    vetName: 'Juliano Santos',
    status: 'CANCELADO',
    type: 'VACCINE',
    date: '19/02/2022',
    turn: 'MANHÃ',
    fromTime: '08:00',
    toTime: '09:00',
    pet: {
      name: 'Linda',
      birthDate: '19/01/2018',
    }
  },
  {
    id: 2,
    customerName: 'Rhian Lopes da Costa',
    vetName: 'Pedro Gonçalves',
    status: 'SOLICITADO',
    type: 'APPOINTMENT',
    date: '24/03/2022',
    turn: 'TARDE',
    fromTime: '12:00',
    toTime: '13:00',
    pet: {
      name: 'Rodinho',
      birthDate: '19/01/2018',
    }
  },
  {
    id: 3,
    customerName: 'Rhian Lopes da Costa',
    vetName: 'Pedro Gonçalves',
    status: 'FINALIZADO',
    type: 'APPOINTMENT',
    date: '19/01/2022',
    turn: 'TARDE',
    fromTime: '15:00',
    toTime: '16:00',
    pet: {
      name: 'Bob',
      birthDate: '19/01/2018',
    }
  },
]

export function AttendenceScreen({ navigation }) {

  function handleAttendenceDetail(attendence) {
    navigation.navigate('AttendenceDetail', { attendence })
  }

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        {attendence.map((item) => (
            <TouchableOpacity key={item.id} style={styles.item} onPress={() => handleAttendenceDetail(item)}>
              <View style={styles.subitemStart}>
                {/* TODO: rhian.costa - verificar tipo de usuário e exibir o nome do usuário oposto */}
                <MVText style={styles.title}>{item.vetName.substring(0, 25)}</MVText>
                <MVText style={styles.title}>{item.status}</MVText>
              </View>
              <View style={styles.subitemEnd}>
                <MVText style={styles.title}>{item.date}</MVText>
                <MVText style={styles.title}>{item.turn}</MVText>
                <MVText style={styles.title}>{item.fromTime} - {item.toTime}</MVText>
              </View>
            </TouchableOpacity>
          ))
        }
      </ScrollView>
    </>
  )
}