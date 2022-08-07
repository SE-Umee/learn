import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import ItemCard from "../component/ItemCard";
import Buttom from "../component/buttom";
import * as Colors from "../constants/colors";

const Languages = (props) => {
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
        <Text
          style={{ fontSize: 32, fontWeight: "600", color: Colors.textcolor }}
        >
          Hi Champ!
        </Text>
        <Text
          style={{ fontSize: 15, fontWeight: "400", color: Colors.textcolor }}
        >{`Lets Learn Programming 
Languages.`}</Text>
      </View>
      <View
        style={{
          marginTop: 10,
          marginHorizontal: 15,
        }}
      >
        <Text
          style={{ fontSize: 32, fontWeight: "600", color: Colors.textcolor }}
        >
          Languages
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <View style={{ flexDirection: "row" }}>
          <ItemCard
            image={require("../asset/images/python.png")}
            containerbackground="#fff"
            buttonbackground="#FF6584"
            text="Paython"
            textcolor="#fff"
            width={98}
            height={82}
            onPress={() => {
              props.navigation.navigate("LanguagesLearn", {
                text: "Python",
                image:require('../asset/images/python.png')
              });
            }}
          />
          <ItemCard
            image={require("..//asset/images/java.png")}
            containerbackground="#fff"
            buttonbackground="#FF6584"
            text="Java"
            textcolor="#fff"
            width={100}
            height={100}
            onPress={() => {props.navigation.navigate("LanguagesLearn",{
              text: "java",
              image:require('../asset/images/java.png'),
            });}}
          />
        </View>

        <View style={{ flexDirection: "row" }}>
          <ItemCard
            image={require("../asset/images/cpp.png")}
            containerbackground="#fff"
            buttonbackground="#FF6584"
            text="C++"
            textcolor="#fff"
            width={85}
            height={75}
            onPress={() => {props.navigation.navigate("LanguagesLearn",{
              text: "C++",
              image:require('../asset/images/cpp.png'),
            });}}
          />
          <ItemCard
            image={require("..//asset/images/js.png")}
            containerbackground="#fff"
            buttonbackground="#FF6584"
            text="javaScript"
            textcolor="#fff"
            width={81}
            height={81}
            onPress={() => {props.navigation.navigate("LanguagesLearn",{
              text: "JS",
              image:require('../asset/images/js.png'),
            });}}
          />
        </View>
      </View>
      <View style={{ position: "absolute", bottom: 0, height: 140 }}>
        <Buttom />
      </View>
    </View>
  );
};

export default Languages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    //alignItems:'center'
  },
});
