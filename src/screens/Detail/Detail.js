import React from 'react'
import {View, Text, Button} from 'react-native'

const Details = ({navigation, route}) => {
    return(
        <View>
            <Text>This is the Details Screen</Text>
            <Button
            title="Go to home"
            onPress={() => navigation.navigate('Home')} 
            />
        </View>
    )
}

export default Details