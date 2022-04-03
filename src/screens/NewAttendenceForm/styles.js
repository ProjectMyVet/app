import { StyleSheet } from 'react-native'
import { COLORS } from '../../constants';

export default StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 40,
        backgroundColor: COLORS.WHITE,
        flexGrow: 1
    },
    title: {
        fontSize: 22,
        color: COLORS.BLACK,
        marginTop: 10,
        marginBottom: 20,
        fontWeight: 'bold',
        left: '20%'
    },
    label: {
        fontSize: 16,
    },
    picker: {
        height: 200,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        left: '35%'
    },
    button: {
        width: '80%',
        bottom: 0,
        left: '10%'
    }
});
  