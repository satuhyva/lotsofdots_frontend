import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { getOptionsSortedAccordingToVoterCount } from './helperFunctions.js'
import DotIdentity from './DotIdentity'
import MonitorOption from './MonitorOption'
import { styles } from '../styles/voteStyles.js'


const MonitorVoting = ({ event, returnToWelcomePage }) => {

    const sortedOptionsWithVoters = getOptionsSortedAccordingToVoterCount(event.optionsWithVoters)

    const displayColorIdentityMapping = () => {
        if (event.dotTheme === 'different colors, show identities') {
            return event.voters.map((person, index) => {
                return <DotIdentity key={person} index={index} name={person} dotTheme={event.dotTheme} voters={event.voters} lastIsWhite={false}/>
            })
        }
        return null
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>{event.question}</Text>
            </View>
            {sortedOptionsWithVoters.map((option, index) => {
                return (
                    <MonitorOption
                        key={index}
                        option={option}
                        voters={event.voters}
                        event={event}
                    />
                )
            })}
            {event.dotTheme === 'different colors, show identities' ?
                <View style={styles.identityMapView}>
                    <Text style={styles.info}>Voter identities:</Text>
                    {displayColorIdentityMapping()}
                </View>
                : null
            }
            <View style={styles.container}>
                <TouchableOpacity style={styles.buttonView} onPress={returnToWelcomePage}>
                    <Text style={styles.buttonText}>RETURN TO START</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}


export default MonitorVoting


