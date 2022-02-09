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
        fontSize: 22,
        color: COLORS.BLACK,
    },
    item: {
        alignItems: 'center',
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'flex-start',
        height: 120,
        borderBottomWidth: 0.5,
        borderColor: COLORS.DIM_GRAY
    },
});
  