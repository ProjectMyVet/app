import React from 'react'
import { View } from 'react-native'
import { MVText } from '../../components'

import styles from './styles'

export function ScheduleScreen({ navigation }) {

    return (
        <View style={styles.container}>
          <MVText style={styles.title}>Agenda</MVText>
        </View>
    );
}