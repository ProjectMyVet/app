import { StyleSheet } from 'react-native'
import { COLORS } from '../../constants';

export default StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 40,
        backgroundColor: COLORS.WHITE,
        flexGrow: 1,
    },
    title: {
        fontSize: 22,
        color: COLORS.BLACK,
    },
    inputBorder: {
        width: '30%',
        borderRadius: 8,
        borderColor: '#cacaca',
        borderWidth: 1,
        marginBottom: 20,
    },
});
  