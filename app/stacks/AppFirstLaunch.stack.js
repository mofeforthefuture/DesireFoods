import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplachScreen from '../pages/appLaunch/SplashScreen';
import Login from '../pages/appLaunch/Login';
import Register from '../pages/appLaunch/Register';

const Stack = createStackNavigator();
const {Navigator, Screen} = Stack;

export default function AppFirstLaunch() {
  return (
    <Navigator headerMode="none" initialRouteName="SplashScreen">
      <Screen name="SplashScreen" component={SplachScreen} />
      <Screen name="Login" component={Login} />
      <Screen name="Register" component={Register} />
    </Navigator>
  );
}
