import React from 'react'
import { View } from 'react-native'
import { MVText } from '../../components'

import styles from './styles'

export function ProfileScreen({ navigation }) {

    return (
        <View style={styles.container}>
          <MVText style={styles.title}>Perfil</MVText>
        </View>
    );
}