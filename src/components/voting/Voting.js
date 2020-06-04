import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import GetEventID from './GetEventID'
import { styles } from '../styles/voteStyles.js'
import axios from 'axios'
import VotingOrMonitoringView from './VotingOrMonitoringView'

const Voting = ({ returnToWelcomePage, viewOnly }) => {

    const [eventID, setEventID] = useState('none')
    const [voterName, setVoterName] = useState('anonymous')
    const [namingReady, setNamingReady] = useState(false)
    const [loadingEvent, setLoadingEvent] = useState(true)
    const [tryAgain, setTryAgain] = useState(false)
    const [event, setEvent] = useState('none')
    const [votingDone, setVotingDone] = useState(false)

    const updateEventID = (ID) => {
        setEventID(ID)
    }
    const updateName = (name) => {
        setVoterName(name)
        setNamingReady(true)
    }

    const updateVotingState = () => {
        setVotingDone(true)
    }
    useEffect(() => {
        try {
            if (eventID !== 'none') {
                axios.get(`https://thawing-tor-45525.herokuapp.com/api/votings/${eventID}`)
                // axios.get(`http://localhost:3001/api/votings/${eventID}`)
                    .then((result) => {
                        console.log('result', result)
                        if (result.data && result.data.length === 1) {
                            setEvent(result.data[0])
                            if (result.data[0].dotTheme !== 'different colors, show identities') {
                                setNamingReady(true)
                            }
                            setLoadingEvent(false)
                        } else {
                            setLoadingEvent(false)
                            setTryAgain(true)
                        }
                    })
            }
        } catch (exception) {
            console.log('exception', exception)
        }
    }, [eventID, voterName, votingDone])


    const infoText1 = (viewOnly || votingDone) ? 'MONITOR VOTING' : 'GIVE YOUR VOTES'
    const infoText2 = (viewOnly || votingDone) ? 'View current voting situation.' : 'Voting in the voting event.'

    return (
        <View style={styles.container}>
            <Text style={styles.appTitle}>LotsOfDots</Text>
            <Text style={styles.title}>{infoText1}</Text>
            <Text style={styles.info}>{infoText2}</Text>
            <View style={styles.line}/>

            {eventID === 'none' ?
                <GetEventID
                    eventID={eventID}
                    updateEventID={updateEventID}
                />
                : null
            }
            <VotingOrMonitoringView
                votingDone={votingDone}
                viewOnly={viewOnly}
                eventID={eventID}
                event={event}
                loadingEvent={loadingEvent}
                tryAgain={tryAgain}
                namingReady={namingReady}
                updateName={updateName}
                voterName={voterName}
                updateVotingState={updateVotingState}
                returnToWelcomePage={returnToWelcomePage}/>
        </View>
    )
}

export default Voting










