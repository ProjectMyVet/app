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
        fontSize: 22,
        color: COLORS.BLACK,
    },
    subtitle: {
        fontSize: 18,
        color: COLORS.DIM_GRAY,
    },
    item: {
        alignItems: 'flex-start',
        flexDirection: 'column',
        width: '90%',
        justifyContent: 'flex-start',
        height: 100,
        borderBottomWidth: 0.5,
        borderColor: COLORS.DIM_GRAY
    },
    icon: {
        marginRight: 20
    },
    button: {
        width: '80%',
        position: 'absolute',
        bottom: 20,
        left: '10%'
    }
});
  