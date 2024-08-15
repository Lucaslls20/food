import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Inicial from "./Components/Inicial/Inicial";
import Login from "./Components/Inicial/Login";
import Register from "./Components/Inicial/Register";
import Home from "./Routes/Home";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const InicialStack = () => {
  return (
    <Stack.Navigator initialRouteName="Inicial">
      <Stack.Screen name="Inicial" component={Inicial} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="InicialStack">
        <Tab.Screen name="Inicial" component={InicialStack} />
        <Tab.Screen name="Home" component={Home} />
    
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
