import React from 'react'
import { View } from 'react-native'
import { MVText } from '../../components'

import styles from './styles'

export function NewReminderScreen({ navigation }) {

    return (
        <View style={styles.container}>
          <MVText style={styles.title}>Novo Lembrete</MVText>
        </View>
    );
}