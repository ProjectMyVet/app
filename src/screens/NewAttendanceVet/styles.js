import { StyleSheet, Dimensions } from 'react-native'
import { COLORS } from '../../constants'

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
        marginLeft: 10,
        fontSize: 22,
        color: COLORS.BLACK,
    },
    subtitle: {
        fontSize: 20,
        color: COLORS.DIM_GRAY,
    },
    default: {
        alignItems: 'center',
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'flex-start',
        height: 70,
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
    starContainer: {
        flexDirection: 'row',
    },
    icon: {
        marginRight: 20
    },
    button: {
        width: '80%',
        position: 'absolute',
        bottom: 0,
        left: '10%'
    },
    imageContainer: {
        alignItems: 'center'
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 100,
        borderWidth: 2,
    },
});
  