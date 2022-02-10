import { StyleSheet, Dimensions } from 'react-native'
import { COLORS } from '../../constants';

const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: height / 15,
        paddingBottom: height * 1.1,
        flex: 1,
    },
    title: {
        fontSize: 18,
        color: COLORS.BLACK,
    },
    item: {
        alignItems: 'center',
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between',
        height: 120,
        borderBottomWidth: 0.5,
        borderColor: COLORS.DIM_GRAY
    },
    subitemEnd: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: '100%',
        alignItems: 'flex-end'
    },
    subitemStart: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: '100%',
        alignItems: 'flex-start'
    }
});
  