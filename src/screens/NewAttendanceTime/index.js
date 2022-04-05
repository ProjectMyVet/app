import React, { useEffect, useState } from 'react'
import { View, ScrollView, Picker } from 'react-native'
import { MVText, MVButton } from '../../components'
import { Formik } from 'formik'
import axios from 'axios'

import styles from './styles'

const MORNING_TIME = [
  {
    fromTime: '06:00',
    toTime: '07:00',
  },
  {
    fromTime: '07:00',
    toTime: '08:00',
  },
  {
    fromTime: '08:00',
    toTime: '09:00',
  },
  {
    fromTime: '09:00',
    toTime: '10:00',
  },
  {
    fromTime: '10:00',
    toTime: '11:00',
  },
  {
    fromTime: '11:00',
    toTime: '12:00',
  },
]

const AFTERNOON_TIME = [
  {
    fromTime: '12:00',
    toTime: '13:00',
  },
  {
    fromTime: '13:00',
    toTime: '14:00',
  },
  {
    fromTime: '14:00',
    toTime: '15:00',
  },
  {
    fromTime: '15:00',
    toTime: '16:00',
  },
  {
    fromTime: '16:00',
    toTime: '17:00',
  },
  {
    fromTime: '17:00',
    toTime: '18:00',
  },
]


const NIGHT_TIME = [
  {
    fromTime: '18:00',
    toTime: '19:00',
  },
  {
    fromTime: '19:00',
    toTime: '20:00',
  },
  {
    fromTime: '20:00',
    toTime: '21:00',
  },
  {
    fromTime: '21:00',
    toTime: '22:00',
  },
  {
    fromTime: '22:00',
    toTime: '23:00',
  },
  {
    fromTime: '23:00',
    toTime: '00:00',
  },
]

export function NewAttendanceTimeScreen({ navigation, route }) {
  const [petId, setPetId] = useState({})
  const [type, setType] = useState({})
  const [userId, setUserId] = useState({})
  const [date, setDate] = useState({})
  const [turn, setTurn] = useState({})
  const [timeOption, setTimeOption] = useState([])
  const [defaultOption, setDefaultOption] = useState({})

  useEffect(() => {
    setPetId(route.params.petId)
    setUserId(route.params.userId)
    setType(route.params.type)
    setDate(route.params.date)
    setTurn(route.params.turn)
    const times = Object.assign([], handleTimes(route.params.turn))
    setTimeOption(times)
    setDefaultOption(times[0].fromTime)
  },[navigation, route])

  function handleTimes(turn) {
    if (turn === "MORNING") {
      return MORNING_TIME
    } else if (turn === "AFTERNOON") {
      return AFTERNOON_TIME
    } else {
      return NIGHT_TIME
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Formik
        enableReinitialize
        initialValues={{ time: defaultOption }}
        onSubmit={(values) => {
          const time = timeOption.find(item => item.fromTime === values.time)
          navigation.navigate('NewAttendanceVet', { type, userId, petId, date, turn, fromTime: time.fromTime, toTime: time.toTime })
        }}
      >
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View>
            <MVText style={styles.title}>Selecione o Horário</MVText>
            <View style={styles.picker}>
              <Picker
                selectedValue={values.time}
                style={{ height: 20, width: 150}}
                onValueChange={handleChange('time')}
                itemStyle={{ fontSize: 16 }}
                prompt={defaultOption}
              > 
                {timeOption.map((item) => ( 
                  <Picker.Item label={item.fromTime + " - " + item.toTime} value={item.fromTime} />
                  ))
                }
              </Picker>
            </View>
            <View style={styles.button}>
              <MVButton onPress={handleSubmit}>
                Próximo
              </MVButton>
            </View>
          </View>
        )}
      </Formik>
    </ScrollView>
  )
}