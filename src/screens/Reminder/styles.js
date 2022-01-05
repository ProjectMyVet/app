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
        fontSize: 16,
        color: COLORS.BLACK,
    },
    item: {
        alignItems: 'center',
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between',
        height: 70,
        borderBottomWidth: 0.5,
        borderColor: COLORS.DIM_GRAY
    },
    icon: {
        marginRight: 20
    },
    button: {
        width: '80%',
        position: 'absolute',
        bottom: 0,
        left: '10%'
    }
});
  