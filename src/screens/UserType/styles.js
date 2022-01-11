import { StyleSheet, Dimensions } from 'react-native'
import { COLORS } from '../../constants'

const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
        height: '100%'
    },
    vet: {
        backgroundColor: COLORS.PRIMARY_BLUE,
        width: width / 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    customer: {
        backgroundColor: COLORS.PRIMARY_ORANGE,
        width: width / 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: width / 4,
        height: width / 4,
        margin: 200
    },
    userTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.WHITE,
        marginTop: 10
    }
});
  