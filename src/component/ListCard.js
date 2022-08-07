import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PlayCard from './playCard'

const ListCard = (props) => {
  return (
    <View style={styles.container}>
        <Text style={{marginRight:157}}>{props.text}</Text>
        <PlayCard/>
    </View>

  )
}

export default ListCard

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginTop:60,
        justifyContent:'center'
    }
})