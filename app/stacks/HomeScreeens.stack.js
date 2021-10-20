import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/Home/Index';
import MealDisplay from '../pages/Home/MealDisplay';
import RestaurantDisplay from '../pages/Home/RestaurantDisplay';
import Index from '../pages/Home/Index';

const Stack = createStackNavigator();
const {Navigator, Screen} = Stack;

export default function HomeScreen() {
  return (
    <Navigator headerMode="none" initialRouteName="index">
      <Screen name="index" component={Index} />
      <Screen name="mealDisplay" component={MealDisplay} />
      <Screen name="RestaurantDisplay" component={RestaurantDisplay} />
    </Navigator>
  );
}
