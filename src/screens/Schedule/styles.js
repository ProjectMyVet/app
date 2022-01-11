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
        justifyContent: 'center',
        // alignItems: 'flex-start',
        height: height / 3.2,
        borderBottomWidth: 0.2,
        borderColor: COLORS.DIM_GRAY,
    },
    cardTitle: {
        color: COLORS.BLACK,
        fontSize: 20
    },
    cardSubtitle: {
        color: COLORS.DIM_GRAY,
        fontSize: 16
    },
    cardSchedule: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
});
  