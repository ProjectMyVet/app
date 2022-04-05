import { StyleSheet, Dimensions } from 'react-native'
import { COLORS } from '../../constants';

const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingTop: height / 15,
        flex: 1,
        paddingRight: 15,
        paddingLeft: 15,
    },
    title: {
        fontSize: 22,
        color: COLORS.BLACK,
    },
    label: {
        fontSize: 16,
        color: COLORS.BLACK,
    },
    value: {
        fontSize: 20,
        color: COLORS.BLACK,
    },
    field: {
        marginTop: 15
    },
    button: {
        width: '80%',
        bottom: 0,
        left: '10%'
    }
});
  