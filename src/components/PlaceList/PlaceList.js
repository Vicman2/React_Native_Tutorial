import React, {Component} from 'react'
import {FlatList, StyleSheet} from 'react-native'
import ListItem from '../ListItem/ListItem'


const PlaceList = (props) => {
    return(
        <FlatList
        style={styles.listContainer}
        data={props.places}
        renderItem={(info) => (
            <ListItem
            placeName={info.item.name}
            placeImage={info.item.image}
            onSelectItem={() => props.selectItem(info.item.key)}
            />
        )}
        />
    )
}

const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
    }
})

export default PlaceList