import React, { useState, useEffect } from 'react'
import { View, ScrollView } from 'react-native'
import { MVText } from '../../components'

import styles from './styles'

export function AttendenceDetailScreen({ navigation, route }) {
  const [attendence, setAttendence] = useState({})

  useEffect(() => {
    setAttendence(route.params.attendence)
    console.log(route.params.attendence)
  },[])

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.field}>
          <MVText style={styles.label}>Nome Tutor:</MVText>
          <MVText style={styles.value}>{attendence.customerName}</MVText>
        </View>
        <View style={styles.field}>
          <MVText style={styles.label}>Nome Veterinário:</MVText>
          <MVText style={styles.value}>{attendence.vetName}</MVText>
        </View>
        <View style={styles.field}>
          <MVText style={styles.label}>Pet:</MVText>
          <MVText style={styles.value}>{attendence.pet['name']}</MVText>
        </View>
        <View style={styles.field}>
          <MVText style={styles.label}>Idade Pet:</MVText>
          <MVText style={styles.value}>{attendence.vetName}</MVText>
        </View> 
      </ScrollView>
    </>
  )
}