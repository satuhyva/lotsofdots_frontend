import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from '../styles/createNewStyles.js'
import RadioButtonSelection from './RadioButtonSelection'

const SelectDotColoringTheme = ({ handleDotColoringThemeWasSaved }) => {

    const [selectedTheme, setSelectedTheme] = useState('')
    const themes = [
        'all dots same color, no identities',
        'different colors, no identities',
        'different colors, show identities',
    ]
    const changeThemeSelection = (theme) => {
        setSelectedTheme(theme)
    }
    const saveDotColoringTheme = () => {
        handleDotColoringThemeWasSaved(selectedTheme)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Dot colors and voter identities</Text>
            <Text style={styles.info}>Should participants know how others voted?</Text>
            <Text style={styles.info}>Should dots be colored according to voter?</Text>
            <Text style={styles.info}>Should the names be revealed?</Text>
            <RadioButtonSelection
                handleChange={changeThemeSelection}
                options={themes}
            />

            {selectedTheme !== '' ?
                <View style={styles.container}>
                    <TouchableOpacity style={styles.buttonView} onPress={saveDotColoringTheme}>
                        <Text style={styles.buttonText}>NEXT</Text>
                    </TouchableOpacity>
                </View>
                : null
            }
        </View>
    )
}

export default SelectDotColoringTheme









// import React from 'react'
// import { View, Text, TouchableOpacity } from 'react-native'
// // import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button'
// import { styles } from '../styles/createNewStyles.js'

// const SelectDotColoringTheme = ({ dotColoringTheme, handleDotColoringThemeChanged, handleDotColoringThemeWasSaved }) => {

//     const themes = [
//         { label: 'all dots same color, no identities', value: 0 },
//         { label: 'different colors, no identities', value: 1 },
//         { label: 'different colors, show identities', value: 2 },
//     ]
//     const changeThemeSelection = (theme) => {
//         handleDotColoringThemeChanged(theme)
//     }
//     const saveDotColoringTheme = () => {
//         handleDotColoringThemeChanged('different colors, show identitieseme')
//         handleDotColoringThemeWasSaved()
//     }




//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Dot colors and voter identities</Text>
//             <Text style={styles.info}>Should participants know how others voted?</Text>
//             <Text style={styles.info}>Should dots be colored according to voter?</Text>
//             <Text style={styles.info}>Should the names be revealed?</Text>

//             {/* <RadioForm style={styles.radioButtonView}>
//                 {themes.map((theme, index) => {
//                     return (
//                         <RadioButton animation={true} key={index} horizontal={true}>
//                             <RadioButtonInput
//                                 obj={theme}
//                                 index={index}
//                                 isSelected = {dotColoringTheme === theme.label}
//                                 onPress={() => changeThemeSelection(theme.label)}
//                                 borderWidth={1}
//                                 buttonInnerColor={'#3A3A38'}
//                                 buttonOuterColor={'#3A3A38'}
//                                 buttonSize={16}
//                                 buttonOuterSize={23}
//                                 buttonWrapStyle={styles.radioButtonWrap}
//                             />
//                             <RadioButtonLabel
//                                 obj={theme}
//                                 index={index}
//                                 labelHorizontal={true}
//                                 onPress={() => changeThemeSelection(theme.label)}
//                                 labelStyle={styles.radioButtonLabelText}
//                             />
//                         </RadioButton>
//                     )
//                 })}
//             </RadioForm> */}
//             {/* {dotColoringTheme !== '' ?
//                 <View style={styles.container}>
//                     <TouchableOpacity style={styles.buttonView} onPress={saveDotColoringTheme}>
//                         <Text style={styles.buttonText}>NEXT</Text>
//                     </TouchableOpacity>
//                 </View>
//                 : null
//             } */}
//                 <View style={styles.container}>
//                     <TouchableOpacity style={styles.buttonView} onPress={saveDotColoringTheme}>
//                         <Text style={styles.buttonText}>NEXT</Text>
//                     </TouchableOpacity>
//                 </View>
//         </View>
//     )
// }

// export default SelectDotColoringTheme


