import { ScrollView, View } from 'react-native'
import React from 'react'
import Tabs from '../../components/TabNavigator/TabNavigation'


const DesktopScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      
      <Tabs/>
    </ScrollView>
  )
}

export default DesktopScreen