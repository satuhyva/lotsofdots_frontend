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
    optionContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    voterContainer: {
        flexDirection: 'row',
    },
    buttonsContainer: {
        // flexDirection: 'row',
    },

    voteButtonText: {
        fontSize: 12,
        color: '#EEEFE3',
        fontWeight: 'bold',
    },
    voteButtonView: {
        padding: 5,
        borderRadius: 7,
        alignItems: 'center',
        marginBottom: 3,
    },
    optionAndDotContainer: {
        marginLeft: 15,
    },
    optionView: {

    },
    optionText: {
        fontSize: 18,
        color: '#3A3A38',
        fontWeight: 'bold',
    },
    dotsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: Dimensions.get('window').width / 2,
    },
    notVotedText: {
        fontSize: 16,
        color: '#3A3A38',
        fontStyle: 'italic',
    },
    identityMapView: {
        marginTop: 20,
        marginLeft: 15,
    },
    line: {
        height: 1,
        width: Dimensions.get('window').width / 1.2,
        backgroundColor: '#3A3A38',
        marginTop: 3,
        marginBottom: 20,
    },
})




