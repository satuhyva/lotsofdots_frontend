import React , { useState } from 'react'
import { View } from 'react-native'
import CreateNewVotingEvent from './creatingNew/CreateNewVotingEvent'
import Voting from '../components/voting/Voting'
import WelcomeView from './WelcomeView'
import { styles } from './styles/basicStyles.js'

// https://htmlcolorcodes.com

const LotsOfDots = () => {

    const [createNew, setCreateNew] = useState(false)
    const [voteInExisting, setVoteInExisting] = useState(false)
    const [viewCurrentSituation, setViewCurrentSituation] = useState(false)

    const startCreatingVotingEvent = () => {
        setCreateNew(true)
    }
    const startVotingInAnEvent = () => {
        setVoteInExisting(true)
    }
    const returnToWelcomePage = () => {
        setCreateNew(false)
        setVoteInExisting(false)
        setViewCurrentSituation(false)
    }
    const viewOnly = () => {
        setViewCurrentSituation(true)
    }

    return (
        <View style={styles.appContainer}>
            {!createNew && !voteInExisting && !viewCurrentSituation ?
                <WelcomeView
                    startCreatingVotingEvent={startCreatingVotingEvent}
                    startVotingInAnEvent={startVotingInAnEvent}
                    viewOnly={viewOnly}
                />
                :
                null
            }
            {createNew ?
                <CreateNewVotingEvent returnToWelcomePage={returnToWelcomePage}/>
                : null
            }
            {voteInExisting ?
                <Voting  returnToWelcomePage={returnToWelcomePage} viewOnly={false}/>
                : null
            }
            {viewCurrentSituation ?
                <Voting  returnToWelcomePage={returnToWelcomePage} viewOnly={true}/>
                : null
            }
        </View>
    )
}
export default LotsOfDots


