import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { styles } from '../styles/createNewStyles.js'


const CreateQuestion = ({ handleQuestionWasSaved }) => {

    const [newQuestion, setNewQuestion] = useState('')
    const handleQuestionChanged = (text) => {
        const trimmedText = getTrimmedText(text)
        setNewQuestion(trimmedText)
    }
    const saveCurrentQuestion = () => {
        handleQuestionWasSaved(newQuestion)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>What is the voting about?</Text>
            <Text style={styles.info}>What is it that you want to decide on?</Text>
            <Text style={styles.info}>What needs to be prioritized?</Text>
            <Text style={styles.info}>Write the question in the box below.</Text>
            <TextInput style={styles.input}
                multiline={true}
                value={newQuestion}
                onChangeText={handleQuestionChanged}
            />
            {newQuestion !== '' && newQuestion.length > 2 ?
                <View style={styles.container}>
                    <TouchableOpacity style={styles.buttonView} onPress={saveCurrentQuestion}>
                        <Text style={styles.buttonText}>NEXT</Text>
                    </TouchableOpacity>
                </View>
                : null
            }
        </View>
    )
}

export default CreateQuestion



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





