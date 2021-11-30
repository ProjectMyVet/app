import { StyleSheet, Dimensions } from 'react-native'
import { COLORS } from '../../constants';

const { width, height } = Dimensions.get('window')

const contentHeight = height - 90

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: '85%',
    },
    title: {
        fontSize: 22,
        color: COLORS.BLACK,
    },
    subtitle: {
        color: COLORS.DARK_GRAY
    },
    image: {
        width: width / 2,
        height: contentHeight / 4,
        borderColor: COLORS.BLACK
    },
    line: {
        borderBottomColor: COLORS.LIGHT_GRAY,
        borderBottomWidth: 1,
        marginBottom: 30,
        marginTop: 90,
        width: '80%'
    },
});
  