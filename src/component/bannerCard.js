import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import * as Colors from "../constants/colors";

const BannerCard = (props) => {
  return (
    <View style={styles.BannerCard}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={[styles.Text,{fontSize:props.fontsize}]}>{props.text}</Text>
        <Image
          source={props.image}
          style={[styles.Image,{width:props.width,height:props.height,marginLeft:props.marginleft}]}
        />
      </View>
    </View>
  );
};

export default BannerCard;

const styles = StyleSheet.create({
  BannerCard: {
    backgroundColor: "#fff",
    height: 110,
    width: 370,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
  },
  Text: {
    fontSize: 32,
    fontWeight: "600",
    color: Colors.textcolor,
    marginLeft: 5,
  },
  Image: {
    width: 89.41,
    height: 74.51,
    marginLeft: 40,
  },
});
