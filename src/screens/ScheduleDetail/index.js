import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { MVText, MVCheckBox } from '../../components'

import styles from './styles'

export function ScheduleDetailScreen({ navigation, route }) {
    const [schedule, setSchedule] = useState([])

    useEffect(() => {
      setSchedule(route.params.schedule)
    }, [route])

    return (
        <View style={styles.container}>
          <MVText style={styles.title}>Detalhe Agenda</MVText>
          <MVCheckBox/>
        </View>
    );
}