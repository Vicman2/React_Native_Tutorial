import React from 'react'
import {View, Text, Button} from 'react-native'

const Details = ({navigation, route}) => {
    console.log(route)
    return(
        <View>
            <Text>This is the Details Screen</Text>
            <Button
            title="Go back"
            onPress={() => navigation.push("Details")}
            />
            <Button
            title="Go to home"
            onPress={() => navigation.navigate('Authentication')} 
            />
        </View>
    )
}

export default Details