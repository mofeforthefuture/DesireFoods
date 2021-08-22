import 'react-native-gesture-handler';
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Location from '../pages/Location';



const Stack = createStackNavigator();
const { Navigator, Screen } = Stack;

export default function Main() {
    return (
        <Navigator headerMode='none' initialRouteName="Location">
            <Screen name="Location" component={Location} />
        </Navigator>
    )
}