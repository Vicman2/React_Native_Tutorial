import React from 'react'
import {Text, View, Button} from 'react-native'



const Settings  = (props) => {
    console.log(props)
    return(
        <View>
            <Text>This is the settings page</Text>
            <Button 
                title="To the details" 
                onPress={() => props.navigation.navigate('Details', {
                   itemId: 23, 
                   name: "Vicman"
                })} /> 
        </View>
    )
}

export default Settings