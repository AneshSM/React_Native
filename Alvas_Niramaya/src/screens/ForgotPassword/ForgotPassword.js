import { Image, StyleSheet, Text, View, useWindowDimensions, ScrollView } from 'react-native'
import React, { useState } from 'react'

import CustomeInput from '../../components/CustomeInput/CustomeInput';
import CustomeButton from '../../components/CustomeButton/CustomeButton';
import { clr30, clr60 } from '../../const/Colour/color';

import {useNavigation} from '@react-navigation/native'  

const ForgotPassword = () => {
    const { height } = useWindowDimensions();
    const { username, setUsername } = useState('')

    const navigation =useNavigation()

    const onSigInPressed = () => {
        console.warn('SignIn')
        navigation.navigate('SignIn')
    }

    const onSendPressed = () => {
        console.warn('send')
        navigation.navigate('NewPassword')
    }


    return (
        <View style={styles.root}>
            <Text style={styles.title}>Reset Your Password</Text>
            <View style={[styles.container, { padding: height * 0.04 }]}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <CustomeInput placeholder='Username' value={username} setValue={setUsername} /> 
                    <CustomeButton
                        text='Send'
                        onPress={onSendPressed}
                    />
                    <CustomeButton
                        text="Back to Signin"
                        onPress={onSigInPressed} type="Tertiary"
                    />
                </ScrollView>
            </View>
        </View>
    )
}

export default ForgotPassword

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        height: 100,
    },
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: clr60,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingTop: 50,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 34,
        margin: 10,
    },
    link: {
        color: clr30
    },
    text: {
        color: 'black',
        fontWeight: 'bold'
    }
})