import React ,{Component} from 'react'
import {View, Text, StyleSheet, TextInput, Button} from 'react-native'

class PlaceInput extends Component{
    state = {
        placeName :  ""
    }
    placeNameChangeHandler = (val) => {
        this.setState({
        placeName: val
        })
    }
    render(){
        return(
            <View style={styles.InputContainer}>
                <TextInput
                placeholder="An Awesome Vicman"
                style={styles.placeInput}
                value={this.state.placeName}
                onChangeText={this.placeNameChangeHandler}/>

                <Button 
                style={styles.placeButton}
                title="Add" 
                onPress={this.props.addPlace(this.state.placeName)}
                />

            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    InputContainer: {
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
})


export default PlaceInput