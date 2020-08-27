import React from 'react'
import {Modal, View, Image, Button, Text, StyleSheet, TouchableOpacity} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

const placeDetail = (props) => {
    let modalContent = null
    if(props.selectedPlace){
        modalContent = (
            <View>
                <Image 
                style={style.placeImage}
                source={props.selectedPlace.image}
                 />
                <Text style={style.placeName}>{props.selectedPlace.name} </Text>
            </View>
        )
    }
    return(
        <Modal
        onRequestClose={props.onModalClosed}
        visible={props.selectedPlace !== null} 
        animationType="slide">
            <View style={style.modalContainer}>
                {modalContent}
            </View>
            <View style={style.buttonContainer} >
                {/* <Button title="Delete" color="red" onPress={props.onItemDeleted}/> */}
                <View style={style.deleteButton}>
                    <TouchableOpacity onPress={props.onItemDeleted}>
                        <Icon size={30} name="ios-trash" color="red" />
                    </TouchableOpacity>
                </View>
                <Button title="Close" onPress={props.onModalClosed}/>
            </View>
        </Modal>
    )
}

const style = StyleSheet.create({
    modalContainer: {
        margin: 22
    },
    placeImage: {
        width:"100%", 
        height: 200
    },
    placeName:{
        fontWeight: 'bold', 
        textAlign: 'center', 
        fontSize:28
    },
    buttonContainer:{
        margin: 40,
    },
    deleteButton: {
        alignItems: "center",
        marginBottom: 20
    }

 })


export default placeDetail 