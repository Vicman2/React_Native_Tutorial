import React from 'react'
import {View, Text, StyleSheet} from 'react-native'



const HeaderText = (props) => {
    return(
        <Text {...props} style={[styles.textHeader, props.style]}>{props.children} </Text>
    )
}


const styles = StyleSheet.create({
    textHeader: {
        fontSize: 28, 
        fontWeight: "bold", 
        textAlign: "center"
    },
})


export default HeaderText