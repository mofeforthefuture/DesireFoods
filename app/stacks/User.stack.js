import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import User from '../pages/User/Index';

const Stack = createStackNavigator();
const {Navigator, Screen} = Stack;

export default function UserScreens() {
  return (
    <Navigator headerMode="none" initialRouteName="User">
      <Screen name="User" component={User} />
    </Navigator>
  );
}
