import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import { styles } from '../styles/createNewStyles.js'


const CreateOptions = ({ handleOptionsWereSaved }) => {

    const [newOption, setNewOption] = useState('')
    const [options, setOptions] = useState([])

    const handleOptionChanged = (text) => {
        const trimmedText = getTrimmedText(text)
        setNewOption(trimmedText)
    }
    const addNewOption = () => {
        const updatedOptions = options.concat(newOption)
        setNewOption('')
        setOptions(updatedOptions)
    }

    const saveCurrentOptions = () => {
        handleOptionsWereSaved(options)
    }

    const displayOptions = () => {
        return (
            options.map(option => {
                return (
                    <Text style={styles.optionText} key={option}> ⦾ {option}</Text>
                )
            })
        )
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>Answering options</Text>
                <Text style={styles.info}>The number of answering options</Text>
                <Text style={styles.info}>must be between 2 and 10.</Text>
                <Text style={styles.info}>Add new options using the box below.</Text>
                <View style={styles.options}>
                    {displayOptions()}
                </View>

                <View style={styles.numberOfVotesView}>
                    <TextInput style={styles.input}
                        multiline={true}
                        value={newOption}
                        onChangeText={handleOptionChanged}
                    />
                    {newOption !== '' && !options.includes(newOption) ?
                        <View style={styles.container}>
                            <TouchableOpacity onPress={addNewOption}>
                                <Text style={styles.buttonTextAdd}>ADD</Text>
                            </TouchableOpacity>
                        </View>
                        : null
                    }
                </View>

                {options.length > 1 ?
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.buttonView} onPress={saveCurrentOptions}>
                            <Text style={styles.buttonText}>NEXT</Text>
                        </TouchableOpacity>
                    </View>
                    : null
                }
            </ScrollView>

        </View>
    )
}

export default CreateOptions


const getTrimmedText = (text) => {
    let trimmed = text
    let keepOn = true
    while (keepOn && trimmed.length > 0) {
        if (trimmed.charAt(0) === ' ') {
            if (trimmed.length > 1) {
                const modified = trimmed.substring(1)
                trimmed = modified
            } else {
                trimmed = ''
                keepOn = false
            }
        } else {
            keepOn = false
        }
    }
    return trimmed
}
