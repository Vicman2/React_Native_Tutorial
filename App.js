import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import HomeTab from './src/Tabs/Home/Home'
import SettingTab from './src/Tabs/Settings/settings'
import {connect} from 'react-redux'
import { StyleSheet, View, TextInput, Button } from 'react-native';
import Auth from './src/screens/Auth/Auth'


import {addPlace, deletPlace, selectPlace, deselectPlace} from './src/store/actions/index'
import Icon from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator()

class App extends Component{  
  state = {
    isLoggedIn : false
  }

  onAuth  = () => {
    this.setState((prevState) => {
      return {
        isLoggedIn : !prevState.isLoggedIn
      }
    })
  }

  
  render(){
    let toDisplay =
      <Auth  onAuthing={this.onAuth}/>
    if(this.state.isLoggedIn){
      toDisplay = <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              if(route.name === "Home"){
                iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
              }else if(route.name === 'Settings'){
                iconName = focused ? 'ios-list-box': 'ios-list';
              }
              return <Icon name={iconName} size = {size} color={color} />
            }
          })}
          tabBarOptions = {{
            activeTintColor: 'tomato', 
            inactiveTintColor: 'gray'
          }}
          
        >
          <Tab.Screen name="Home" component={HomeTab} options={{tabBarBadge: 3}} />
          <Tab.Screen name="Settings" component={SettingTab}  options={{tabBarBadge: 7}}/>
       </Tab.Navigator>
      </NavigationContainer>
    }
    
    return (
      <View style={styles.container}>
        {toDisplay}
      </View>
      
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:26,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 10
  },
  InputContainer: {
    // flex:1,
    width:'100%',
    flexDirection:'row', 
    justifyContent:'space-around',
    alignItems:'center'
  },

});

const mapStateToProps = state => {
  return{
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  }
}

const mapDispatchToProps = dispatch => {
  return{
    onAddPlace : (name) => dispatch(addPlace(name)), 
    onDeletePlace : () => dispatch(deletPlace()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
  }
}
export default connect(mapStateToProps, mapDispatchToProps) (App)
