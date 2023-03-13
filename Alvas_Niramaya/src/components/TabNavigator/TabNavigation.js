import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppointmentScreen from '../../screens/Home/AppointmentScreen';
import MapScreen from '../../screens/Home/MapScreen';
import ProfileScreen from '../../screens/Home/ProfileScreen';
import HomeScreen from '../../screens/Home/HomeScreen'
const Tab = createBottomTabNavigator();

function Tabs() {
  const screenOptions = {
    tabBarStyle:{

    },
    tabBarItemStyle:{

    }
  };
  return (
    <Tab.Navigator>
      <Tab.Screen name='HOME' component={HomeScreen} />
      <Tab.Screen name='Appointment' component={AppointmentScreen} />
      <Tab.Screen name='Map' component={MapScreen}/>
      <Tab.Screen name='Profile' component={ProfileScreen}/>
    </Tab.Navigator>
  );
}

export default Tabs;