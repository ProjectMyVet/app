import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import styles from './styles'

export function UserTypeScreen() {
  return (
    <View style={styles.container}>
      <Text>User Type Screen</Text>
      <StatusBar style="auto" />
    </View>
  );
}