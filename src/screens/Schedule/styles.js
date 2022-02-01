import { StyleSheet, Dimensions } from 'react-native'
import { COLORS } from '../../constants';

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
    card: {
        width: '95%',
        padding: 5,
        paddingTop: height / 20,
        height: height / 3.2,
        borderBottomWidth: 0.2,
        borderColor: COLORS.DIM_GRAY,
        justifyContent: 'center'
    },
    cardTitle: {
        color: COLORS.BLACK,
        fontSize: 20,
        padding: 5
    },
    cardSubtitle: {
        color: COLORS.DIM_GRAY,
        fontSize: 16,
        paddingLeft: 5,
        marginRight: 20,
    },
    cardSchedule: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    cardIcon: {
        justifyContent: 'center',
    }
});
  