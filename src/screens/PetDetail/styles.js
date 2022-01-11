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
        marginTop: 10,
        marginBottom: 20,
        fontWeight: 'bold'
    },
    inputBorder: {
        width: '30%',
        borderRadius: 8,
        borderColor: '#cacaca',
        borderWidth: 1,
        marginBottom: 20,
    },
    datePickerLabel: {
        fontSize: 16
    },
    datePickerStyle: {
        width: '100%',
        color: COLORS.BLACK
    },
    label: {
        fontSize: 16,
        color: COLORS.BLACK
    },
    picker: {
        height: 200,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    button: {
        width: '80%',
        bottom: 0,
        left: '10%'
    }
});
  