import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from '../styles/createNewStyles.js'


const ChangeCountButton = ({ changeCount, direction }) => {
    return (
        <TouchableOpacity style={styles.buttonViewCounts} onPress={() => changeCount(direction)}>
            <Text style={styles.buttonTextCounts}>{direction}</Text>
        </TouchableOpacity>
    )
}


const SelectNumberOfVotesOneCanGive = ({ handleCountWasSaved }) => {

    const [countOfVotes, setCountOfVotes] = useState(1)

    const changeCount = (direction) => {
        if (direction === 'less') {
            if (countOfVotes > 1) {
                setCountOfVotes(countOfVotes - 1)
            }
        } else if (countOfVotes < 5) {
            setCountOfVotes(countOfVotes + 1)
        }
    }
    const saveSelectedCount = () => {
        handleCountWasSaved(countOfVotes)
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>How many votes can one give?</Text>
            <Text style={styles.info}>Each person has a minimum of one vote.</Text>
            <Text style={styles.info}>But if you want, they can have more than one vote.</Text>
            <Text style={styles.info}>Maximum is five votes.</Text>
            <Text style={styles.info}>Adjust the vote count to your liking.</Text>

            <View style={styles.adjustCountView}>
                <ChangeCountButton changeCount={changeCount} direction="less"/>
                <Text style={styles.countsText}>{countOfVotes}</Text>
                <ChangeCountButton changeCount={changeCount} direction="more"/>
            </View>

            <View style={styles.container}>
                <TouchableOpacity style={styles.buttonView} onPress={saveSelectedCount}>
                    <Text style={styles.buttonText}>NEXT</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SelectNumberOfVotesOneCanGive









