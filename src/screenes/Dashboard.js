import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import ItemCard from "../component/ItemCard";
import Buttom from "../component/buttom";
const Dashboard = (props) => {
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
          marginTop: 30,
          marginHorizontal: 15,
          flexDirection: "row",
        }}
      >
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 32, fontWeight: "600" }}>Hi Learner !</Text>
          <Text
            style={{ fontSize: 15, fontWeight: "400" }}
          >{`What Do you want to 
learn today?`}</Text>
        </View>
        <Image source={require("../asset/images/profile.png")} />
      </View>
      <View style={{ alignItems: "center" }}>
        <View style={{ flexDirection: "row" }}>
          <ItemCard
            image={require("../asset/images/angle.png")}
            arror={require("../asset/images/whiteArrow.png")}
            containerbackground="#fff"
            buttonbackground="#FF6584"
            text="Languages"
            textcolor="#fff"
            width={64}
            height={40}
            onPress={()=>props.navigation.navigate("Languages")}
          />
          <ItemCard
            image={require("..//asset/images/study.png")}
            arror={require("../asset/images/arrow.png")}
            containerbackground="#FF6584"
            buttonbackground="#fff"
            text="Learn"
            width={94}
            height={86}
          />
        </View>
        <ItemCard
          image={require("../asset/images/rectangles.png")}
          arror={require("../asset/images/whiteArrow.png")}
          containerbackground="#fff"
          buttonbackground="#FF6584"
          text="Apps"
          textcolor="#fff"
          width={64}
          height={64}
          onPress={()=>props.navigation.navigate("AppScreen")}
        />
      </View>
      <View>
        <Buttom/>
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    //alignItems:'center'
  },
});
