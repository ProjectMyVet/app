import { StyleSheet, Dimensions } from 'react-native'
import { COLORS } from '../../constants';

const { width, height } = Dimensions.get('window')

const contentHeight = height - 90

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.PRIMARY_BLUE,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: '85%',
    },
    title: {
        fontSize: 24,
        marginTop: 20,
        color: COLORS.WHITE,
    },
    subtitle: {
        fontSize: 16,
        color: COLORS.WHITE
    },
    image: {
        width: width - 10,
        height: contentHeight / 4,
        borderColor: COLORS.WHITE
    },
    line: {
        borderBottomColor: COLORS.WHITE,
        borderBottomWidth: 1,
        marginBottom: 30,
        marginTop: 60,
        width: '80%'
    },
    continue: {
        color: COLORS.WHITE,
        fontSize: 18
    }
});
  