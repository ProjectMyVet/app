import React, { useEffect, useState } from 'react'
import { View, ScrollView, Picker } from 'react-native'
import { MVText, MVButton, MVInput, MVDatePicker } from '../../components'
import { Formik } from 'formik'
import axios from 'axios'

import styles from './styles'

const MORNING_TIME = [
  {
    id: 1,
    fromTime: '06:00',
    toTime: '07:00',
  },
  {
    id: 2,
    fromTime: '07:00',
    toTime: '08:00',
  },
  {
    id: 3,
    fromTime: '08:00',
    toTime: '09:00',
  },
  {
    id: 4,
    fromTime: '09:00',
    toTime: '10:00',
  },
  {
    id: 5,
    fromTime: '10:00',
    toTime: '11:00',
  },
  {
    id: 6,
    fromTime: '11:00',
    toTime: '12:00',
  },
]

const AFTERNOON_TIME = [
  {
    id: 7,
    fromTime: '12:00',
    toTime: '13:00',
  },
  {
    id: 8,
    fromTime: '13:00',
    toTime: '14:00',
  },
  {
    id: 9,
    fromTime: '14:00',
    toTime: '15:00',
  },
  {
    id: 10,
    fromTime: '15:00',
    toTime: '16:00',
  },
  {
    id: 11,
    fromTime: '16:00',
    toTime: '17:00',
  },
  {
    id: 12,
    fromTime: '17:00',
    toTime: '18:00',
  },
]


const NIGHT_TIME = [
  {
    id: 13,
    fromTime: '18:00',
    toTime: '19:00',
  },
  {
    id: 14,
    fromTime: '19:00',
    toTime: '20:00',
  },
  {
    id: 15,
    fromTime: '20:00',
    toTime: '21:00',
  },
  {
    id: 16,
    fromTime: '21:00',
    toTime: '22:00',
  },
  {
    id: 17,
    fromTime: '22:00',
    toTime: '23:00',
  },
  {
    id: 18,
    fromTime: '23:00',
    toTime: '00:00',
  },
]

export function NewAttendenceTimeScreen({ navigation, route }) {
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
    const times = handleTimes()
    setTimeOption(times)
    setDefaultOption(times[0].id)
  },[navigation, route])

  function handleTimes() {
    console.log(turn)
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
        initialValues={{ time: '' }}
        onSubmit={(values) => {
          // navigation.navigate('NewAttendenceTime', { type, userId, petId, date: values.date, turn: values.turn })
        }}
      >
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View>
            <MVText style={styles.title}>Selecione o Horário</MVText>
            <View style={styles.picker}>
              <Picker
                selectedValue={values.time}
                style={{ height: 20, width: 100}}
                onValueChange={handleChange('time')}
                itemStyle={{ fontSize: 16 }}
                // prompt={defaultOption}
              > 
                {timeOption.map((item) => ( 
                  <Picker.Item label={item.fromTime + " - " + item.toTime} value={item.id} />
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