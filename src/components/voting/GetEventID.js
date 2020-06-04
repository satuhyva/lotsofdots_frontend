import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { styles } from '../styles/voteStyles.js'

const GetEventID = ({ updateEventID }) => {

    const [ID, setID] = useState('')

    const handleIDchanged = (text) => {
        setID(text)
    }

    const updateID = () => {
        updateEventID(ID)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Event ID</Text>
            <Text style={styles.info}>Event can be found with its ID.</Text>
            <Text style={styles.info}>Write the 6-digit ID in the box below.</Text>
            <TextInput style={styles.input}
                multiline={true}
                value={ID}
                onChangeText={handleIDchanged}
            />
            {ID > 100000 && ID < 1000000 ?
                <View style={styles.container}>
                    <TouchableOpacity style={styles.buttonView} onPress={updateID}>
                        <Text style={styles.buttonText}>GET EVENT</Text>
                    </TouchableOpacity>
                </View>
                : null
            }
        </View>
    )
}

export default GetEventID






