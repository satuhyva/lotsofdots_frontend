import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { styles } from '../styles/voteStyles.js'
import axios from 'axios'



const GetVoterName = ({ updateName, eventID, voters }) => {

    const [voterName, setVoterName] = useState('')
    const [nameIsTaken, setNameIsTaken] = useState('false')

    const handleVoterNameChanged = (text) => {
        setVoterName(text)
        if (voters.includes(text)) {
            setNameIsTaken(true)
        } else {
            setNameIsTaken(false)
        }
    }

    const selectName = async () => {
        const updatedVoters = voters.concat(voterName)
        const updateData = { voters: updatedVoters }
        try {
            const result = await axios.put(`https://thawing-tor-45525.herokuapp.com/api/votings/${eventID}`, updateData)
            // const result = await axios.put(`http://localhost:3001/api/votings/${eventID}`, updateData)
            if (result.status === 200 && result.data.voters.includes(voterName)) {
                updateName(voterName)
            } else {
                setVoterName('')
                setNameIsTaken(false)
            }
        } catch (exception) {
            console.log('exception', exception)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Your name</Text>
            <Text style={styles.info}>Depending on the voting parameters,</Text>
            <Text style={styles.info}>your name might be displayed.</Text>
            <Text style={styles.info}>Please write your name below.</Text>
            <TextInput style={styles.input}
                multiline={true}
                value={voterName}
                onChangeText={handleVoterNameChanged}
            />
            {voterName !== '' && voterName.charAt(0) !== ' ' && !nameIsTaken ?
                <View style={styles.container}>
                    <TouchableOpacity style={styles.buttonView} onPress={selectName}>
                        <Text style={styles.buttonText}>START VOTING</Text>
                    </TouchableOpacity>
                </View>
                : null
            }
        </View>
    )
}

export default GetVoterName






