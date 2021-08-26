import 'react-native-gesture-handler';
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home/Index';




const Stack = createStackNavigator();
const { Navigator, Screen } = Stack;

export default function HomeScreen() {
    return (
        <Navigator headerMode='none' initialRouteName="Home">
            <Screen name="Home" component={Home} />

        </Navigator>
    )
}