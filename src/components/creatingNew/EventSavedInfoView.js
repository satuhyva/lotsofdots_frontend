import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from '../styles/createNewStyles.js'


const EventSavedInfoView = ({ savedID, returnToWelcomePage }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>EVENT SUCCESFULLY CREATED</Text>
            <Text style={styles.info}>Event ID for the newly created voting event:</Text>
            <Text style={styles.title}>{savedID}</Text>
            <Text style={styles.info}>Give this ID to those people</Text>
            <Text style={styles.info}>whom you wish to participate in voting.</Text>
            <View style={styles.container}>
                <TouchableOpacity style={styles.buttonView} onPress={() => returnToWelcomePage()}>
                    <Text style={styles.buttonText}>OK</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default EventSavedInfoView




