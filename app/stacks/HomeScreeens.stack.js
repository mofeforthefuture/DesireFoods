import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/Home/Index';
import RestaurantDisplay from '../pages/Home/RestaurantDisplay';
import Index from '../pages/Home/Index';
import Notifications from '../pages/Home/Notifications';

const Stack = createStackNavigator();
const {Navigator, Screen} = Stack;

export default function HomeScreen() {
  return (
    <Navigator headerMode="none" initialRouteName="index">
      <Screen name="index" component={Index} />
      <Screen name="notifications" component={Notifications} />
      <Screen name="RestaurantDisplay" component={RestaurantDisplay} />
    </Navigator>
  );
}
