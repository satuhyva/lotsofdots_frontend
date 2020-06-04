import React, { useState, useImperativeHandle } from 'react'
import { View,  TouchableOpacity, Animated, Easing, StyleSheet } from 'react-native'


const RadioButtonSelection = ({ handleChange, options }) => {

    const [valueSelected, setValueSelected] = useState('')
    const [valueReferences] = useState(options.map(option => React.createRef()))
    const [values] = useState(options)

    const selectedNew = (newSelection) => {
        valueReferences.forEach(reference => {
            reference.current.animateButton(newSelection)
        })
        setTimeout(() => {
            setValueSelected(newSelection)
            handleChange(newSelection)
        }, 300)
    }

    return (
        <View style={{ marginTop: 20 }}>
            {values.map((value, index) => {
                return (
                    <AnimatedRadioButtonRow key={index} ref={valueReferences[index]} value={value} valueSelected={valueSelected} selectedNew={selectedNew}/>
                )
            })}
        </View>
    )
}

export default RadioButtonSelection




const AnimatedRadioButtonRow = React.forwardRef((props, ref) => {

    const [innerButtonSize] = useState(new Animated.Value(0))
    const styleInnerButtonSize = { height:  innerButtonSize, width:  innerButtonSize }

    useImperativeHandle(ref, () => {
        return { animateButton }
    })
    const animateButton = (newSelection) => {
        const animationDuration = 300
        const targetValue = props.value === newSelection ? 20 : 0
        Animated.parallel([
            Animated.timing(innerButtonSize, {
                toValue: targetValue,
                easing: Easing.elastic(2),
                duration: animationDuration,
            }),
        ]).start()
    }

    return (
        <TouchableOpacity onPress={() => props.selectedNew(props.value)}>
            <View style={stylesRadio.rowView}>
                <View style={stylesRadio.buttonOuterCircle}>
                    <Animated.View
                        style={[stylesRadio.buttonInnerCircle, styleInnerButtonSize]}>
                    </Animated.View>
                </View>
                <View style={stylesRadio.radioButtonTextView}>
                    <Animated.Text style={stylesRadio.radioButtonText}>{props.value.toString()}</Animated.Text>
                </View>
            </View>
        </TouchableOpacity>
    )
})




const stylesRadio = StyleSheet.create({

    rowView: {
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center',
    },
    radioButtonTextView: {
        marginLeft: 10,
    },
    radioButtonText: {
        fontSize: 15,
        color: '#3A3A38',
    },
    buttonInnerCircle: {
        backgroundColor: '#3A3A38',
        height: 20,
        width: 20,
        borderRadius: 20,
    },
    buttonOuterCircle: {
        height: 30,
        width: 30,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#3A3A38',
        borderWidth: 1,
    },
})