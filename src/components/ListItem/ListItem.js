import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image} from "react-native"

const ListItem = (props) => {
    return(
        <TouchableOpacity onPress={props.onSelectItem}>
            <View style={Style.listItem}>
                <Image source={props.placeImage} style={Style.placeImage} />
                <Text>{props.placeName} </Text>
            </View>
        </TouchableOpacity>
    )
}

const Style = StyleSheet.create({
    listItem: {
        width:"100%", 
        padding: 10, 
        backgroundColor: "#eee", 
        marginBottom: 5, 
        flexDirection:"row", 
        alignItems: 'center'
    }, 
    placeImage: {
        margin: 8, 
        width: 30,
        height: 30
    }
})

export default ListItem