import React, {Component} from 'react'
import {View, Text, TextInput, Button, StyleSheet, ImageBackground} from 'react-native'
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput'
import HeaderText from '../../components/UI/HeadingText/HeadingText'
import MainText from '../../components/UI/MainText/MainText'
import background from './Assets/10.1 background.jpg.jpg'


class Authentication extends Component{
    render(){
        return(
            <View style={styles.container}> 
                <ImageBackground source={background} style={styles.backgroundImage}>
                    <Button title="Switch to login" />
                    <View style={styles.inputContainer}>
                        <MainText>
                            <HeaderText>Please Log in</HeaderText>
                        </MainText>
                        <DefaultInput placeholder="Your E-Mail Address"  style={styles.input}/>
                        <DefaultInput placeholder="Password" style={styles.input}/>
                        <DefaultInput placeholder="Confirm Password"  style={styles.input}/>
                    </View>
                    <Button title="Submit" onPress={this.props.onAuth} />
                </ImageBackground>
            </View> 
        )
     
    }
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        justifyContent: "center", 
        alignItems: "center",
        width:"100%"
    }, 
    inputContainer: {
        width: "100%"
    }, 
    input: {
        borderColor: "#bbb",
        backgroundColor: "#eee"
    }, 
    backgroundImage: {
        width: "100%"
    }
})

export default Authentication