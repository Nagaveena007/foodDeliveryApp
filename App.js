import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import { store } from "./redux/store";
//import { store } from "react-redux";
//import { TailwindProvider } from 'tailwindcss-react-native';

import { Provider } from "react-redux";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Deliveroo" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
