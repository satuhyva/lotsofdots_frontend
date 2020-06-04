import React, { useState } from 'react'
import { View } from 'react-native'
import SummaryForSaving from './SummaryForSaving'
import EventSavedInfoView from './EventSavedInfoView'


const SaveNewVotingEvent = ({ newQuestion, countOfVotes, dotColoringTheme, voteSameSeveralTimes, options, cancelAll, returnToWelcomePage }) => {

    const [savedID, setSavedID] = useState('none')

    const updateSavedID = (newEventID) => {
        setSavedID(newEventID)
    }

    return (
        <View>
            {savedID === 'none' ?
                <SummaryForSaving
                    newQuestion={newQuestion}
                    countOfVotes={countOfVotes}
                    dotColoringTheme={dotColoringTheme}
                    options={options}
                    voteSameSeveralTimes={voteSameSeveralTimes}
                    cancelAll={cancelAll}
                    updateSavedID={updateSavedID}
                />
                :
                <EventSavedInfoView
                    savedID={savedID}
                    returnToWelcomePage={returnToWelcomePage}
                />
            }
        </View>
    )
}

export default SaveNewVotingEvent

