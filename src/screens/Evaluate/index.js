import React, { useEffect, useState } from 'react'
import { View, ScrollView } from 'react-native'
import { MVText, MVButton, MVInput } from '../../components'
import { MaterialIcons } from '@expo/vector-icons'
import { Formik } from 'formik'
import axios from 'axios'

import styles from './styles'

export function EvaluateScreen({ navigation, route }) {
  const [userId, setUserId] = useState({})
  const [attendanceId, setAttendanceId] = useState({})
  const [totalStars, setTotalStars] = useState(5)
  const [gainStars, setGainStars] = useState(3)

  useEffect(() => {
    setUserId(route.params.userId)
    setAttendanceId(route.params.attendanceId)
  },[navigation, route])

  function upvote() {
    setGainStars(gainStars + 1)
  }

  function downvote() {
    setGainStars(gainStars - 1)
  }

  return (
      <ScrollView style={styles.container}>
        <Formik
          enableReinitialize
          initialValues={{ description: '' }}
          onSubmit={(values) => {
            const body = {
              customerId: userId,
              attendanceId,
              grade: gainStars,
              description: values.description
            }
            axios.post('http://localhost:8010/myvet/evaluations', body)
              .then(response => navigation.navigate('Attendance'))
          }}
        >
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View>
            <MVText style={styles.title}>Avaliação do Atendimento</MVText>
            <View style={styles.starContainer}>
              {Array.from({length: gainStars}, (x, i) => {
                return (
                  <MaterialIcons key={i} onPress={downvote} name="star" size={30} color="#FFA000"/>
                )
              })}
              {Array.from({length: totalStars-gainStars}, (x, i) => {
                return (
                  <MaterialIcons key={i} onPress={upvote} name="star-border" size={30} color="#FFA000" />
                )
              })}
            </View>
            <MVInput 
              label='Descrição' 
              placeholder='Ótimo Atendimento!' 
              onChangeText={handleChange('description')}
              onBlur={handleBlur('description')}
              value={values.description}
            />
            <View style={styles.button}>
              <MVButton onPress={handleSubmit}>
                Salvar
              </MVButton>
            </View>
          </View>
        )}
      </Formik>
    </ScrollView>
  )
}