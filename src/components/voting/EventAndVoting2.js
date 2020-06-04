import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import firestore from '@react-native-firebase/firestore'
import GiveVotes from './GiveVotes'


const EventAndVoting = ({ eventID, voterName }) => {

    const [loading, setLoading] = useState(true)
    const [event, setEvent] = useState('none')

    useEffect(() => {
        const firestoreReference = firestore().collection('votings')
        // console.log('firestoreReference', firestoreReference)
        return firestoreReference.onSnapshot((querySnapshot) => {
            // console.log('querySnapshot', querySnapshot)
            if (querySnapshot && querySnapshot._docs && querySnapshot._docs[0]._data) {
                const foundEvent = querySnapshot._docs[0]._data
                const eventWithPath = { ...foundEvent, path: querySnapshot._changes[0]._nativeData.doc.path }
                setEvent(eventWithPath)
                console.log('++++++++++++++++++++++++')
                if (loading) {
                    setLoading(false)
                }
            } else {

            }
        }, [])
    })


    return (
        <View>
            {loading ?
                <Text>LOADING...</Text>
                :
                <GiveVotes
                    event={event}
                    voterName={voterName}
                />
            }
        </View>
    )
}

export default EventAndVoting

