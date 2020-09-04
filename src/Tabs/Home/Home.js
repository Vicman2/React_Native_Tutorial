import React, {Component} from 'react'
import {createStackNavigator} from '@react-navigation/stack'

// Screens 
import HomeScreen from '../../screens/Home/Home'
import DetailsScreen from '../../screens/Detail/Detail'


const HomeStack = createStackNavigator()


class HomeTab extends Component{
    render(){
        return(
           <HomeStack.Navigator initialRouteName="Home">
               <HomeStack.Screen name="Home" component={HomeScreen}></HomeStack.Screen>
               <HomeStack.Screen name="Details" component={DetailsScreen}></HomeStack.Screen>
           </HomeStack.Navigator>
        )
    }
}

export default HomeTab