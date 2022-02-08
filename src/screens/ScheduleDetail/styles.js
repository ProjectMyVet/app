import { StyleSheet } from 'react-native'
import { COLORS } from '../../constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        flexDirection: 'column'
    },
    list: {
        margin: 15
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    title: {
        fontSize: 24,
        color: COLORS.BLACK,
    },
    subtitle: {
        fontSize: 18,
        color: COLORS.BLACK,
        marginTop: 10
    },
    itemTitle: {
        fontSize: 18,
        color: COLORS.BLACK,
        marginLeft: 10,
        marginTop: 10
    },
    checkbox: {
        marginTop: 10
    },
    button: {
        width: '80%',
        bottom: 0,
        left: '10%'
    }
});
  