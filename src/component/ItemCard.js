import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

const ItemCard = (props) => {
  return (
    <View
      style={[styles.ItemCard, { backgroundColor: props.containerbackground }]}
    >
      <Image
        source={props.image}
        style={[styles.Image, { width: props.width, height: props.height }]}
      />
      <TouchableOpacity
        style={[styles.btn, { backgroundColor: props.buttonbackground }]}
        onPress={props.onPress}
      >
        <Text style={[styles.text, { color: props.textcolor }]}>
          {props.text}
        </Text>
        <Image
          source={props.arror}
          style={{ width: 7, height: 7, marginLeft: 5 }}
        />

      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  ItemCard: {
    backgroundColor: "#FF6584",
    height: 159,
    width: 127,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    margin: 40,
    elevation: 10,
  },
  Image: {
    width: 93,
    height: 85,
  },
  text: {
    color: "#FF6584",
    fontSize: 10,
    fontWeight: "500",
  },
  btn: {
    marginTop: 10,
    backgroundColor: "#fff",
    width: 90,
    height: 29,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    flexDirection: "row",
  },
});

export default ItemCard;
