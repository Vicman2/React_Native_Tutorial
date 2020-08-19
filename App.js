import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

import ListItem from './src/components/ListItem/ListItem'
import PlaceList from './src/components/PlaceList/PlaceList';


class App extends Component{
  state ={
    placeName:"", 
    places : []
  }
  placeNameChangeHandler = (val) => {
    this.setState({
      placeName: val
    })
  }
  placeSubmiteHandler= () => {
    if(this.state.placeName.trim() === ""){
      return;
    }
    this.setState(prevState => {

      return {
        places: prevState.places.concat({key: Math.random(), value: prevState.placeName})
      }
    })
  }
  deleteItemHandler = (index) => {
    this.setState((prevState) => {
      return{
        places : prevState.places.filter((place, i) => {
          return place.key !== index
        })
      }
    })
  }
  render(){
    return (
      <View style={styles.container}>
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
          places={this.state.places}
          deleteItem={this.deleteItemHandler}
        />
      </View>
    );
  }
}
export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:26,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
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
