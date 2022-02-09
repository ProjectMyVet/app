import React from 'react'
import { View } from 'react-native'
import { MVText } from '../../components'

import styles from './styles'

export function AttendenceDetailScreen({ navigation }) {

    return (
        <View style={styles.container}>
          <MVText style={styles.title}>Detalhe Atendimento</MVText>
        </View>
    );
}