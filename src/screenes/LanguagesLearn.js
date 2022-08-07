import { StyleSheet, Text, View,Image,FlatList, ScrollView } from 'react-native'
import React from 'react'
import * as Colors from '../constants/colors'
import BannerCard from '../component/bannerCard'
import Buttom from '../component/buttom'
import ListCard from '../component/ListCard'

const data=[
  {id:1, lesson:"lesson1"},
  {id:2, lesson:"lesson2"},
  {id:3, lesson:"lesson3"},
  {id:4, lesson:"lesson4"},
  {id:5, lesson:"lesson5"},
  {id:6, lesson:"lesson6"},
  {id:7, lesson:"lesson7"},
  {id:8, lesson:"lesson8"},
  {id:9, lesson:"lesson9"},
  {id:10, lesson:"lesson10"},
  ]

  
const LanguagesLearn = ({navigation,route}) => {
    const { text, image } = route.params;
  return (
    <View style = {styles.container}>
        <View
        style={{
          alignItems: "center",
          marginTop: 35,
        }}>
        <Image source={require("../asset/images/lolo.png")} />
      </View>
      <View style={{marginTop:20}}>
      <BannerCard 
      image={image}  
      containerbackground='#fff' text = {text}
      width={ 89.41}
      height= {74.51}
      marginleft={100}
      fontsize={32}/> 
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <FlatList
            scrollEnabled={false}
            data={data}
            renderItem={({item}) => (
              <ListCard
              text={item.lesson}
              />
            
            )}
            key={index => index}
            keyExtractor={(item, index) => index}
          />
      </ScrollView>
      <View style={{ position: "absolute", bottom: 0,height:140 }}>
        <Buttom/>
      </View>
    </View>
  )
}

export default LanguagesLearn

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:Colors.backgroundColor,
        alignItems:'center'
      },
});
