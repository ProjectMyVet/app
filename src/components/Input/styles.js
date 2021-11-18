import { StyleSheet } from 'react-native'
import { COLORS } from '../../constants'

export default StyleSheet.create({
  label: {
    color: COLORS.BLACK,
    fontSize: 16,
    textAlign: 'left',
  },
  input: {
    padding: 10,
    fontSize: 16,
    height: 50,
    marginBottom: 10,
    color: COLORS.DIM_GRAY,
    borderBottomWidth: 1,
    backgroundColor: COLORS.WHITE
  }
})
