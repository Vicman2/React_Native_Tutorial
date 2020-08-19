import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';



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
        places: prevState.places.concat(prevState.placeName)
      }
    })
  }
  render(){
    const placesOutput = this.state.places.map((place, index) => {
      return(
        <Text key={index}> {place} </Text>
      )
    })
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
        <View>
          {placesOutput}
        </View>
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
  }
});
