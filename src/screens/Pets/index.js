import React from 'react'
import { View } from 'react-native'
import { MVText } from '../../components'

import styles from './styles'

export function PetsScreen({ navigation }) {

    return (
        <View style={styles.container}>
          <MVText style={styles.title}>Pets</MVText>
        </View>
    );
}