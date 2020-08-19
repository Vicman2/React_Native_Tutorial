import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail'


class App extends Component{
  state ={
    placeName:"", 
    places : [], 
    selectedPlace: null
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
        places: prevState.places.concat({
          key: Math.random().toString(),
          name: prevState.placeName,
          image: {
            uri: "https://source.unsplash.com/WLUHO9A_xik/1600x900"
          }
        })
      }
    })
  }
  placeDeletedHandler = () => {
    this.setState((prevState) => {
      return{
        places : prevState.places.filter((place, i) => {
          return place.key !== prevState.selectedPlace.key
        }), 
        selectedPlace: null
      }
    })
  }
  modalClosedHandler = () => {
    this.setState({selectedPlace: null})
  }
  selectItemHandler = (key) => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key; 
        })
      }
    })
    
  }
  render(){
    return (
      <View style={styles.container}>
        <PlaceDetail
        selectedPlace ={this.state.selectedPlace}
        onItemDeleted={this.placeDeletedHandler}
        onModalClosed={this.modalClosedHandler}
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
          places={this.state.places}
          selectItem={this.selectItemHandler}
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
