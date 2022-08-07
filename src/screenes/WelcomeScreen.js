import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import * as Colors from "../constants/colors";

export default function WelcomeScreen(props) {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{ marginVertical: 80 }}
          source={require("../asset/images/undraw_super_thank_you_re_f8bo.png")}
        />
      </View>
      <View style={styles.logo}>
        <Image source={require("../asset/images/lolo.png")} />
        <Text style={styles.welcomeText}>Welcome!</Text>
        <Text
          style={{ textAlign: "center", fontSize: 16, fontWeight: "600" }}
        >{`Start your learning 
Journey wit Shiksha Code Now...`}</Text>
      </View>
      <TouchableOpacity style={styles.GetStarted} onPress={()=> props.navigation.navigate('DashBoard')}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 16,
            fontWeight: "600",
            color: Colors.backgroundColor,
          }}
        >
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundColor,
    flex: 1,
    alignItems: "center",
  },
  welcomeText: {
    textAlign: "center",
    fontSize: 48,
    fontWeight: "600",
    paddingVertical: 25,
  },
  GetStarted: {
    backgroundColor: Colors.button,
    width: 200,
    height: 50,
    marginTop: 75,
    borderRadius: 10,
    justifyContent: "center",
  },
});
