import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Location from '../pages/appLaunch/Location';
import BottomTab from './BottomTab.stack';
import Home from '../pages/Home/Index';

const Stack = createStackNavigator();
const {Navigator, Screen} = Stack;

export default function Main() {
  return (
    <Navigator headerMode="none" initialRouteName="Location">
      <Screen
        name="Location"
        component={Location}
        options={{
          navigationOptions: {
            gesturesEnabled: false,
          },
        }}
      />
      <Screen name="BottomTab" component={BottomTab} />
    </Navigator>
  );
}
