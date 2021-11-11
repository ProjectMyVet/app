import { StyleSheet } from 'react-native'
import { COLORS } from '../../constants'

export default StyleSheet.create({
  input: {
    padding: 5,
    borderBottomWidth: 1,
    borderColor: COLORS.BLACK,
    minWidth: '100%',
    fontSize: 16,
    marginVertical: 15,
  },
  error: {
    position: 'absolute',
    bottom: -5,
    right: 10,
  },
  editLabel: {
    marginTop: 15,
  },
})
