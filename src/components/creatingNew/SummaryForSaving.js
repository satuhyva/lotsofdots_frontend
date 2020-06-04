import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { styles } from '../styles/createNewStyles.js'
import axios from 'axios'


const SummaryForSaving = ({ newQuestion, countOfVotes, dotColoringTheme, options, voteSameSeveralTimes, cancelAll, updateSavedID  }) => {

    const displayOptions = () => {
        return (
            <View style={styles.options}>
                {options.map(option => {
                    return (
                        <Text style={styles.optionText} key={option}> ⦾ {option}</Text>
                    )
                })}
            </View>

        )
    }
    const saveCreatedEventToDatabase = () => {
        saveEventToDatabase(newQuestion, countOfVotes, dotColoringTheme, options, voteSameSeveralTimes, updateSavedID)
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.infoSummary}>Question:</Text>
                <Text style={styles.summary}>{newQuestion}</Text>
                <Text style={styles.infoSummary}>Answering options:</Text>
                {displayOptions()}
                <Text style={styles.infoSummary}>Number of votes one can give:</Text>
                <Text style={styles.summary}>{countOfVotes}</Text>
                <Text style={styles.infoSummary}>Votes by one person per option:</Text>
                <Text style={styles.summary}>{voteSameSeveralTimes}</Text>
                <Text style={styles.infoSummary}>Dot coloring theme:</Text>
                <Text style={styles.summary}>{dotColoringTheme}</Text>
                <View style={styles.adjustCountView}>
                    <TouchableOpacity style={styles.buttonViewCancel} onPress={cancelAll}>
                        <Text style={styles.buttonTextCancel}>CANCEL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonView} onPress={saveCreatedEventToDatabase}>
                        <Text style={styles.buttonText}>CREATE</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default SummaryForSaving


const getUniqueID = async () => {
    let keepLooking = true
    let newUniqueIDString

    while (keepLooking) {
        newUniqueIDString = Math.floor(Math.random() * 1000000).toString()
        if (newUniqueIDString.length === 6) {
            try {
                const votingWithID = await axios.get(`https://thawing-tor-45525.herokuapp.com/api/votings/${newUniqueIDString}`)
                // const votingWithID = await axios.get(`http://localhost:3001/api/votings/${newUniqueIDString}`)
                if (votingWithID.data.length === 0) {
                    keepLooking = false
                    return newUniqueIDString
                }
            } catch (exception) {
                console.log('exception', exception)
            }
        }
    }
}



const saveEventToDatabase = async (newQuestion, countOfVotes, dotColoringTheme, options, voteSameSeveralTimes, updateSavedID) => {
    const newUniqueID = await getUniqueID()
    const severalVotesToOne = voteSameSeveralTimes === 'several votes per option per person' ? true : false
    try {
        const newVoting = {
            stringID : newUniqueID,
            question: newQuestion,
            options: options,
            dotTheme: dotColoringTheme,
            counts: countOfVotes,
            severalSame: severalVotesToOne,
        }
        const response = await axios.post('https://thawing-tor-45525.herokuapp.com/api/votings/', newVoting)
        console.log('response', response)
        // const response = await axios.post('http://localhost:3001/api/votings/', newVoting)
        if (response.status === 200) {
            updateSavedID(newUniqueID)
        }

    } catch (error) {
        console.log('error in saving', error)
    }
}

