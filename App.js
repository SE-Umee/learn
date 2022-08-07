import { View } from "react-native";
import Dashboard from "./src/screenes/Dashboard";
import Languages from "./src/screenes/Languages";
import WelcomeScreen from "./src/screenes/WelcomeScreen";
import AppScreen from "./src/screenes/app";
import LearnScreen from "./src/screenes/LearnScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LanguagesLearn from "./src/screenes/LanguagesLearn";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <Stack.Screen name="DashBoard" component={Dashboard} />
          <Stack.Screen name="Languages" component={Languages} />
          <Stack.Screen name="AppScreen" component={AppScreen} />
          <Stack.Screen name="LearnScreen" component={LearnScreen}/>
          <Stack.Screen name="LanguagesLearn" component={LanguagesLearn}/>
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>

  );
}
