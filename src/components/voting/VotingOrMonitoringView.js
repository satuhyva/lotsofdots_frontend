import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import GetVoterName from './GetVoterName'
import GiveVotes from './GiveVotes'
import MonitorVoting from './MonitorVoting'
import { styles } from '../styles/voteStyles.js'


const TryAgain = ({ returnToWelcomePage  }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.info}>No voting event could be found with</Text>
            <Text style={styles.info}>the ID you gave. Please try again.</Text>
            <TouchableOpacity style={styles.buttonView} onPress={() => returnToWelcomePage()}>
                <Text style={styles.buttonText}>RETURN</Text>
            </TouchableOpacity>
        </View>
    )
}


const VotingOrMonitoringView = ({ votingDone, viewOnly, eventID, event, loadingEvent, tryAgain, namingReady, updateName, voterName, updateVotingState, returnToWelcomePage }) => {

    if (viewOnly && event === 'none' && !loadingEvent) {
        return <TryAgain returnToWelcomePage={returnToWelcomePage}/>
    }
    if (votingDone || (viewOnly && eventID !== 'none' && !loadingEvent)) {
        return (
            <MonitorVoting
                event={event}
                returnToWelcomePage={returnToWelcomePage}
            />
        )
    } else if (!viewOnly && !votingDone) {
        return (
            <View>
                {eventID !== 'none' && loadingEvent && !tryAgain ?
                    <Text style={styles.title}>LOADING EVENT...</Text>
                    : null
                }
                {tryAgain && !loadingEvent ?
                    <TryAgain returnToWelcomePage={returnToWelcomePage}/>
                    : null
                }
                {event !== 'none' && !loadingEvent && !namingReady ?
                    <GetVoterName
                        updateName={updateName}
                        eventID={eventID}
                        voters={event.voters}
                    />
                    : null
                }
                {event !== 'none' && !loadingEvent && namingReady && !votingDone ?
                    <GiveVotes
                        eventID={eventID}
                        event={event}
                        voterName={voterName}
                        updateVotingState={updateVotingState}
                    />
                    : null
                }
            </View>
        )
    } else {
        return null
    }
}

export default VotingOrMonitoringView

