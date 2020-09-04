import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import HomeTab from './src/Tabs/Home/Home'
import SettingTab from './src/Tabs/Settings/settings'
import {connect} from 'react-redux'
import { StyleSheet, View, TextInput, Button } from 'react-native';


import {addPlace, deletPlace, selectPlace, deselectPlace} from './src/store/actions/index'
import Icon from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator()

class App extends Component{
  // state ={
  //   placeName:"", 
  // }
  // placeNameChangeHandler = (val) => {
  //   this.setState({
  //     placeName: val
  //   })
  // }
  // placeSubmiteHandler= () => {
  //   if(this.state.placeName.trim() === ""){
  //     return;
  //   }
  //   this.props.onAddPlace(this.state.placeName)

  // }
  // placeDeletedHandler = () => {
  //   this.props.onDeletePlace()
  // }
  // modalClosedHandler = () => {
  //   this.props.onDeselectPlace()
  // }
  // selectItemHandler = (key) => {
  //   this.props.onSelectPlace(key)
  // }

  
  render(){
    return (
      <NavigationContainer>
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
        {/* <HomeStack.Navigator initialRouteName="Home">
          <HomeStack.Screen 
          name="Home"
          component={HomeScreen}
          />
          <HomeStack.Screen 
          name="Details"
          component={DetailScreen}
          />
        </HomeStack.Navigator> */}

        {/* <View style={styles.container}>
          <PlaceDetail
          selectedPlace ={this.props.selectedPlace}
          onItemDeleted={this.props.onDeletePlace}
          onModalClosed={this.props.onDeselectPlace}
          />
          <View style={styles.InputContainer}>

            <TextInput
            placeholder="An Awesome Vicman"
            style={styles.placeInput}
            value={this.state.placeName}
            onChangeText={this.placeNameChangeHandler}/>

            <Button 
            style={styles.placeButton}
            title="Add" 
            onPress={this.placeSubmiteHandler}
            />

          </View>
          <PlaceList 
            places={this.props.places}
            selectItem={this.selectItemHandler}
          />
        </View> */}
      </NavigationContainer>
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
  placeInput:{
    width: "70%"
  }, 
  placeButton: {
    width:"30%"
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
