import React, {Component} from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'
import PlaceInput from '../../PlaceInput/PlaceInput'
import {connect} from 'react-redux'
import {addPlace} from '../../store/actions'

class HomeScreen extends Component{
    render(){
        const {navigation} = this.props
        return(
            <View style={style.container}>
                <PlaceInput addPlace= {this.props.onAddPlace}/>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container :{
        marginTop: 20
    }
})

const dispatchMappedToProps = dispatch => {
    return{
        onAddPlace : (placeName) => dispatch(addPlace(placeName))
    }
}
export default connect(null, dispatchMappedToProps) (HomeScreen)