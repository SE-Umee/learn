import { View, Image,StyleSheet } from 'react-native'
import React from 'react'

const Buttom = (props) => {
  return (
    <View style ={styles.buttom}>
      <Image style={styles.buttomimage} source={require('../asset/images/buttom.png')}/>
    </View>
  )
}

const styles = StyleSheet.create({
  buttom:{

    marginTop:55
  },
  buttomimage:{
    width:412,
    height:100
  }
})

export default Buttom