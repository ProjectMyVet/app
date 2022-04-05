import { StyleSheet } from 'react-native'
import { COLORS } from '../../constants';

export default StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 50,
        backgroundColor: COLORS.WHITE,
        flexGrow: 1,
        alignItems: 'center'
    },
    imageContainer: {
        alignItems: 'center'
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 100,
        borderWidth: 2,
    },
    name: {
        fontSize: 20,
        marginTop: 20,
        color: COLORS.BLACK,
    },
    email: {
        fontSize: 14,
        color: COLORS.DIM_GRAY,
    },
    crmv: {
        fontSize: 14,
        color: COLORS.BLACK,
    },
    description: {
        fontSize: 16,
        marginTop: 30,
        color: COLORS.BLACK,
        textAlign: 'center'
    },
    statsTitle: {
        marginTop: 30,
        fontSize: 18
    },
    statsContainer: {
        marginTop: 30,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly'
    },
    card: {
        alignItems: 'center'
    },
    cardGrade: {
        alignItems: 'center',
        color: COLORS.BLACK,
        marginTop: 10
    },
    cardName: {
        fontSize: 16,
        color: COLORS.BLACK
    },
    cardValue: {
        fontSize: 26,
        fontWeight: 'bold',
        color: COLORS.BLACK
    },
});
  