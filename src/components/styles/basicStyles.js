import { StyleSheet, Dimensions } from 'react-native'

export const styles = StyleSheet.create({
    appContainer: {
        backgroundColor: '#EEEFE3',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    container: {
        alignItems: 'center',
    },
    appTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#3A3A38',
        marginTop: 60,
    },
    appInfo: {
        fontSize: 15,
        fontStyle: 'italic',
        color: '#3A3A38',
    },
    title: {
        fontSize: 20,
        color: '#3A3A38',
        marginTop: 30,
        fontWeight: 'bold',
    },
    buttonView: {
        backgroundColor: '#3A3A38',
        padding: 8,
        borderRadius: 7,
        marginTop: 10,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: '#EEEFE3',
        fontWeight: 'bold',
    },
    line: {
        height: 1,
        width: Dimensions.get('window').width / 1.2,
        backgroundColor: '#3A3A38',
        marginTop: 3,
    },
})


