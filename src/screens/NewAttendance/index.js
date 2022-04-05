import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { MVText } from '../../components'
import { MaterialIcons, FontAwesome5, EvilIcons } from '@expo/vector-icons'

import styles from './styles'

export function NewAttendanceScreen({ navigation, route }) {
  const [userId, setUserId] = useState({})

  useEffect(() => {
    setUserId(route.params.userId)
  },[navigation, route])

  function handleSubmit(type) {
    navigation.navigate('NewAttendanceForm', { type, userId })
  }

  return (
      <View style={styles.container}>
        <MVText style={styles.subtitle}>Deseja efetuar um novo atendimento?</MVText>
        <TouchableOpacity style={styles.card} onPress={() => handleSubmit('VACCINE')}>
          <MaterialIcons name="medical-services" size={34} color="black" />
          <MVText style={styles.title}>Vacina</MVText>
          <EvilIcons name="arrow-right" size={54} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => handleSubmit('APPOINTMENT')}>
          <FontAwesome5 name="clinic-medical" size={34} color="black" />
          <MVText style={styles.title}>Consulta</MVText>
          <EvilIcons name="arrow-right" size={54} color="black" />
        </TouchableOpacity>
      </View>
  )
}