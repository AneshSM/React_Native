import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import SigninScreen from '../screens/SigninScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen'
import SignupScreen from '../screens/SignupScreen/SignupScreen';
import ForgotPassword from '../screens/ForgotPassword/ForgotPassword';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import DesktopScreen from '../screens/DesktopScreen/DesktopScreen';

const Stack= createNativeStackNavigator();
const Navigation= () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Home' component={DesktopScreen} />
            <Stack.Screen name='SignIn' component={SigninScreen} />
            <Stack.Screen name='SignUp' component={SignupScreen} />
            <Stack.Screen name='ConfirmEmail' component={ConfirmEmailScreen} />
            <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
            <Stack.Screen name='NewPassword' component={NewPasswordScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation