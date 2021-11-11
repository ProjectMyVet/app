import { StyleSheet, Dimensions } from 'react-native'
import { COLORS } from '../../constants'

const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'row'
    },
    vet: {
        backgroundColor: COLORS.LIGHT_GRAY,
        height: height,
        width: width / 2,
    },
    customer: {
        backgroundColor: COLORS.DARK_GRAY,
        height: height,
        width: width / 2,
    },
});
  