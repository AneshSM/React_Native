import { Image, StyleSheet, Text, View, useWindowDimensions, ScrollView } from 'react-native'
import React, { useState } from 'react'

import CustomeInput from '../../components/CustomeInput/CustomeInput';
import CustomeButton from '../../components/CustomeButton/CustomeButton';
import { clr30, clr60 } from '../../const/Colour/color';
import SocialSignUpButtons from '../../components/SocialButtons/SocialSignUpButtons/SocialSignUpButtons';

import {useNavigation} from '@react-navigation/native'  


const ConfirmEmailScreen = () => {
    const { height } = useWindowDimensions();
    const { Code, setCode } = useState('')

    const navigation =useNavigation()

    const onResendPressed = () => {
        console.warn('Resend')

    }
    const onSigInPressed = () => {
        console.warn('SignIn')
        navigation.navigate('SignIn')
    }

    const onConfirmPressed = () => {
        console.warn('Confirm')
        navigation.navigate('Home')
    }


    return (
        <View style={styles.root}>
            <Text style={styles.title}>Confirm Your Email</Text>
            <View style={[styles.container, { padding: height * 0.04 }]}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <CustomeInput placeholder='Enter your confirmation code' value={Code} setValue={setCode} /> 
                    <CustomeButton
                        text='Confirm'
                        onPress={onConfirmPressed}
                    />
                    <CustomeButton
                        text="Resend Code"
                        onPress={onResendPressed} type="Secondary"
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

export default ConfirmEmailScreen

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