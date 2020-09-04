import React, {Component} from 'react'
import {createStackNavigator} from '@react-navigation/stack'

// Screens 
import SettingsScreen from '../../screens/settings/settings'
import DetailsScreen from '../../screens/Detail/Detail'


const SettingStack = createStackNavigator()


class SettingsTab extends Component{
    render(){
        return(
           <SettingStack.Navigator initialRouteName="Settings">
               <SettingStack.Screen name="Settings" component={SettingsScreen}></SettingStack.Screen>
               <SettingStack.Screen name="Details" component={DetailsScreen}></SettingStack.Screen>
           </SettingStack.Navigator>
        )
    }
}

export default SettingsTab