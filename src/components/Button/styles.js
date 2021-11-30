import { StyleSheet } from 'react-native'
import { COLORS } from '../../constants'

export default StyleSheet.create({
    button: {
        height: 50,
        borderWidth: 1,
        borderColor: COLORS.DIM_GRAY,
        backgroundColor: COLORS.LIGHT_GRAY,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        borderRadius: 10,
        marginVertical: 15,
    },
    label: {
        letterSpacing: 1.2,
    },
})
  