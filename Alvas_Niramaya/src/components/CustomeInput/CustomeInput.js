import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { clr60 } from '../../const/Colour/color'

const CustomeInput = ({ value, setValue, placeholder,secureTextEntry }) => {
    return (
        <View style={styles.container}>
            <TextInput 
            value={value}
            placeholder={placeholder}
            onChange={setValue}
            style={styles.input}
            secureTextEntry={secureTextEntry} />
        </View>
    )
}

export default CustomeInput

const styles = StyleSheet.create({
    container: {
        backgroundColor: clr60,
        width: '100%',
        borderWidth: 1,
        borderColor: '#e8e8e8',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    input: {
        fontWeight:'bold',
        fontSize:18,
    }
})