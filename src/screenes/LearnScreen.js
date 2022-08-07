import { StyleSheet, Text, View, Image,FlatList,ScrollView } from "react-native";
import React from "react";
import * as Colors from '../constants/colors'
import BannerCard from "../component/bannerCard";
import Buttom from "../component/buttom";
import ListCard from "../component/ListCard";

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

const LearnScreen = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: "center",
          marginTop: 35,
        }}
      >
        <Image source={require("../asset/images/lolo.png")} />
      </View>
      <View
        style={{
          marginTop: 28,
          marginHorizontal: 15,
        }}
      >
        <Text style={{ fontSize: 32, fontWeight: "600" ,color:Colors.textcolor}}>Learn</Text>
      </View>
      <View style={{ marginTop: 25,alignItems:'center'}}>
        <BannerCard
        text ={`Math’s for Computer 
        Science`} 
        fontsize={24}
        />
      </View>
      <ScrollView>
      <FlatList
            // scrollEnabled={true}
            data={data}
            renderItem={({item}) =>{ 
              return(
              <ListCard
              text={item.lesson}
              />
            
            )}}
            key={index => index}
            keyExtractor={(item, index) => index}
          />
      </ScrollView>
      <View style={{ position: "absolute", bottom: 0,height:140 }}>
        <Buttom/>
      </View>
    </View>
  );
};

export default LearnScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundColor,
      },
});
