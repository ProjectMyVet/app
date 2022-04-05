import { StyleSheet, Dimensions } from 'react-native'
import { COLORS } from '../../constants'

const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    subtitle: {
        fontSize: 18,
        color: COLORS.BLACK,
    },
    title: {
        fontSize: 32,
        color: COLORS.BLACK,
    },
    card: {
        width: '95%',
        padding: 5,
        paddingTop: height / 20,
        height: height / 3.2,
        borderWidth: 0.2,
        borderRadius: 15,
        marginTop: 10,
        borderColor: COLORS.DIM_GRAY,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row'
    },
});
  