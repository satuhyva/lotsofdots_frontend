import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Dot = ({ coloring }) => {
    const dotStyle = { width: 15, height: 15, borderRadius: 15, margin: 1, backgroundColor: coloring }
    return (
        <View style={dotStyle}/>
    )
}
const colors = ['#6B52CF','#978EBD', '#CE81ED', '#56AB39', '#C5DB37', '#C86131', '#645A64', '#39BDCD', '#E3304E', '#9F2BEE']

const DotIdentity = ({ index, name, dotTheme, voters, lastIsOrange }) => {

    let dotColor
    if (index + 1 === voters.length && lastIsOrange) {
        dotColor = 'orange'
    } else if (dotTheme === 'all dots same color, no identities' || dotTheme === 'different colors, no identities') {
        dotColor = '#645A64'
    } else {
        dotColor = colors[voters.indexOf(name)]
    }

    return (
        <View style={styles.container}>
            <Dot coloring={dotColor}/>
            <Text>{name}</Text>
        </View>
    )
}

export default DotIdentity

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
})

