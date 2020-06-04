import React, { useState } from 'react'
import { View, Text } from 'react-native'
import CreateQuestion from './CreateQuestion'
import SelectNumberOfVotesOneCanGive from './SelectNumberOfVotesOneCanGive'
import CreateOptions from './CreateOptions'
import SelectDotColoringTheme from './SelectDotColoringTheme'
import SelectCanVoteSameOptionSeveralTimes from './SelectCanVoteSameOptionSeveralTimes'
import SaveNewVotingEvent from './SaveNewVotingEvent'
import { styles } from '../styles/createNewStyles.js'

const CreateNewVotingEvent = ({ returnToWelcomePage }) => {

    const [newQuestion, setNewQuestion] = useState('')
    const [questionIsSet, setQuestionIsSet] = useState(false)

    const [countOfVotes, setCountOfVotes] = useState(1)
    const [countIsSet, setCountIsSet] = useState(false)

    const [dotColoringTheme, setDotColoringTheme] = useState('')
    const [dotColoringThemeIsSet, setDotColoringThemeIsSet] = useState(false)

    const [voteSameSeveralTimes, setVoteSameSeveralTimes] = useState('')
    const [voteSameSeveralTimesIsSet, setVoteSameSeveralTimesIsSet] = useState(false)

    const [options, setOptions] = useState([])
    const [optionsAreSet, setOptionsAreSet] = useState(false)

    const handleQuestionWasSaved = (question) => {
        setNewQuestion(question)
        setQuestionIsSet(true)
    }

    const handleCountWasSaved = (count) => {
        setCountOfVotes(count)
        setCountIsSet(true)
    }

    const handleDotColoringThemeWasSaved = (selectedTheme) => {
        setDotColoringTheme(selectedTheme)
        setDotColoringThemeIsSet(true)
    }

    const handleVoteSameSeveralTimesWasSaved = (selectedOption) => {
        setVoteSameSeveralTimes(selectedOption)
        setVoteSameSeveralTimesIsSet(true)
    }

    const handleOptionsWereSaved = (updatedOptions) => {
        setOptions(updatedOptions)
        setOptionsAreSet(true)
    }

    const cancelAll = () => {
        setNewQuestion('')
        setQuestionIsSet(false)
        setCountOfVotes(1)
        setCountIsSet(false)
        setDotColoringTheme('')
        setDotColoringThemeIsSet(false)
        setVoteSameSeveralTimes('')
        setVoteSameSeveralTimesIsSet(false)
        setOptions('')
        setOptionsAreSet(false)
    }


    return (
        <View style={styles.container}>
            <Text style={styles.appTitle}>LotsOfDots</Text>
            <Text style={styles.title}>CREATING A NEW VOTING EVENT</Text>
            <Text style={styles.info}>Setting all the voting parameters.</Text>
            <View style={styles.line}/>

            {questionIsSet ? null :
                <CreateQuestion
                    handleQuestionWasSaved={handleQuestionWasSaved}
                />
            }
            {questionIsSet && !countIsSet ?
                <SelectNumberOfVotesOneCanGive
                    handleCountWasSaved={handleCountWasSaved}
                />
                : null
            }
            {questionIsSet && countIsSet && !dotColoringThemeIsSet ?
                <SelectDotColoringTheme
                    dotColoringTheme={dotColoringTheme}
                    handleDotColoringThemeWasSaved={handleDotColoringThemeWasSaved}
                />
                : null
            }
            {questionIsSet && countIsSet && dotColoringThemeIsSet && !optionsAreSet ?
                <CreateOptions
                    handleOptionsWereSaved={handleOptionsWereSaved}
                />
                : null
            }
            {questionIsSet && countIsSet && dotColoringThemeIsSet && optionsAreSet && !voteSameSeveralTimesIsSet ?
                <SelectCanVoteSameOptionSeveralTimes
                    voteSameSeveralTimes={voteSameSeveralTimes}
                    handleVoteSameSeveralTimesWasSaved={handleVoteSameSeveralTimesWasSaved}
                />
                : null
            }
            {questionIsSet && countIsSet && dotColoringThemeIsSet && optionsAreSet && voteSameSeveralTimesIsSet ?
                <SaveNewVotingEvent
                    newQuestion={newQuestion}
                    countOfVotes={countOfVotes}
                    dotColoringTheme={dotColoringTheme}
                    voteSameSeveralTimes={voteSameSeveralTimes}
                    options={options}
                    cancelAll={cancelAll}
                    returnToWelcomePage={returnToWelcomePage}
                />
                : null
            }
        </View>
    )
}
export default CreateNewVotingEvent



