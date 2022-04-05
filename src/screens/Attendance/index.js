import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity, ScrollView } from 'react-native'
import { MVText } from '../../components'
import { getTurnLabel, getAttendanceStatusLabel } from '../../utils'
import axios from 'axios'

import styles from './styles'

export function AttendanceScreen({ navigation, route }) {
  const [userId, setUserId] = useState({})
  const [userType, setUserType] = useState({})
  const [attendances, setAttendances] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8010/myvet/attendances', { params: { userId: route.params.userId }})
        .then(response => setAttendances(response.data))
    setUserId(route.params.userId)
    setUserType(route.params.userType)
    console.log(userId)
  }, [navigation, route])

  function handleAttendanceDetail(attendance) {
    navigation.navigate('AttendanceDetail', { attendance, userType, userId })
  }

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        {attendances.map((item) => (
            <TouchableOpacity key={item.id} style={styles.item} onPress={() => handleAttendanceDetail(item)}>
              <View style={styles.subitemStart}>
                {/* TODO: rhian.costa - verificar tipo de usuário e exibir o nome do usuário oposto */}
                <MVText style={styles.title}>{item.vetName.substring(0, 25)}</MVText>
                <MVText style={styles.title}>{getAttendanceStatusLabel(item.status)}</MVText>
              </View>
              <View style={styles.subitemEnd}>
                <MVText style={styles.title}>{item.date}</MVText>
                <MVText style={styles.title}>{getTurnLabel(item.turn)}</MVText>
                <MVText style={styles.title}>{item.fromTime} - {item.toTime}</MVText>
              </View>
            </TouchableOpacity>
          ))
        }
      </ScrollView>
    </>
  )
}