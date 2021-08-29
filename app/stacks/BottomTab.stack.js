import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome, faUtensils, faUser } from '@fortawesome/free-solid-svg-icons'
import User from '../pages/User/Index';
import { COLORS } from '../constants/themes';
import Cart from '../pages/Cart/Index';
import HomeScreen from './HomeScreeens.stack';
// import Home from '../pages/Home/Index';



const Tab = createBottomTabNavigator();

export default function BottomTab() {
    return (
        <Tab.Navigator
            screenOptions={{ headerShown: false }}
            tabBarOptions={{

                showLabel: false,
                style: {

                    elevation: 0,
                    backgroundColor: COLORS.white,
                    height: '7%',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
            }}>
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        top: 10,
                    }}>
                        <FontAwesomeIcon icon={faHome} size={20} color={focused ? COLORS.red : COLORS.black} />
                    </View>
                )
            }} />

            <Tab.Screen name="Cart" component={Cart} options={{
                tabBarIcon: ({ focused }) => (
                    <TouchableOpacity style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        bottom: 10,
                        backgroundColor: COLORS.red,
                        width: 60,
                        height: 60,
                        borderRadius: 30,
                    }}>

                        <FontAwesomeIcon icon={faUtensils} size={20} color={focused ? COLORS.white : COLORS.black} />

                    </TouchableOpacity>
                )
            }} />
            <Tab.Screen name="User" component={User} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        top: 10,
                    }}>
                        <FontAwesomeIcon icon={faUser} size={20} color={focused ? COLORS.red : COLORS.black} />

                    </View>
                )
            }} />
        </Tab.Navigator>
    );
}