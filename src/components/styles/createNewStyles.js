import { StyleSheet, Dimensions } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    appTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#3A3A38',
        marginTop: 40,
    },
    info: {
        fontSize: 15,
        fontStyle: 'italic',
        color: '#3A3A38',
    },
    title: {
        fontSize: 20,
        color: '#3A3A38',
        marginTop: 10,
        fontWeight: 'bold',
        marginBottom: 5,
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
    input: {
        borderColor: '#3A3A38',
        borderWidth: 1,
        borderRadius: 7,
        padding: 10,
        marginTop: 10,
        backgroundColor: 'white',
        width: 200,
        color: '#3A3A38',
    },
    adjustCountView: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
    },
    countsText: {
        fontSize: 30,
        color: '#3A3A38',
        marginTop: 10,
        fontWeight: 'bold',
        paddingLeft: 15,
        paddingRight: 15,
    },
    buttonViewCounts: {
        padding: 5,
        marginTop: 10,
        alignItems: 'center',
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#3A3A38',
    },
    buttonTextCounts: {
        fontSize: 20,
        color: '#3A3A38',
        fontWeight: 'bold',
    },
    radioButtonView: {
        marginTop: 20,
        marginBottom: 20,
    },
    radioButtonLabelText: {
        fontSize: 18,
        paddingLeft: 10,
        color: '#3A3A38',
    },
    radioButtonWrap: {
        alignContent: 'center',
        margin: 2,
    },
    buttonTextAdd: {
        fontSize: 20,
        color: '#3A3A38',
        fontWeight: 'bold',
    },
    optionText: {
        fontSize: 17,
        color: '#3A3A38',
        fontWeight: 'bold',
    },
    options: {
        marginTop: 5,
    },
    question: {
        fontSize: 18,
        color: '#3A3A38',
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 5,
    },
    infoSummary: {
        fontSize: 15,
        fontStyle: 'italic',
        color: '#3A3A38',
        marginTop: 15,
        marginBottom: 5,
    },
    summary: {
        fontSize: 18,
        color: '#3A3A38',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    buttonViewCancel: {
        padding: 5,
        marginTop: 10,
        alignItems: 'center',
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#3A3A38',
        marginRight: 10,
    },
    buttonTextCancel: {
        fontSize: 20,
        color: '#3A3A38',
        fontWeight: 'bold',
    },
    line: {
        height: 1,
        width: Dimensions.get('window').width / 1.2,
        backgroundColor: '#3A3A38',
        marginTop: 3,
        marginBottom: 20,
    },
})







