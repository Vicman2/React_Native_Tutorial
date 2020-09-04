import React, {Component} from 'react'
import {View, Text, Button} from 'react-native'


class HomeScreen extends Component{
    render(){
        const {navigation} = this.props
        return(
            <View>
                <Text>This is The Home Screen</Text>
                <Button 
                title="Go to details" 
                onPress={() => navigation.navigate('Details', {
                   itemId: 23, 
                   name: "Vicman"
                })} />
            </View>
        )
    }
}

export default HomeScreen