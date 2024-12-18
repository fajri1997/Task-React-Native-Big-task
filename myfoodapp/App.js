import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { CartProvider } from "./src/Screens/CartContext";
import MainScreen from "./src/Screens/Home/MainScreen";
import MenuScreen from "./src/Screens/Home/MenuScreen";
import CartScreen from "./src/Screens/CartScreen";
import DishDetailsScreen from "./src/Screens/Home/DishDetailsScreen";
const Stack = createStackNavigator();

const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={MainScreen} />
          <Stack.Screen name="MenuScreen" component={MenuScreen} />
          <Stack.Screen name="CartScreen" component={CartScreen} />
          <Stack.Screen
            name="DishDetailsScreen"
            component={DishDetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};

export default App;
