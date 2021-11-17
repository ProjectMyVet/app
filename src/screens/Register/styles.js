import { StyleSheet } from 'react-native'
import { COLORS } from '../../constants';

export default StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 40,
        backgroundColor: COLORS.WHITE,
        flexGrow: 1,
    },
    topContainer: {
        flex: 1,
        marginBottom: 30,
      },
    title: {
        fontWeight: 'bold',
        marginTop: 20,
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
    buttonContainer: {
        alignItems: 'center'
    },
    button: {
        width: '90%',
    },
});
  