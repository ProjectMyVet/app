import { StyleSheet } from 'react-native'
import { COLORS } from '../../constants'

export default StyleSheet.create({
    button: {
        height: 50,
        borderWidth: 2,
        borderColor: COLORS.WHITE,
        backgroundColor: COLORS.PRIMARY_BLUE,
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
  