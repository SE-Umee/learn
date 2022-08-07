import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import * as Colors from "../constants/colors";
import BannerCard from "../component/bannerCard";
import ItemCard from "../component/ItemCard";
import Buttom from "../component/buttom";
const AppScreen = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: 35,
        }}
      >
        <Image source={require("../asset/images/lolo.png")} />
      </View>
      <View style={{ marginTop: 20,flex:1,alignItems:'center'}}>
        <BannerCard
          image={require("../asset/images/rectangles.png")}
          containerbackground="#fff"
          text="App"
          width={64}
          height={64}
          marginleft={100}
          fontsize={32}
        />
        <View style={{ alignItems: "center" }}>
        <View style={{ flexDirection: "row" }}>
          <ItemCard
            image={require("../asset/images/stars.png")}
            containerbackground="#fff"
            buttonbackground="#fff"
            text="Rate App"
            textcolor="#2F2E41"
            width={98}
            height={42}
          />
          <ItemCard
            image={require("..//asset/images/setting.png")}
            containerbackground="#fff"
            buttonbackground="#fff"
            text="Setting's"
            textcolor="#2F2E41"
            width={67}
            height={67}
          />
        </View>

        <View style={{ flexDirection: "row" }}>
          <ItemCard
            image={require("../asset/images/share.png")}
            containerbackground="#fff"
            buttonbackground="#fff"
            text="Share App"
            textcolor="#2F2E41"
            width={54}
            height={64}
          />
          <ItemCard
            image={require("..//asset/images/privacy.png")}
            containerbackground="#fff"
            buttonbackground="#fff"
            text="Privacy Policy"
            textcolor="#2F2E41"
            width={59}
            height={63}
          />
        </View>
      </View>
      <View style={{ position: "absolute", bottom: 0,height:140 }}>
         <Buttom />
      </View>
      </View>
      

    </View>
  );
};

export default AppScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    alignItems:'center'
  },
});
