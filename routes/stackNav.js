import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

import FranchiseInformation from "../screens/FranchiseInformation";
import ManageStore from "../screens/ManageStore";
import IndividualPages from "../screens/IndividualPages";

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Screen name="FranchiseInformation" component={FranchiseInformation} />
    <Screen name="ManageStore" component={ManageStore} />
    <Screen name="IndividualPages" component={IndividualPages} />
  </Stack.Navigator>
);

export const NonAuthAppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
