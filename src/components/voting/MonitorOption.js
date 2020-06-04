import React from 'react'
import { View, Text } from 'react-native'
import { styles } from '../styles/voteStyles.js'


const Dot = ({ coloring }) => {
    const dotStyle = { width: 20, height: 20, borderRadius: 10, margin: 1, backgroundColor: coloring }
    return (
        <View style={dotStyle}/>
    )
}


const MonitorOption = ({ option, event }) => {

    const colors = ['#6B52CF','#978EBD', '#CE81ED', '#56AB39', '#C5DB37', '#C86131', '#645A64', '#39BDCD', '#E3304E', '#9F2BEE']

    const displayDots = () => {
        const allDots = option.voters.map((voter, index) => {
            const color = (event.dotTheme === 'all dots same color, no identities') ?
                '#645A64'
                :
                colors[event.voters.indexOf(voter)]
            return <Dot key={index} coloring={color}/>
        })
        if (allDots.length === 0) {
            return <Text style={styles.notVotedText}>no votes yet</Text>
        }
        return allDots
    }


    return (
        <View style={styles.optionContainer}>
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

export default MonitorOption

