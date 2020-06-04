import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from '../styles/createNewStyles.js'
import RadioButtonSelection from './RadioButtonSelection'


const SelectCanVoteSameOptionSeveralTimes = ({ voteSameSeveralTimes, handleVoteSameSeveralTimesWasSaved }) => {

    const [severalAllowed, setSeveralAllowed] = useState('')

    const handleChangedSelection = (newSelection) => {
        setSeveralAllowed(newSelection)
    }

    const saveSelection = () => {
        handleVoteSameSeveralTimesWasSaved(severalAllowed)
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Voting same option several times?</Text>
            <Text style={styles.info}>Are voters allowed to give one or </Text>
            <Text style={styles.info}>several votes to any single option?</Text>
            <RadioButtonSelection
                handleChange={handleChangedSelection}
                options={['one vote per option per person', 'several votes per option per person']}
            />
            {severalAllowed !== '' ?
                <View style={styles.container}>
                    <TouchableOpacity style={styles.buttonView} onPress={saveSelection}>
                        <Text style={styles.buttonText}>NEXT</Text>
                    </TouchableOpacity>
                </View>
                :
                null
            }
        </View>
    )
}

export default SelectCanVoteSameOptionSeveralTimes


