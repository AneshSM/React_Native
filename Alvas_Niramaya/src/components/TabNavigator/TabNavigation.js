import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppointmentScreen from '../../screens/AppointmentScreen';
import MapScreen from '../../screens/MapScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import HomeScreen from '../../screens/HomeScreen/HomeScreen'
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Appointment' component={AppointmentScreen} />
      <Tab.Screen name='Map' component={MapScreen}/>
      <Tab.Screen name='Profile' component={ProfileScreen}/>
    </Tab.Navigator>
  );
}

export default Tabs;