import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles/basicStyles.js'


const WelcomeView = ({ startCreatingVotingEvent, startVotingInAnEvent, viewOnly }) => {
    return (
        <View style={styles.container}>

            <Text style={styles.appTitle}>LotsOfDots</Text>
            <Text style={styles.appInfo}>A little app for easy and simple</Text>
            <Text style={styles.appInfo}>decision-making and prioritization</Text>
            <Text style={styles.appInfo}>for groups of people.</Text>
            <View style={styles.line}/>

            <Text style={styles.title}>Create a new voting event?</Text>
            <Text style={styles.appInfo}>Set the question and answering options</Text>
            <Text style={styles.appInfo}>for a new voting event.</Text>
            <TouchableOpacity style={styles.buttonView} onPress={startCreatingVotingEvent}>
                <Text style={styles.buttonText}>CREATE</Text>
            </TouchableOpacity>

            <Text style={styles.title}>Vote in an existing event?</Text>
            <Text style={styles.appInfo}>If you have a voting ID</Text>
            <Text style={styles.appInfo}>you can go ahead and vote.</Text>
            <TouchableOpacity style={styles.buttonView} onPress={startVotingInAnEvent}>
                <Text style={styles.buttonText}>VOTE</Text>
            </TouchableOpacity>

            <Text style={styles.title}>View the current situation only</Text>
            <Text style={styles.appInfo}>If you have an ID you can have a look</Text>
            <Text style={styles.appInfo}>  at the current situation without voting.</Text>
            <TouchableOpacity style={styles.buttonView} onPress={viewOnly}>
                <Text style={styles.buttonText}>VIEW ONLY</Text>
            </TouchableOpacity>

        </View>
    )
}

export default WelcomeView
