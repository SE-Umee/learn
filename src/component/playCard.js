import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import * as Colors from '../constants/colors'

const PlayCard = () => {
  return (
    <TouchableOpacity>
    <View style={styles.PlayCard}>
        <Text style={ styles.Text}>Play</Text>
        <Image source={require('../asset/images/play.png')} style={{width:8,height:12}}/>
    </View>
    </TouchableOpacity>
  )
}

export default PlayCard

const styles = StyleSheet.create({
    PlayCard:{
        flexDirection:'row',
        width:81,
        height:29,
        backgroundColor:Colors.textcolor,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center'
    },
    Text:{
        color:'white',
        marginRight:4,
        fontSize:10,
        fontWeight:'500'
    }
})