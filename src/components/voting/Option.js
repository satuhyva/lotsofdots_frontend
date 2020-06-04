import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from '../styles/voteStyles.js'


const Option = ({ option, voters, optionsVoted, handleOptionsVotedChanged, event }) => {

    const hasBeenVotedAtLeastOnce = optionsVoted.includes(option.option)
    const votesStillLeft = optionsVoted.length < event.counts ? true : false
    const canGiveSeveralVotesToOneOption = event.severalSame

    const toggleVoting = (action) => {
        handleOptionsVotedChanged(action, option)
    }

    const voteButtonColoringStyle = getVoteButtonColoringStyle(votesStillLeft, canGiveSeveralVotesToOneOption, hasBeenVotedAtLeastOnce)
    const unvoteButtonColoringStyle = getUnvoteButtonColoringStyle(hasBeenVotedAtLeastOnce)

    const colors = ['#6B52CF','#978EBD', '#CE81ED', '#56AB39', '#C5DB37', '#C86131', '#645A64', '#39BDCD', '#E3304E', '#9F2BEE']

    const displayDots = () => {
        const dotsOfOtherVoters = option.voters.map((voter, index) => {
            const color = (event.dotTheme === 'all dots same color, no identities') ?
                '#645A64'
                :
                colors[voters.indexOf(voter)]
            return <Dot key={index} coloring={color}/>
        })
        let allDots = [...dotsOfOtherVoters]
        optionsVoted.forEach((item, index) => {
            if (item === option.option) {
                allDots.push(<Dot key={dotsOfOtherVoters.length + index} coloring={'orange'}/>)
            }
        })
        if (allDots.length === 0) {
            return <Text style={styles.notVotedText}>no votes yet</Text>
        }
        return allDots
    }

    return (
        <View style={styles.optionContainer}>
            <View style={styles.voterContainer}>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity onPress={() => toggleVoting('vote')} disabled={!votesStillLeft && !(hasBeenVotedAtLeastOnce && !canGiveSeveralVotesToOneOption)}>
                        <View style={[styles.voteButtonView, voteButtonColoringStyle]}>
                            <Text style={[styles.voteButtonText]}>VOTE</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => toggleVoting('unvote')} disabled={!hasBeenVotedAtLeastOnce}>
                        <View style={[styles.voteButtonView, unvoteButtonColoringStyle]}>
                            <Text style={[styles.voteButtonText]}>UNVOTE</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.optionAndDotContainer}>
                <View style={styles.optionView}>
                    <Text style={styles.optionText}>{option.option}</Text>
                </View>
                <View style={styles.dotsContainer}>
                    {displayDots()}
                </View>
            </View>
        </View>
    )
}


export default Option


// '#6B52CF' // sininen
// '#978EBD' // vaal. sininen
// '#CE81ED' // pinkki
// '#56AB39' // vihreä
// '#C5DB37' // keltainen
// '#9B6B27' // ruskea
// '#645A64' // harmaa
// '#39BDCD' // turkoosi
// '#E3304E' // punainen
// '#9F2BEE' // violetti

const Dot = ({ coloring }) => {
    // console.log('dot coloring option', coloring)
    const dotStyle = { width: 20, height: 20, borderRadius: 10, margin: 1, backgroundColor: coloring }
    return (
        <View style={dotStyle}/>
    )
}

const getVoteButtonColoringStyle = (votesStillLeft, canGiveSeveralVotesToOneOption, hasBeenVotedAtLeastOnce) => {
    if (votesStillLeft) {
        if (hasBeenVotedAtLeastOnce && !canGiveSeveralVotesToOneOption) {
            return { backgroundColor: '#D3D3C0' }
        } else {
            return { backgroundColor: '#3A3A38' }
        }
    } else {
        return { backgroundColor: '#D3D3C0' }
    }

}
const getUnvoteButtonColoringStyle = (hasBeenVotedAtLeastOnce) => {
    if (!hasBeenVotedAtLeastOnce) {
        return { backgroundColor: '#D3D3C0' }
    }
    return { backgroundColor: '#3A3A38' }
}

