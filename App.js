import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AppFirstLaunch from './app/stacks/AppFirstLaunch.stack';
import Main from './app/stacks/Main.stack';

const Stack = createStackNavigator();
const {Navigator, Screen} = Stack;

export default function App() {
  return (
    <NavigationContainer>
      <Navigator headerMode="none" initialRouteName="AppFirstLaunch">
        <Screen name="AppFirstLaunch" component={AppFirstLaunch} />
        <Screen name="Main" component={Main} />
      </Navigator>
    </NavigationContainer>
  );
}
