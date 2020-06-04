import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
// import firestore from '@react-native-firebase/firestore'
import { getOptionsSortedAccordingToVoterCount } from './helperFunctions.js'
import Option from './Option'
import DotIdentity from './DotIdentity'
import { styles } from '../styles/voteStyles.js'
import axios from 'axios'



const GiveVotes = ({ eventID, event, voterName, updateVotingState }) => {

    // console.log('event', event)
    const [optionsVoted, setOptionsVoted] = useState([])

    const handleOptionsVotedChanged = (action, option) => {
        // console.log('action, option', action, option)
        updateOptionsVoted(action, option, optionsVoted, setOptionsVoted, event)
    }

    const sortedOptionsWithVoters = getOptionsSortedAccordingToVoterCount(event.optionsWithVoters)

    const saveSelectedVotingActions = async () => {
        await saveSelectedVotings(event, voterName, optionsVoted, eventID, updateVotingState)
    }

    const displayColorIdentityMapping = () => {
        return event.voters.map((person, index) => {
            return <DotIdentity key={person} index={index} name={person} dotTheme={event.dotTheme} voters={event.voters} lastIsOrange={true}/>
        })

    }

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.title}>{event.question}</Text>
            </View>
            {sortedOptionsWithVoters.map((option, index) => {
                return (
                    <Option
                        key={index}
                        option={option}
                        dotTheme={event.dotTheme}
                        voters={event.voters}
                        optionsVoted={optionsVoted}
                        countOfVotes={event.countOfVotes}
                        handleOptionsVotedChanged={handleOptionsVotedChanged}
                        event={event}
                    />
                )
            })}
            {event.dotTheme === 'different colors, show identities'?
                <View style={styles.identityMapView}>
                    <Text style={styles.info}>Voter identities:</Text>
                    {displayColorIdentityMapping()}
                </View>
                : null
            }

            <View style={styles.container}>
                <TouchableOpacity style={styles.buttonView} onPress={saveSelectedVotingActions}>
                    <Text style={styles.buttonText}>SAVE YOUR VOTES</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default GiveVotes



const getNumberOfOccurencies = (array, text) => {

    let count = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] === text) {
            count++
        }
    }
    return count
}

const updateOptionsVoted = (action, option, optionsVoted, setOptionsVoted, event) => {
    let updatedOptions = []
    if (action === 'vote' ) {
        if (optionsVoted.length < event.counts) {
            updatedOptions = optionsVoted.concat(option.option)
            setOptionsVoted(updatedOptions)
        }
    } else {
        let wasRemoved = false
        for (let i = 0; i < optionsVoted.length; i++) {
            if (optionsVoted[i] === option.option && !wasRemoved) {
                wasRemoved = true
            } else {
                updatedOptions.push(optionsVoted[i])
            }
            setOptionsVoted(updatedOptions)
        }
    }
}


const saveSelectedVotings = async (event, voterName, optionsVoted, eventID, updateVotingState) => {
    let votersUpdatedForAnonymousCases = [...event.voters]
    let updatedVoterName = voterName
    if (voterName === 'anonymous') {
        const numberOfAnonymous = event.voters.length + 1
        updatedVoterName = `anonymous${numberOfAnonymous}`
        votersUpdatedForAnonymousCases.push(updatedVoterName)

        const updateData = { voters: votersUpdatedForAnonymousCases }
        try {
            await axios.put(`https://thawing-tor-45525.herokuapp.com/api/votings/${eventID}`, updateData)
            // const result = await axios.put(`http://localhost:3001/api/votings/${eventID}`, updateData)
        } catch (exception) {
            console.log('exception', exception)
        }
    }

    const updatedOptionsWithVoters = event.optionsWithVoters.map(item => {
        if (optionsVoted.includes(item.option)) {
            let updatedOptionsWithVoters = [...item.voters]
            const numberOfOccurencies = getNumberOfOccurencies(optionsVoted, item.option)
            for (let i = 0; i < numberOfOccurencies; i++) {
                updatedOptionsWithVoters.push(updatedVoterName)
            }
            return { option: item.option, voters: updatedOptionsWithVoters }
        } else {
            return item
        }
    })

    const updateData = { optionsWithVoters: updatedOptionsWithVoters }
    try {
        const result = await axios.put(`https://thawing-tor-45525.herokuapp.com/api/votings/${eventID}`, updateData)
        // const result = await axios.put(`http://localhost:3001/api/votings/${eventID}`, updateData)
        if (result.status === 200) {
            updateVotingState()
        }
    } catch (exception) {
        console.log('exception', exception)
    }
}


