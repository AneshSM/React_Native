import { Image, StyleSheet, Text, View, useWindowDimensions, ScrollView } from 'react-native'
import React, { useState } from 'react'

import CustomeInput from '../../components/CustomeInput/CustomeInput';
import CustomeButton from '../../components/CustomeButton/CustomeButton';
import { clr30, clr60 } from '../../const/Colour/color';
import SocialSignUpButtons from '../../components/SocialButtons/SocialSignUpButtons/SocialSignUpButtons';

import {useNavigation} from '@react-navigation/native'  


const SignupScreen = () => {
    const { height } = useWindowDimensions();
    const { Name, setName } = useState('')
    const { Phone_Number, setPhone_Number } = useState('')
    const { Email, setEmail } = useState('')
    const { Password, setPassword } = useState('')
    const { Confpassword, setConfPassword } = useState('')

    const navigation =useNavigation()


    const onSigInPressed = () => {
        console.warn('SignIn')
        navigation.navigate('SignIn')
    }
    const onSignUpPressed = () => {
        console.warn('SignUp')
        navigation.navigate('ConfirmEmail')
    }




    return (
        <View style={styles.root}>
            <Text style={styles.title}>Create New Account</Text>
            <View style={[styles.container, { padding: height * 0.04 }]}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <CustomeInput placeholder='Name' value={Name} setValue={setName} />
                    <CustomeInput placeholder='Phone Number' value={Number} setValue={setPhone_Number} /> 
                    <CustomeInput placeholder='Email' value={Email} setValue={setEmail} /> 
                    <CustomeInput placeholder='Password' value={Password} setValue={setPassword} secureTextEntry />
                    <CustomeInput placeholder='Confirm Password' value={Confpassword} setValue={setConfPassword} secureTextEntry />
                    <CustomeButton
                        text='Create Account'
                        onPress={onSignUpPressed}

                    />
                    <Text style={styles.text}>By Registering, you confirm that you accept our  <Text style={styles.link}>Terms of Use</Text>  and <Text style={styles.link}>Privacy and Policy</Text></Text>
                    <SocialSignUpButtons/>
                    <CustomeButton
                        text="Alreafy have an account ? Login"
                        onPress={onSigInPressed} type="Tertiary"
                    />
                </ScrollView>
            </View>
        </View>
    )
}

export default SignupScreen

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